# Review: web/src/lib/supabaseServer.ts
**Language/Framework:** TypeScript (Supabase Server Client)  
**LOC (approx):** 24  
**Overall Rating (0–5):** 4.1  
**Risk Level:** Medium

## Summary
- Server-side Supabase client factory for API routes and Server Actions
- Good environment variable validation with helpful error messages
- Falls back to anon key if service role key not available (potential security issue)
- Proper session configuration for server-side usage

## Findings by Parameter

### 1. Code Quality & Readability
- ✅ Strengths:
  - Clean, focused function
  - Good comments explaining purpose
  - Clear error messages
  - Proper TypeScript usage
- ⚠️ Issues:
  - Function name could be more concise (`createServerClient`)
  - Non-null assertions still present
- 💡 Suggestions:
  - Rename to `createServerClient` for brevity
  - Add JSDoc documentation

### 2. Correctness & Logic
- ✅ Strengths:
  - Proper environment variable validation
  - Correct session configuration for server-side
  - Good fallback logic
- ⚠️ Issues:
  - Fallback to anon key defeats purpose of server client
  - Creates new client on every call (no singleton pattern)
  - No validation that service role key is actually service role
- 💡 Suggestions:
  - Remove anon key fallback or add warning
  - Implement singleton pattern for performance
  - Validate key format/permissions

### 3. Performance & Efficiency
- ✅ Strengths:
  - Disabled session persistence (good for server)
  - Disabled auto-refresh (appropriate for server)
- ⚠️ Issues:
  - Creates new client instance on every call (expensive)
  - No connection pooling
  - Repeated environment variable access
- 💡 Suggestions:
  - Implement singleton pattern
  - Cache client instance
  - Read env vars once at module level

### 4. Security & Data Handling
- ✅ Strengths:
  - Uses service role key for elevated permissions
  - Proper session configuration prevents leaks
  - Good error messages don't expose sensitive data
- ⚠️ Issues:
  - **WARNING**: Falls back to anon key (security downgrade)
  - Service role key should never be exposed to client
  - No validation of key type
  - No audit logging for service role usage
- 💡 Suggestions:
  - Remove anon key fallback
  - Add warning if service role key not found
  - Implement audit logging for sensitive operations
  - Add key validation

### 5. Error Handling & Reliability
- ✅ Strengths:
  - Explicit error throwing with helpful messages
  - Validates required environment variables
  - Clear error messages for debugging
- ⚠️ Issues:
  - Errors thrown synchronously (no async error handling)
  - No connection error handling
  - No retry logic
- 💡 Suggestions:
  - Add connection validation
  - Implement health check method
  - Add retry logic for transient failures

### 6. Consistency & Standards
- ✅ Strengths:
  - Follows Supabase documentation patterns
  - Consistent with Next.js server-side patterns
  - Good separation from client-side client
- ⚠️ Issues:
  - Naming inconsistent with client file (supabase.ts vs supabaseServer.ts)
  - Should export singleton, not factory function
- 💡 Suggestions:
  - Standardize naming convention
  - Export configured client instance
  - Add type exports

### 7. Scalability & Extensibility
- ✅ Strengths:
  - Factory pattern allows customization
  - Modular design
- ⚠️ Issues:
  - Creating new client on every call doesn't scale
  - No support for different configurations
  - Hard to extend for different use cases
- 💡 Suggestions:
  - Implement singleton with lazy initialization
  - Add configuration options parameter
  - Support multiple client instances for different purposes

### 8. Testing & Coverage
- ✅ Strengths:
  - Pure function easy to test
  - Clear error cases to test
- ⚠️ Issues:
  - No tests
  - No mock client for testing
  - Environment variable dependency makes testing harder
- 💡 Suggestions:
  - Add unit tests for error cases
  - Create mock server client
  - Test environment variable validation

### 9. Documentation & Comments
- ✅ Strengths:
  - Good inline comment explaining purpose
  - Clear function intent
- ⚠️ Issues:
  - No JSDoc documentation
  - No usage examples
  - No security warnings
  - Missing documentation on when to use vs client
- 💡 Suggestions:
  - Add comprehensive JSDoc
  - Document security implications
  - Add usage examples
  - Explain difference from client-side client

### 10. Dependencies & Environment
- ✅ Strengths:
  - Uses official Supabase library
  - Proper environment variable usage
  - Good validation
- ⚠️ Issues:
  - Fallback to anon key is problematic
  - No type checking for environment variables
  - Missing .env documentation
- 💡 Suggestions:
  - Remove anon key fallback
  - Add typed environment configuration
  - Document required environment variables

## High-Impact Snippets

```diff
# Implement singleton pattern and remove anon key fallback
+import { createClient, SupabaseClient } from '@supabase/supabase-js';
+import type { Database } from '@/types/database';
+
+let serverClient: SupabaseClient<Database> | null = null;
+
+/**
+ * Creates or returns a singleton Supabase server client
+ * 
+ * This client uses the service role key for elevated permissions.
+ * Only use in Server Actions, API Routes, or server-side code.
+ * Never expose this client or its methods to the browser.
+ * 
+ * @throws {Error} If required environment variables are missing
+ * @returns {SupabaseClient<Database>} Configured Supabase client
+ * 
+ * @example
+ * ```typescript
+ * // In a Server Action
+ * 'use server';
+ * import { getServerClient } from '@/lib/supabaseServer';
+ * 
+ * export async function getData() {
+ *   const supabase = getServerClient();
+ *   const { data, error } = await supabase.from('table').select();
+ *   return data;
+ * }
+ * ```
+ */
-export function createServerSupabaseClient() {
+export function getServerClient(): SupabaseClient<Database> {
+    // Return cached instance if available
+    if (serverClient) {
+        return serverClient;
+    }
+
     const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
-    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
+    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

     if (!supabaseUrl) {
         throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
     }

     if (!supabaseServiceKey) {
-        throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
+        throw new Error(
+            'Missing SUPABASE_SERVICE_ROLE_KEY environment variable.\n' +
+            'This is required for server-side operations.\n' +
+            'Add it to your .env.local file (never commit this key!):\n' +
+            'SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here'
+        );
     }

-    return createClient(supabaseUrl, supabaseServiceKey, {
+    // Validate that it's actually a service role key (basic check)
+    if (supabaseServiceKey.startsWith('eyJ') && supabaseServiceKey.includes('anon')) {
+        console.warn(
+            '⚠️ WARNING: Using anon key instead of service role key.\n' +
+            'Server-side operations may fail due to insufficient permissions.'
+        );
+    }
+
+    serverClient = createClient<Database>(supabaseUrl, supabaseServiceKey, {
         auth: {
             persistSession: false,
             autoRefreshToken: false,
         },
     });
+
+    return serverClient;
 }
+
+/**
+ * Legacy function name for backwards compatibility
+ * @deprecated Use getServerClient() instead
+ */
+export const createServerSupabaseClient = getServerClient;
+
+/**
+ * Health check for Supabase server connection
+ * @returns Promise<boolean> - true if connected, false otherwise
+ */
+export async function checkServerConnection(): Promise<boolean> {
+    try {
+        const client = getServerClient();
+        const { error } = await client.from('contact_submissions').select('count').limit(1);
+        return !error;
+    } catch {
+        return false;
+    }
+}
```

```diff
# Add typed environment configuration
+// Create a new file: src/lib/env.ts
+/**
+ * Type-safe environment variable configuration
+ */
+export const env = {
+    supabase: {
+        url: process.env.NEXT_PUBLIC_SUPABASE_URL,
+        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
+        serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
+    },
+    emailjs: {
+        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
+        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
+        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
+    },
+} as const;
+
+/**
+ * Validate all required environment variables
+ * Call this at application startup
+ */
+export function validateEnv() {
+    const required = {
+        'NEXT_PUBLIC_SUPABASE_URL': env.supabase.url,
+        'NEXT_PUBLIC_SUPABASE_ANON_KEY': env.supabase.anonKey,
+        'SUPABASE_SERVICE_ROLE_KEY': env.supabase.serviceRoleKey,
+    };
+
+    const missing = Object.entries(required)
+        .filter(([_, value]) => !value)
+        .map(([key]) => key);
+
+    if (missing.length > 0) {
+        throw new Error(
+            `Missing required environment variables:\n${missing.join('\n')}`
+        );
+    }
+}
```

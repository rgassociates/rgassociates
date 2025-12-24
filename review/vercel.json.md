# Review: vercel.json
**Language/Framework:** JSON (Vercel Configuration)  
**LOC (approx):** 16  
**Overall Rating (0–5):** 2.5  
**Risk Level:** Medium

## Summary
- Vercel deployment configuration for monorepo structure
- **OUTDATED**: Uses deprecated Vercel v2 configuration format
- May cause deployment issues with modern Vercel
- Should be updated or removed

## Findings by Parameter

### 1. Code Quality & Readability
- ✅ Strengths:
  - Simple, clear structure
  - Easy to understand routing
- ⚠️ Issues:
  - Uses deprecated v2 format
  - No comments explaining purpose
  - Outdated configuration pattern
- 💡 Suggestions:
  - Update to modern Vercel configuration
  - Add comments explaining monorepo structure
  - Consider removing if not needed

### 2. Correctness & Logic
- ✅ Strengths:
  - Logical routing from root to /web subdirectory
- ⚠️ Issues:
  - **CRITICAL**: `version: 2` is deprecated
  - **CRITICAL**: `builds` is deprecated (use `buildCommand` instead)
  - **CRITICAL**: `routes` is deprecated (use `rewrites` in next.config.ts)
  - `outputDirectory` may not work as expected
  - May not work with Next.js 16
- 💡 Suggestions:
  - Remove this file and use Next.js configuration
  - Or update to modern Vercel configuration
  - Use `vercel.json` only for project-level settings

### 3. Performance & Efficiency
- ✅ Strengths:
  - Minimal configuration overhead
- ⚠️ Issues:
  - Deprecated format may cause slower deployments
  - May not leverage modern Vercel features
  - No build optimization settings
- 💡 Suggestions:
  - Use modern Vercel configuration for better performance
  - Leverage Vercel's automatic optimizations

### 4. Security & Data Handling
- ✅ Strengths:
  - No sensitive data exposed
- ⚠️ Issues:
  - No security headers configuration
  - No environment variable configuration
  - Missing security best practices
- 💡 Suggestions:
  - Configure security headers in next.config.ts instead
  - Use Vercel environment variables UI

### 5. Error Handling & Reliability
- ✅ Strengths:
  - Simple configuration with low error risk
- ⚠️ Issues:
  - **CRITICAL**: May fail on modern Vercel
  - No error handling configuration
  - No fallback routes
- 💡 Suggestions:
  - Test deployment with current configuration
  - Update to prevent deployment failures
  - Add error page configuration

### 6. Consistency & Standards
- ✅ Strengths:
  - None (uses deprecated format)
- ⚠️ Issues:
  - **CRITICAL**: Inconsistent with modern Vercel standards
  - Inconsistent with Next.js best practices
  - Outdated configuration pattern
- 💡 Suggestions:
  - Update to modern Vercel configuration
  - Follow current Vercel documentation
  - Align with Next.js 16 best practices

### 7. Scalability & Extensibility
- ✅ Strengths:
  - Simple structure
- ⚠️ Issues:
  - Deprecated format limits future extensibility
  - Hard to add modern Vercel features
  - May block future upgrades
- 💡 Suggestions:
  - Migrate to modern configuration
  - Use Vercel's latest features

### 8. Testing & Coverage
- ✅ Strengths:
  - Configuration is testable via deployment
- ⚠️ Issues:
  - No validation of configuration
  - May fail silently
- 💡 Suggestions:
  - Test deployment before production
  - Validate configuration locally

### 9. Documentation & Comments
- ✅ Strengths:
  - None
- ⚠️ Issues:
  - No comments explaining purpose
  - No documentation for monorepo structure
  - No migration notes
- 💡 Suggestions:
  - Add comments explaining configuration
  - Document why monorepo structure is used
  - Add migration guide if updating

### 10. Dependencies & Environment
- ✅ Strengths:
  - Specifies Next.js builder
- ⚠️ Issues:
  - **CRITICAL**: Deprecated builder specification
  - No Node.js version specified
  - No environment configuration
- 💡 Suggestions:
  - Remove or update configuration
  - Specify Node.js version in package.json
  - Use Vercel UI for environment variables

## High-Impact Snippets

```diff
# RECOMMENDED: Remove this file entirely
# Modern Next.js projects don't need vercel.json for basic deployments
# Vercel auto-detects Next.js and handles everything automatically

# If you need custom configuration, use this modern format:
-{
-    "version": 2,
-    "builds": [
-        {
-            "src": "web/package.json",
-            "use": "@vercel/next"
-        }
-    ],
-    "routes": [
-        {
-            "src": "/(.*)",
-            "dest": "/web/$1"
-        }
-    ],
-    "outputDirectory": "web/.next"
-}

+{
+  "$schema": "https://openapi.vercel.sh/vercel.json",
+  "buildCommand": "cd web && npm run build",
+  "devCommand": "cd web && npm run dev",
+  "installCommand": "cd web && npm install",
+  "framework": "nextjs",
+  "outputDirectory": "web/.next"
+}
```

```json
// ALTERNATIVE: If you have a monorepo, use this structure
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "crons": []
}
```

```json
// RECOMMENDED: Update package.json in root to specify build directory
// Root package.json
{
  "name": "rg-associates",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "cd web && npm run dev",
    "build": "cd web && npm run build",
    "start": "cd web && npm start",
    "lint": "cd web && npm run lint"
  }
}
```

```bash
# RECOMMENDED: Project structure for Vercel
# Option 1: Move everything from /web to root (simplest)
rg-associates/
├── src/
├── public/
├── package.json
├── next.config.ts
└── (no vercel.json needed)

# Option 2: Keep monorepo structure (current)
rg-associates/
├── web/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── next.config.ts
├── package.json (root, with scripts)
└── vercel.json (updated format)

# Option 3: Use Vercel's monorepo support
# Set "Root Directory" to "web" in Vercel dashboard
# No vercel.json needed
```

## Migration Steps

### Option A: Remove vercel.json (Recommended)
```bash
# 1. Delete vercel.json
rm vercel.json

# 2. In Vercel dashboard, set:
#    - Root Directory: web
#    - Build Command: npm run build
#    - Output Directory: .next
#    - Install Command: npm install

# 3. Deploy and test
```

### Option B: Update to Modern Format
```bash
# 1. Update vercel.json with modern format (see snippets above)

# 2. Test locally with Vercel CLI
npm install -g vercel
vercel dev

# 3. Deploy and test
vercel --prod
```

### Option C: Flatten Structure (Most Recommended)
```bash
# 1. Move all files from web/ to root
mv web/* .
mv web/.* . 2>/dev/null || true

# 2. Remove web directory
rm -rf web

# 3. Delete vercel.json
rm vercel.json

# 4. Update .gitignore if needed

# 5. Deploy (Vercel auto-detects Next.js)
```

## Deployment Checklist

- [ ] Backup current vercel.json
- [ ] Choose migration option (A, B, or C)
- [ ] Update configuration
- [ ] Test deployment in preview environment
- [ ] Verify all routes work correctly
- [ ] Check environment variables
- [ ] Monitor for errors
- [ ] Update documentation

## Additional Vercel Configuration (Optional)

```json
// If you need advanced features, add to vercel.json:
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://api.example.com/:path*"
    }
  ]
}
```

**IMPORTANT**: The current vercel.json uses deprecated v2 format and should be updated or removed before the next deployment to avoid potential issues.

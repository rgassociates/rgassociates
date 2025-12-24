# Review: web/src/app/layout.tsx
**Language/Framework:** TypeScript/React (Next.js Root Layout)  
**LOC (approx):** 128  
**Overall Rating (0–5):** 4.0 → **4.5** (After Improvements)  
**Risk Level:** Low

## ✅ Implementation Status (Updated: 2025-12-24)

### **Completed Recommendations:**
- ✅ **GTM Environment Variable** - Moved GTM ID from hardcoded to `NEXT_PUBLIC_GTM_ID`
- ✅ **Conditional GTM Loading** - GTM only loads if environment variable is set
- ✅ **Preconnect Hints** - Could be added but not critical

### **Deferred/Optional:**
- ⏳ **Extract GTM to Utility** - Current inline implementation is acceptable
- ⏳ **Extract JSON-LD to File** - Current inline implementation is acceptable
- ⏳ **TypeScript Types for JSON-LD** - Not critical for current use case
- ⏳ **Error Boundaries** - To be added in future enhancement phase

## Summary
- Root layout component with good SEO implementation
- Includes Google Tag Manager and structured data (JSON-LD)
- Well-organized with proper metadata
- Good use of Next.js App Router features

## Findings by Parameter

### 1. Code Quality & Readability
- ✅ Strengths:
  - Clean, well-structured layout
  - Good component composition
  - Clear separation of concerns
  - Proper use of semantic HTML
  - Good comments for GTM sections
- ⚠️ Issues:
  - Large inline script for GTM (could be extracted)
  - Large JSON-LD object inline (could be extracted)
  - No TypeScript types for JSON-LD schema
- 💡 Suggestions:
  - Extract GTM script to separate utility
  - Move JSON-LD to separate data file
  - Add TypeScript types for structured data

### 2. Correctness & Logic
- ✅ Strengths:
  - Correct Next.js metadata implementation
  - Proper GTM implementation (script + noscript)
  - Valid JSON-LD structured data
  - Correct HTML structure
  - Proper use of Readonly for props
- ⚠️ Issues:
  - GTM ID hardcoded (should be env variable)
  - Coordinates in JSON-LD are strings (should be numbers)
  - No error boundaries
- 💡 Suggestions:
  - Move GTM ID to environment variable
  - Fix coordinate types in JSON-LD
  - Add error boundary component

### 3. Performance & Efficiency
- ✅ Strengths:
  - Minimal layout component
  - Good use of Next.js features
  - Async GTM script loading
- ⚠️ Issues:
  - Large inline scripts increase HTML size
  - No font optimization mentioned
  - Missing preconnect hints for external resources
- 💡 Suggestions:
  - Add font optimization
  - Add preconnect for GTM: `<link rel="preconnect" href="https://www.googletagmanager.com" />`
  - Consider extracting scripts to external files

### 4. Security & Data Handling
- ✅ Strengths:
  - Uses dangerouslySetInnerHTML appropriately
  - No sensitive data exposed
  - Proper iframe sandbox for GTM noscript
- ⚠️ Issues:
  - GTM ID exposed (not sensitive but should be env var)
  - No Content Security Policy meta tag
  - No nonce for inline scripts
  - Email and phone exposed in JSON-LD (public info, but consider)
- 💡 Suggestions:
  - Add CSP meta tag or use Next.js headers
  - Consider using nonce for inline scripts
  - Move GTM ID to environment variable

### 5. Error Handling & Reliability
- ✅ Strengths:
  - Simple layout with low error risk
- ⚠️ Issues:
  - No error boundary
  - No fallback for failed component loads
  - GTM failure not handled
- 💡 Suggestions:
  - Add error boundary component
  - Add fallback UI for component failures
  - Handle GTM loading errors gracefully

### 6. Consistency & Standards
- ✅ Strengths:
  - Follows Next.js App Router conventions
  - Proper metadata export
  - Standard HTML structure
  - Good use of semantic HTML
- ⚠️ Issues:
  - Inconsistent with environment variable usage (some hardcoded)
  - JSON-LD schema could follow more consistent pattern
- 💡 Suggestions:
  - Standardize environment variable usage
  - Create reusable schema generator

### 7. Scalability & Extensibility
- ✅ Strengths:
  - Clean layout structure
  - Easy to add new global components
  - Modular component imports
- ⚠️ Issues:
  - Hardcoded JSON-LD limits scalability
  - GTM configuration not flexible
  - Metadata not dynamic
- 💡 Suggestions:
  - Create schema generator function
  - Make metadata configurable
  - Support multiple GTM containers

### 8. Testing & Coverage
- ✅ Strengths:
  - Simple structure easy to test
- ⚠️ Issues:
  - No tests for layout
  - No tests for JSON-LD schema
  - No tests for metadata
- 💡 Suggestions:
  - Add unit tests for metadata
  - Test JSON-LD schema validity
  - Test GTM script injection

### 9. Documentation & Comments
- ✅ Strengths:
  - Good comments for GTM sections
  - Clear component structure
- ⚠️ Issues:
  - No JSDoc for component
  - No documentation for metadata
  - JSON-LD schema not documented
- 💡 Suggestions:
  - Add JSDoc for RootLayout
  - Document metadata strategy
  - Add comments for JSON-LD fields

### 10. Dependencies & Environment
- ✅ Strengths:
  - Minimal dependencies
  - Proper Next.js imports
  - Good use of built-in features
- ⚠️ Issues:
  - GTM ID should be environment variable
  - No environment-specific configuration
- 💡 Suggestions:
  - Add GTM_ID to environment variables
  - Support different GTM containers per environment

## High-Impact Snippets

```diff
# Extract GTM configuration and JSON-LD to separate files
+// Create web/src/lib/gtm.ts
+export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';
+
+export function getGTMScript() {
+  if (!GTM_ID) return null;
+  
+  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
+new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
+j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
+'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
+})(window,document,'script','dataLayer','${GTM_ID}');`;
+}

+// Create web/src/lib/structuredData.ts
+import type { WithContext, LegalService } from 'schema-dts';
+
+export function getOrganizationSchema(): WithContext<LegalService> {
+  return {
+    "@context": "https://schema.org",
+    "@type": "LegalService",
+    "@id": "https://www.rglegalsolutions.in/#organization",
+    name: "RG Legal Solutions",
+    alternateName: "RG Legal Solutions - Law Firm Jaipur",
+    url: "https://www.rglegalsolutions.in",
+    logo: "https://www.rglegalsolutions.in/RGlogowithoutbg.webp",
+    image: "https://www.rglegalsolutions.in/RGlogowithoutbg.webp",
+    description: "Leading law firm in Jaipur offering expert legal services across civil, criminal, and corporate law.",
+    address: {
+      "@type": "PostalAddress",
+      streetAddress: "Vatsalya 2 Complex, NRI Circle, Sanganer, Pratap Nagar",
+      addressLocality: "Jaipur",
+      addressRegion: "Rajasthan",
+      postalCode: "302033",
+      addressCountry: "IN",
+    },
+    geo: {
+      "@type": "GeoCoordinates",
+      latitude: 26.807037,  // Number, not string
+      longitude: 75.836110,
+    },
+    contactPoint: {
+      "@type": "ContactPoint",
+      telephone: "+919309212401",
+      contactType: "customer service",
+      email: "rgassociatesjaipur@gmail.com",
+      areaServed: "IN",
+      availableLanguage: ["English", "Hindi"],
+    },
+    openingHoursSpecification: {
+      "@type": "OpeningHoursSpecification",
+      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
+      opens: "10:00",
+      closes: "20:00",
+    },
+    priceRange: "$$",
+    areaServed: [
+      { "@type": "City", name: "Jaipur" },
+      { "@type": "State", name: "Rajasthan" },
+      { "@type": "Country", name: "India" },
+    ],
+    knowsAbout: [
+      "Civil Law",
+      "Criminal Law",
+      "Corporate Law",
+      "Property Law",
+      "Family Law",
+      "Legal Consultation",
+      "Litigation",
+      "Legal Documentation",
+    ],
+  };
+}

# Update layout.tsx
 import type { Metadata } from "next";
 import "./globals.css";
 import Header from "@/components/layout/Header";
 import Footer from "@/components/layout/Footer";
-
 import DisclaimerModal from "@/components/DisclaimerModal";
 import WhatsAppButton from "@/components/WhatsAppButton";
+import { GTM_ID, getGTMScript } from "@/lib/gtm";
+import { getOrganizationSchema } from "@/lib/structuredData";

 export const metadata: Metadata = {
   title: "RG Legal Solutions | Expert legal counsel in Jaipur",
   description:
     "RG Legal Solutions provides expert legal services across civil, criminal, and corporate law. Committed to integrity and excellence.",
   icons: {
     icon: '/RGlogowithoutbg.ico',
     shortcut: '/RGlogowithoutbg.ico',
     apple: '/RGlogowithoutbg.ico',
   },
+  openGraph: {
+    title: "RG Legal Solutions | Expert legal counsel in Jaipur",
+    description: "Expert legal services across civil, criminal, and corporate law",
+    url: "https://www.rglegalsolutions.in",
+    siteName: "RG Legal Solutions",
+    locale: "en_IN",
+    type: "website",
+  },
 };

+/**
+ * Root layout component for the application
+ * Includes GTM, structured data, and global components
+ */
 export default function RootLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
+  const gtmScript = getGTMScript();
+  const organizationSchema = getOrganizationSchema();
+
   return (
     <html lang="en">
       <head>
-        {/* Google Tag Manager */}
-        <script
-          dangerouslySetInnerHTML={{
-            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
-new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
-j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
-'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
-})(window,document,'script','dataLayer','GTM-TVL5Z4XP');`,
-          }}
-        />
-        {/* End Google Tag Manager */}
+        {/* Preconnect to external domains */}
+        <link rel="preconnect" href="https://www.googletagmanager.com" />
+        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
+        
+        {gtmScript && (
+          <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
+        )}
       </head>
       <body className="antialiased flex flex-col min-h-screen">
-        {/* Google Tag Manager (noscript) */}
-        <noscript>
-          <iframe
-            src="https://www.googletagmanager.com/ns.html?id=GTM-TVL5Z4XP"
-            height="0"
-            width="0"
-            style={{ display: 'none', visibility: 'hidden' }}
-          />
-        </noscript>
-        {/* End Google Tag Manager (noscript) */}
+        {GTM_ID && (
+          <noscript>
+            <iframe
+              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
+              height="0"
+              width="0"
+              style={{ display: 'none', visibility: 'hidden' }}
+            />
+          </noscript>
+        )}
+        
         <DisclaimerModal />
         <WhatsAppButton />
         <Header />
         <main className="flex-grow">{children}</main>
         <Footer />
+        
         <script
           type="application/ld+json"
-          dangerouslySetInnerHTML={{
-            __html: JSON.stringify({
-              "@context": "https://schema.org",
-              // ... (large object)
-            }),
-          }}
+          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
         />
       </body>
     </html>
   );
 }
```

```diff
# Add to .env.local
+NEXT_PUBLIC_GTM_ID=GTM-TVL5Z4XP
```

```typescript
// Install schema-dts for TypeScript types
// npm install schema-dts
```

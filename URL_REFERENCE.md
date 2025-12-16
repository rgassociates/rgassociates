# RG Associates - Complete URL Structure

## Quick Reference Guide

### Main Pages (2)
1. Homepage: `http://localhost:3000/`
2. Services Hub: `http://localhost:3000/services`

---

## Service Categories (5)

### 1. Legal Consultation
**URL:** `http://localhost:3000/services/legal-consultation`  
**Services:** 6

1. Civil Litigation Consultation → `/services/legal-consultation/civil-litigation`
2. Criminal Defense Consultation → `/services/legal-consultation/criminal-defense`
3. Corporate Law Consultation → `/services/legal-consultation/corporate-law`
4. Family Law Consultation → `/services/legal-consultation/family-law`
5. Intellectual Property Consultation → `/services/legal-consultation/intellectual-property`
6. Real Estate Consultation → `/services/legal-consultation/real-estate`

---

### 2. Legal Notice
**URL:** `http://localhost:3000/services/legal-notice`  
**Services:** 5

1. Civil Legal Notice → `/services/legal-notice/civil-notice`
2. Criminal Legal Notice → `/services/legal-notice/criminal-notice`
3. Corporate Legal Notice → `/services/legal-notice/corporate-notice`
4. Family Law Notice → `/services/legal-notice/family-law-notice`
5. Property Legal Notice → `/services/legal-notice/property-notice`

---

### 3. Litigation
**URL:** `http://localhost:3000/services/litigation`  
**Services:** 5

1. Civil Litigation → `/services/litigation/civil-litigation`
2. Criminal Litigation → `/services/litigation/criminal-litigation`
3. Corporate Litigation → `/services/litigation/corporate-litigation`
4. Family Court Litigation → `/services/litigation/family-court-litigation`
5. Property Litigation → `/services/litigation/property-litigation`

---

### 4. Legal Research
**URL:** `http://localhost:3000/services/legal-research`  
**Services:** 4

1. Case Law Research → `/services/legal-research/case-law-research`
2. Statutory Research → `/services/legal-research/statutory-research`
3. Due Diligence Reports → `/services/legal-research/due-diligence-reports`
4. Legal Opinion → `/services/legal-research/legal-opinion`

---

### 5. Title Search Report
**URL:** `http://localhost:3000/services/title-search-report`  
**Services:** 4

1. Residential Property Title Search → `/services/title-search-report/residential-property`
2. Commercial Property Title Search → `/services/title-search-report/commercial-property`
3. Agricultural Land Verification → `/services/title-search-report/agricultural-land`
4. Encumbrance Certificate Verification → `/services/title-search-report/encumbrance-certificate`

---

## URL Redirects (Old → New)

These old URLs automatically redirect to the new structure:

1. `/services/civil-litigation` → `/services/legal-consultation/civil-litigation`
2. `/services/criminal-defense` → `/services/legal-consultation/criminal-defense`
3. `/services/corporate-law` → `/services/legal-consultation/corporate-law`
4. `/services/family-law` → `/services/legal-consultation/family-law`
5. `/services/intellectual-property` → `/services/legal-consultation/intellectual-property`
6. `/services/real-estate` → `/services/legal-consultation/real-estate`

---

## Statistics

- **Total Pages:** 31 (1 homepage + 1 services hub + 5 categories + 24 services)
- **Total URLs:** 36 (including 6 redirects)
- **Service Categories:** 5
- **Total Services:** 24
- **Average Services per Category:** 4.8

---

## URL Pattern

```
Homepage:           /
Services Hub:       /services
Category:           /services/{category-slug}
Service Detail:     /services/{category-slug}/{service-slug}
```

---

## For Production

Replace `http://localhost:3000` with your production domain:
- Example: `https://rgassociates.com/services/legal-consultation`

---

## Navigation Access Points

### Header Mega Menu
- Hover "Services" → Shows all 5 categories
- Click category → Goes to category page
- Click "View All Services" → Goes to services hub

### Homepage
- Service cards (first 3 categories)
- "View All Services (24 Total)" button

### Footer
- "Our Services" section lists all 5 categories
- "View All Services →" link

### Breadcrumbs
- Available on all category and service pages
- Format: Home / Services / Category / Service

---

**Last Updated:** December 15, 2024  
**Version:** 2.0 (New Structure)

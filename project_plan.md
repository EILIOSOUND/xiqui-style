# Xiqui Style

## 1. Project Description
A minimalist feminine fashion affiliate website. Single-page application displaying curated fashion products fetched from a Google Sheet. Target users: French-speaking fashion shoppers. Core value: elegant, soft, premium browsing experience with category filtering and affiliate product links.

## 2. Page Structure
- `/` - Home (single SPA page with all sections)

## 3. Core Features
- [x] Header with logo
- [x] Hero section with text overlay
- [x] Fixed left sidebar with category filters
- [x] Product grid (4 columns) with hover effects
- [x] "Dernières Pépites" featured section
- [x] Footer
- [x] Fetch products from Google Sheet API
- [x] Category filtering via sidebar

## 4. Data Model Design
No database needed. Data fetched from:
`https://opensheet.elk.sh/17d9D2k1xXoBoy3bFBTBEPQUfsRiVMEVWVr3SsF9jquE/Feuille%201`

Fields used: title, main_image, affiliate_link, category

## 5. Backend / Third-party Integration Plan
- Supabase: Not needed
- Shopify: Not needed
- Stripe: Not needed
- Data source: Public Google Sheet via opensheet.elk.sh

## 6. Development Phase Plan

### Phase 1: Full SPA Build
- Goal: Build the complete single-page application
- Deliverable: Fully functional Xiqui Style website with all sections

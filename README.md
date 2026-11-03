# MCX Digital Website

Static, multi-page website for MCX Digital.

## Stack
- HTML
- CSS
- Vanilla JavaScript
- Static hosting (planned: Cloudflare Pages)

## Pages
- `index.html` — homepage
- `services.html` — services overview
- `packages.html` — package catalog with future Upwork links
- `contact.html` — contact page layout
- `privacy.html` — draft privacy policy placeholder

## Configuration
Edit `assets/js/config.js` to add the customer portal destination, contact email, and future package links.

## Development notes
- No framework or build step is required.
- Open `index.html` in a browser to preview locally.
- The contact form and package purchase links are intentionally non-functional placeholders.
- Replace all placeholder copy, pricing, legal text, contact details, and external links before launch.
- The privacy page is a draft placeholder and is not legal advice.
- Fonts currently load from Google Fonts; system font fallbacks are included in the CSS.

## Deployment
Connect this repository to Cloudflare Pages using the default branch. For a plain static HTML site, use the repository root as the build output directory and leave the build command empty.

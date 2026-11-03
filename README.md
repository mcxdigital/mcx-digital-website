# MCX Digital Website

Static, multi-page website for MCX Digital.

## Stack
- HTML
- CSS
- Vanilla JavaScript
- Cloudflare Workers Static Assets

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
This repository is connected to a Cloudflare Worker using Workers Builds. A push to the connected production branch should trigger a deployment. The `wrangler.jsonc` file configures the Worker and static asset directory.

# AthaniQ Kolhapur — Responsive E-commerce Frontend

A React + Vite frontend prototype for an artisan Kolhapuri footwear and leather-goods store. Styled in warm cream, leather brown, and gold.

## Features
- Responsive layout for mobile phones (320px+), tablets, laptops, and desktop screens
- Animated logo intro, collection cards, product cards, story cards, upcoming collection, discount modal, login modal, and toast notifications
- Mobile navigation menu and searchable product listing
- Men's, Women's, Kids', and leather-goods collection cards
- Bestsellers with category filters, wishlist toggles, cart quantity indicator, and quick-add actions
- Upcoming items section for chappals, bags, wallets, and belts
- Artisan story/video placeholder, newsletter UI, and first-order 10% offer popup
- Respects reduced-motion preferences

## Run locally
Install Node.js 18 or newer, then from this folder:

```bash
npm install
npm run dev
```

Vite will print a local development URL (normally `http://localhost:5173`). To make a production build:

```bash
npm run build
npm run preview
```

## Project structure
- `src/App.jsx` — page sections and interactive frontend state
- `src/styles.css` — responsive styling, breakpoints, transitions, and animations
- `src/main.jsx` — React entry point
- `index.html` — page metadata and fonts

## Important before production
This is a frontend prototype, not a complete commerce backend. The sample product photos use remote image URLs and require internet access. Login, OTP delivery, real payments, orders, admin operations, and the Spring Boot upcoming-items API are not connected yet. Connect these to your backend, validate all inputs, and protect admin endpoints with Spring Security before launch. Replace demo image URLs with licensed product photos from your store. Configure image/video assets, shipping policies, privacy/terms, and real support links.

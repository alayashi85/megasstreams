# Mega Streams - Project Instructions

## Architecture & Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Modern dark/neon theme)
- **Internationalization:** `next-intl`
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Localization (i18n)
- Supported locales: `en` (English), `ar` (Arabic).
- RTL support is handled automatically based on the locale in `src/app/[locale]/layout.tsx`.
- Translation files are located in `/messages/*.json`.
- Navigation and routing use wrappers from `src/i18n/routing.ts`.

## Styling Conventions
- **Primary Background:** `#0a0a0a` (Deep Charcoal)
- **Neon Purple:** `#b026ff` (used for primary actions/accents)
- **Neon Red:** `#ff003c` (used for secondary actions/popular plans)
- **Glow Effects:** Utility classes `text-glow-purple`, `text-glow-red`, `box-glow-purple`, `box-glow-red` are defined in `globals.css`.

## Development Commands
- `npm run dev`: Start development server.
- `npm run build`: Production build.
- `npm run start`: Start production server.

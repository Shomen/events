# Events (Nuxt + Vue)

A responsive event browsing demo where users can filter events by **category** and **month**, open an event page, and complete a **dummy** multi-step booking flow.

## Live Demo
Check it out here: [Sparkle on Vercel](https://events-woad-seven.vercel.app/)

## Features
- Home landing page with curated copy and featured event highlight
- Events list (`/events`) with category filter + month filter
- Event detail (`/events/[slug]`) with a 4-step booking UI (dummy flow)
- Contact page (`/contact`) with a styled form shell and demo submit state
- About page (`/about`) with dummy content (same visual style)

## Data
- Event catalog stored in json file

## Technologies
- Nuxt 4 + Vue 3 + TypeScript
- Tailwind CSS via `@nuxtjs/tailwindcss`
- Styling driven by a custom theme (colors, fonts, backgrounds)

## Notes
- There is **no backend yet**. Booking is simulated in the browser and generates a fake booking reference.

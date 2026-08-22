# GJ SpaCes — Luxury Workspaces & Architectural Interiors

Premium boutique managed workspaces and turnkey luxury interior studio platform in Pune, Maharashtra.

---

## 🏛️ Project Overview

**GJ SpaCes** is a high-performance modern web application built with **TanStack Start**, **React 19**, and **Tailwind CSS v4**. It replaces the legacy WordPress/Kubio site with a sleek, cinematic editorial web experience featuring live spatial calculation, district hubs constellation, interactive previews, and appointment booking.

### Key Highlights
- **Cinematic Architecture Hero**: Immersive video backdrop with playback controls, film grain texture, and viewport alignment guides.
- **Dual-Force Atelier Presentation**: Showcasing both managed workspaces and turnkey private residential interiors.
- **Spatial Brief Estimator**: Interactive live quote generator for team size, square footage, and neighborhood selection.
- **Pune Constellation Map**: Interactive hub selector covering Koregaon Park, Baner, Kharadi, and Balewadi.
- **Private Tour Reservation Modal**: Streamlined multi-step scheduling workflow.

---

## 🚀 How to Run the Project Locally

### 1. Prerequisites
Make sure you have **Node.js (version 20.x or higher)** and **npm** installed on your system.
Verify by running:
```bash
node -v
npm -v
```

### 2. Installation
Install all project dependencies:
```bash
npm install
```
*(Or if using Bun: `bun install`)*

### 3. Start Development Server
Run the local development server:
```bash
npm run dev
```
By default, the server starts on `http://localhost:3000` (or `http://localhost:5173` depending on port availability). Open this URL in your web browser.

### 4. Build for Production
To generate an optimized production SSR build:
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [TanStack Start](https://tanstack.com/start) / [TanStack Router](https://tanstack.com/router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH luxury palette & CSS animations |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Component Primitives** | [Radix UI](https://www.radix-ui.com/) |
| **State & Data Fetching** | [TanStack React Query v5](https://tanstack.com/query) |
| **Tooling & Bundler** | [Vite 8](https://vitejs.dev/) & [Nitro SSR](https://nitro.unjs.io/) |

---

## 📁 Project Structure

```
gjspaces-code/
├── public/
│   ├── favicon.svg          # Custom GJ SpaCes architectural SVG brand icon
│   └── robots.txt           # Search crawler directives
├── src/
│   ├── assets/              # High-resolution architectural photography & video assets
│   ├── components/          # Reusable UI component library (buttons, dialogs, primitives)
│   ├── routes/              # TanStack Start file-based routing
│   │   ├── __root.tsx       # Root document, meta tags, fonts, & error boundaries
│   │   └── index.tsx        # Homepage experience with interactive spatial tools
│   ├── router.tsx           # Router configuration & QueryClient provider
│   ├── server.ts            # Server entry handler for SSR
│   ├── start.ts             # Client hydration entrypoint
│   └── styles.css           # Global typography, OKLCH design tokens, and keyframe animations
├── package.json
└── tsconfig.json
```

---

## 🏢 Business Details

- **Company**: GJ SpaCes
- **Founder**: Mr. Ganesh C. Jadhav
- **Location**: Narhe / Koregaon Park / Baner / Kharadi, Pune, Maharashtra, India
- **Contact Phone**: +91 9921003458
- **Contact Email**: gcjadhav@gmail.com

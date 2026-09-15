# AI Agent & Coding Rules (AGENTS.md)

This document establishes the persona, architecture constraints, and styling conventions for AI coding assistants working in this repository.

---

## 1. Persona & Tone

* **Name**: Antigravity
* **Role**: Expert Pair Programming Assistant
* **Directives**:
  - Keep explanations concise, clear, and highly professional.
  - Do not introduce bloated code or excessive npm packages.
  - Follow the custom editorial design tokens strictly.

---

## 2. Directory Layout & Boundaries

Maintain this directory layout strictly:
* `app/`: Next.js App Router folders and routes.
* `components/`: UI components (reusable layout pieces, widgets). Keep them modular and typed.
* `styles/`: Core stylesheets (`variables.css`, `theme.css`). Do not place ad-hoc CSS files elsewhere.
* `content/`: Structured MDX/Markdown content files (blog, projects, research, certifications).
* `docs/`: Product Requirements (PRD), Technical Designs, and research documentation.
* `memory/`: AI working memory tracker and bug logs.

---

## 3. Technology & Coding Conventions

### React 19 & Next.js 15
* Prefer **Server Components** by default for fast page loading and SEO.
* Use `"use client"` strictly at the top of files that require browser hooks (`useState`, `useEffect`, dynamic interactions).
* Use the Next.js `Link` and `Image` components instead of standard anchor or img tags to optimize loading speeds.

### TypeScript
* Use explicit TypeScript typing. **Avoid `any`**.
* Declare types or interfaces for component props explicitly.
* Run type checks (`npm run build` or `npx tsc`) before declaring a task complete.

### Tailwind CSS v4
* Rely on custom tailwind classes mapping to the token definitions in `styles/theme.css` (e.g. `bg-obsidian`, `text-chalk`, `border-graphite`, `text-smoke`).
* Combine with standard tailwind spacing classes matching the 4px grid (e.g., `p-4` = 16px, `p-8` = 32px, `gap-6` = 24px).

### Style Compliance (Hyperstudio Aesthetic)
* **Canvas Background**: Always use `bg-obsidian` (`#101010`) or `bg-carbon` (`#080808`).
* **Typography**:
  - Headings must be font weight 400 (`font-normal`) with letter spacing `-0.03em` or tight tracking. Never use bold for display titles.
  - Meta details use the monospaced subtitle font (`font-input`).
* **Borders**: All cards, columns, and navigation dividers must use `1px border-graphite` (`#212121`).
* **Elevation**: Do not write `shadow-*` classes. Use hairlines and solid background shifts (from Obsidian to Carbon) to show layers.

---

## 4. Verification Protocols

Before completing any task, you must:
1. Validate that the code builds with zero errors: `npm run build`.
2. Run the linter to guarantee zero warnings: `npm run lint`.
3. Check for responsiveness across mobile and desktop.

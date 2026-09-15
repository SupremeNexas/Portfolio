# Developer Guide (CLAUDE.md)

This file contains quick references for environment setup, build operations, and coding commands in the Portfolio repository.

---

## 1. Environment & Setup

* **Runtime**: Node.js v18+ / v20+
* **Dependencies**: installed via `npm`

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run lint checks
npm run lint

# Build optimized production bundle
npm run build

# Start local production preview
npm run start
```

---

## 2. Coding Guidelines

* **TypeScript**: Use strictly typed code. Avoid `any` types. Provide explicit interface definitions.
* **Component Imports**: Use path aliases starting with `@/` mapping to the root directory (e.g. `import Header from "@/components/Header"`).
* **Styling**: Standard Tailwind CSS v4 classes combined with CSS custom variables from `styles/variables.css` and `styles/theme.css`.
* **Editorial Rules**: Follow the minimalist editorial styling guide from `DESIGN.md`:
  - No bold display typography (use `font-normal` weight 400 with large size and negative letter tracking).
  - Traced containers using 1px Graphite (`#212121`) borders.
  - Zero drop shadows; utilize pure light contrast for buttons.

# Universal Agent Operating Rules

## Purpose

This document defines universal engineering rules and cross-cutting constraints for all specialized AI agents operating within this repository (`/Users/supryo/Desktop/portfolio`). Every AI agent (operating via Antigravity, Codex, Claude Code, Cursor, or automated pipelines) must read and comply with these rules prior to performing work.

---

## Core Principles

1. **Strict Ownership Boundaries**: Work exclusively within your designated area of ownership. Never modify files or logic assigned to another specialist agent.
2. **Zero Unintended Breaking Changes**: Preserve existing functionality, public interfaces, and visual stability.
3. **No Code Duplication**: Prefer extending reusable design tokens, utility hooks, and shared components over creating parallel implementations.
4. **Empirical Verification**: Never declare work complete without executing build checks, tests, or empirical runtime verification.
5. **Clear Handoffs**: If a task requires work outside your scope, leave explicit, actionable handoff recommendations for the next agent instead of expanding your own scope.
6. **Documentation Integrity**: Document major architectural decisions, key design trade-offs, and configuration changes in public markdown records (`docs/` or `memory/`).
7. **Strict TypeScript & WCAG Compliance**: Maintain strict TypeScript mode (zero `any` policy) and WCAG 2.2 AA accessibility standards across all code changes.

---

## File Ownership Model

| Agent | Primary Owned Files & Directories | Strictly Out of Scope / Forbidden Files |
| :--- | :--- | :--- |
| **00 Product Manager** | `docs/`, `memory/`, PRD briefs | `app/`, `components/`, `styles/`, runtime code |
| **01 UI/UX Architect** | `docs/ux/`, layout & IA specs | Runtime code modifications, backend, state |
| **02 Motion Designer** | `components/motion/`, Framer Motion definitions | Backend APIs, data schemas, global CSS tokens |
| **03 Design System Architect** | `styles/globals.css`, `tailwind.config.ts`, tokens | Business logic, page routes, backend services |
| **04 Typography Specialist** | Font specs, fluid type scale rules in CSS | App routing, state management, backend APIs |
| **05 Color Design Specialist** | Color tokens (HSL), palette rules, dark mode tokens | Layout structure, component logic, DB queries |
| **06 Responsive UX Specialist** | Breakpoints, media/container query rules, adaptive layout specs | Backend code, API handlers, data models |
| **07 Accessibility Specialist** | ARIA attributes, semantic structure audits, focus management | Visual layout redesigns, backend architecture |
| **08 Next.js Architect** | `app/` routing, server components, middleware, revalidation | Component styles, motion curves, DB schemas |
| **09 React Engineer** | `hooks/`, client component logic, context/state management | Next.js server infrastructure, CSS design tokens |
| **10 TypeScript Engineer** | `types/`, `interfaces/`, Zod schemas, type utilities | UI CSS, motion choreography, deployment scripts |
| **11 Component Engineer** | `components/ui/`, primitive UI component implementation | Server route handlers, database connections |
| **12 Performance Engineer** | Dynamic imports, asset optimization specs, bundle analysis | Visual redesigns, copy writing, API endpoints |
| **13 SEO Engineer** | `app/sitemap.ts`, `app/robots.ts`, metadata objects | Component CSS, Framer motion, state logic |
| **14 Security Engineer** | CSP headers, `middleware.ts` security rules, secret audits | UI layout, font configurations, animation curves |
| **15 Content Strategist** | `content/`, page headlines, value propositions, microcopy | TypeScript types, component logic, build scripts |
| **16 Project Case Study Writer** | `content/projects/`, case study markdown documents | Code components, design tokens, app routing |
| **17 Testing Engineer** | `tests/`, `__tests__/`, Vitest & Playwright configs | Production copy, visual design changes |
| **18 Deployment Engineer** | `.github/workflows/`, `vercel.json`, build scripts | React components, CSS stylesheets |
| **19 GitHub Maintainer** | `.github/`, PR templates, commit guidelines, CHANGELOG | Application business logic, design tokens |
| **99 Final Product Review** | End-to-end review records, release verification reports | Primary feature creation or scope expansion |

---

## Agent Handoff Protocol

Every agent output must follow a standardized handoff structure:

```markdown
## Handoff Report
- **Agent**: [Agent Name]
- **Completed Work**: [Summary of deliverables]
- **Files Modified**: [List of explicit file paths]
- **Verification Status**: [Pass/Fail with output summary]
- **Next Target Agent**: [Number and Name of Next Agent]
- **Action Required by Next Agent**: [Specific, unambiguous instructions]
```

---

## Conflict Resolution Matrix

When responsibility overlaps or ambiguity arises:
1. **Repository Rules Override**: `AGENTS.md` is the supreme rulebook, followed by `RULES.md`.
2. **Design vs. Engineering**: Design agents (`01`–`07`) specify intent and rules; Engineering agents (`08`–`14`) implement code.
3. **Product Arbitration**: If two agents conflict on scope, pass the issue to `00-product-manager.md` for explicit scope prioritization.
4. **Scope Creep Prevention**: An agent must NEVER fix an out-of-scope bug directly. Log it in the handoff report for the designated specialist.

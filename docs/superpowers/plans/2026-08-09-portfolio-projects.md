# Portfolio Projects Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add all six projects to the project section of the React Vite portfolio with correct technology tags, bullet descriptions, image references, and GitHub repository links.

**Architecture:** Hardcoded `projects` data array replacement in the main rendering component `src/components/ProjectsSection.tsx`.

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, HTML5, CSS3, Vite

## Global Constraints
- Target component: `src/components/ProjectsSection.tsx`
- Do not modify card rendering structures, framer-motion settings, or styles unless necessary.
- Ensure all repository reference links point directly to the user's personal GitHub forks/repos.

---

### Task 1: Update the projects data array in ProjectsSection.tsx

**Files:**
- Modify: `src/components/ProjectsSection.tsx:4-61`

**Interfaces:**
- Consumes: Static project list details from spec
- Produces: Updated projects database array containing 6 projects.

- [ ] **Step 1: Edit `ProjectsSection.tsx` to replace `projects` array with 6-project dataset**
      Use `Edit` to replace the existing 3 projects with the new 6 projects array defined in the design spec.
- [ ] **Step 2: Save the file**
- [ ] **Step 3: Verification**
      Verify the file compiles and has zero syntax/TypeScript issues.
- [ ] **Step 4: Commit**
      ```bash
      git add src/components/ProjectsSection.tsx
      git commit -m "feat: add 6 user projects back to projects section with local assets"
      ```

---

### Task 2: Build and Typecheck Verification

**Files:**
- Test: Running compiler & linter

- [ ] **Step 1: Check typescript compiler status**
      Run `npx tsc --noEmit` to verify type safety.
- [ ] **Step 2: Run dev build**
      Run `npm run build` to verify production assets and bundle are buildable and output correctly.
- [ ] **Step 3: Commit**
      Commit any diagnostic settings / type fixes if needed.

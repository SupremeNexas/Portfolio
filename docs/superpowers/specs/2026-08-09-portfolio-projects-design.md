# Design Specification: Portfolio Projects Update
**Date:** 2026-08-09
**Author:** Antigravity (Advanced Agentic Coding AI)

## 1. Overview
The goal is to update the projects list in the user's React-based portfolio. We are expanding the section from three projects to six, representing a complete index of the user's primary engineering works.

## 2. Project List
The projects will be listed in the following order:
1. **Expense Tracker**
   - Technologies: React, Vite, Node.js, Express, PostgreSQL, Prisma, Gemini AI SDK
   - Key Value: Full-stack AI-native personal finance platform with Gemini OCR and multi-workspace support.
   - Ref: [Expense-Tracker](https://github.com/SupremeNexas/Expense-Tracker)
2. **OmniRoute (Contribution & Configuration)**
   - Technologies: Node.js, Next.js, Turbopack, Electron, SQLite, Smart Routing
   - Key Value: Multi-provider AI gateway, custom bundler fixes for Turbopack standalone builds, and DuckDuckGo search fallback.
   - Ref: [OmniRoute](https://github.com/SupremeNexas/OmniRoute)
3. **Kronos Foundation Model**
   - Technologies: Python, PyTorch, Hugging Face Hub, Microsoft Qlib, Quantitative Trading
   - Key Value: Autoregressive financial K-line transformer foundation model pre-trained on 45 global exchanges, finetuned for Chinese A-Share.
   - Ref: [Kronos-Trading](https://github.com/SupremeNexas/Kronos-Trading)
4. **CareerOps Job Search Engine**
   - Technologies: Node.js, Go, Playwright, Bubble Tea
   - Key Value: Automated multi-agent job application pipelines, resume ATS compiler, and Go TUI dashboard.
   - Ref: [jobsearch](https://github.com/SupremeNexas/jobsearch)
5. **Dynamic Taxi Demand Forecasting**
   - Technologies: Python, Scikit-learn, LightGBM, XGBoost, Streamlit
   - Key Value: Spatial-temporal demand forecaster, revenue optimization engine yielding simulated 22.23% revenue uplift, Streamlit dashboard.
   - Ref: [dynamic-taxi-demand-pricing](https://github.com/SupremeNexas/dynamic-taxi-demand-pricing)
6. **SocialQuery**
   - Technologies: Node.js, Express, PostgreSQL, EJS
   - Key Value: Social media relational data analytics engine with complex SQL queries and sub-100ms load times.
   - Ref: [socialQuery](https://github.com/SupremeNexas/socialQuery)

## 3. Directory Layout & Media Asset Copying
Images from local Desktop & Downloads development repositories have been copied into the portfolio's native path `./public/projects/`:
- `omniroute-1.png`, `omniroute-2.png`, `omniroute-3.png`
- `kronos-1.png`, `kronos-2.png`, `kronos-3.png`
- `jobsearch-1.jpg`, `jobsearch-2.jpg`, `jobsearch-3.jpg`
- `taxi-1.png`, `taxi-2.png`, `taxi-3.png`
- Existing `social-query-1.png`, `social-query-2.png`, `social-query-3.png` are preserved.
- Existing remote Higgs Cloudfront assets for Expense Tracker are preserved.

## 4. Component Target Changes
We will update `src/components/ProjectsSection.tsx`:
- Define the new structure in the `projects` object array.
- Keep the `ProjectCard` rendering styling and animations.
- Ensure type-correct integrations of bullet strings, numbers, categories, naming, and GitHub links.
- Test scroll scale interpolation offsets matching a list length of 6 instead of 3.

## 5. Verification Plan
- Verify React build passes locally (`npm run build`).
- Verify typescript types are clean (`npm run typecheck`).

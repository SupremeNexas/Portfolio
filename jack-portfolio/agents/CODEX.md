# Technical Index (CODEX.md)

This file catalogs the technical system configurations, data schemas, and folder structures in the portfolio repository.

---

## 1. System Specifications

* **Frontend Framework**: Next.js 15.1.0 + React 19.0.0
* **Styling**: Tailwind CSS v4.0.0 (PostCSS integration)
* **Metadata Schema**: OpenGraph, Twitter Cards, Dynamic metadata
* **Search Engine Optimization**: JSON-LD semantic markup, XML Sitemap

---

## 2. File Index & Map

```text
/
├── app/
│   ├── globals.css           # Root styles
│   ├── layout.tsx            # App Layout & Google Fonts setup
│   └── page.tsx              # Homepage
├── styles/
│   ├── variables.css         # Token custom properties
│   └── theme.css             # Tailwind v4 color configurations
├── docs/
│   ├── architecture_report.md# Phase 1 audit report
│   ├── research.md           # Feasibility and competitor research
│   ├── prd.md                # Product Requirements Document
│   └── technical_design.md   # System and Schema design notes
├── memory/
│   ├── task_today.md         # Active AI working checklist
│   └── bugs.md               # Active issue logs
├── package.json              # App configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.ts            # Next.js configurations
```

---

## 3. Planned Content Schema Formats

When MDX files are loaded in future phases, the following schemas will be used:

### Project Schema (`content/projects/*.mdx`)
```typescript
interface Project {
  title: string;
  description: string;
  category: string;       // e.g. "Systems Engineering", "Intelligent Systems"
  technologies: string[]; // e.g. ["Next.js", "React", "Rust"]
  motivation: string;     // Short text
  solution: string;       // Short text
  demoUrl?: string;       // Optional link
  githubUrl?: string;     // Optional link
  date: string;           // YYYY-MM-DD
  featured: boolean;      // Displays on home page
}
```

### Blog Post Schema (`content/blog/*.mdx`)
```typescript
interface BlogPost {
  title: string;
  description: string;
  publishDate: string;    // YYYY-MM-DD
  tags: string[];         // e.g. ["TypeScript", "AI", "RAG"]
  category: string;
  readingTime: string;    // e.g. "5 min read"
  toc: boolean;           // Show Table of Contents
}
```

### Research Schema (`content/research/*.mdx`)
```typescript
interface ResearchPaper {
  title: string;
  abstract: string;
  publishDate: string;    // YYYY-MM-DD
  pdfUrl?: string;        // Link to local/hosted PDF
  tags: string[];
  references: string[];   // Bibliography list
}
```

### Certification Schema (`content/certifications/*.mdx`)
```typescript
interface Certification {
  title: string;
  issuer: string;         // e.g. "Anthropic", "Google"
  issueDate: string;      // YYYY-MM-DD
  credentialUrl?: string; // Link to verification page
  badgeUrl?: string;      // Badge image link
  featured: boolean;
}
```

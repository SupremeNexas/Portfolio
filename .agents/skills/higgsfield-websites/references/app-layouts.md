# app-layouts — the standard Higgsfield app layouts (`type: "app"` builds ONLY)

A `type: "app"` product must look and feel like a Higgsfield product, so you do
NOT invent app chrome. The template ships the standard layouts and the UI they
are built from as **real code** — you build by copying/composing those, not by
reproducing a screenshot.

Two hard rules, no exceptions:

1. **Start from one of the six shipped layouts — Studio, Preset, App detail, AI
   Stylist, Skin Enhancer, or Shots.** Match the app to whichever is closest
   (`app/src/layouts/*.tsx`) and adapt it; an unusual request still maps to the
   nearest one — adapt within it, never invent a different app shell. A fully
   custom layout is fine only when the user asks for something none covers.
2. **Read the code, then build.** After `higgsfield website repo-access` + clone, read
   `app/src/layouts/AGENTS.md` (the layout catalog — anatomy + rules for each)
   AND `app/src/components/AGENTS.md` (the MANDATORY component contract, with
   copy-paste wiring), then open the layout/component files you'll use. They are
   the source of truth for structure; build from them, not from memory.

Everything is code in the repo — there are no external reference images to open.

## The six layouts (`app/src/layouts/`)

Copy the closest one into your route and adapt freely. Full anatomy per layout
is in `app/src/layouts/AGENTS.md`.

| Layout | When to pick |
|---|---|
| `studio.tsx` (`StudioTemplate`) | A full creative workspace: projects-first `Sidebar` + hero + a floating prompt dock (`@/components/prompt-box` — mode toggle, inline setting pills, lime GENERATE) over an edge-to-edge generations feed. The richest shell — for multi-project generation tools. |
| `preset.tsx` (`PresetTemplate`) | **Pick-a-style-then-generate**: a persistent left creation rail (`@/components/composer` + `@/components/setting-trigger` rows + costed Generate) beside a browsable preset gallery (Presets/History/How-it-works tabs + search). Tiles are horizontal (default) or vertical/portrait via `presetOrientation` — pick to match the output (vertical for 9:16 apps). |
| `app-detail.tsx` (`AppDetailTemplate`) | A single tool's **public landing page** (the "simple app"): a centered `max-w-7xl` scroll page with a two-column generator hero (`@/components/dropzone` inputs on the left, a large `Media` preview on the right) and a "how it works in 3 steps" explainer. For a marketing/detail page around one tool, not a full workspace. |
| `ai-stylist.tsx` (`AiStylistTemplate`) | **Configure-then-generate workspace**: a persistent creation rail (`@/components/upload-field` uploads → `AssetLibraryModal`, `TemplateModal` preset picker, `Select`/`SettingTrigger` rows, costed Generate) beside a segmented `Tabs` workspace (options / live Results canvas / `HistoryGrid` / How-it-works). For a tool where the user uploads inputs, picks options, and iterates (try-on, restyle, character). |
| `skin-enhancer.tsx` (`SkinEnhancerTemplate`) | **Before/after enhance tool**: a centered single-tool page built around a draggable before/after compare slider (`@/components/before-after-compare`) — upload → enhance → compare original vs result, plus How-it-works and a personal `HistoryGrid`. For enhance / retouch / restore / upscale tools whose payoff is a comparison. |
| `shots.tsx` (`ShotsTemplate`) | **Step-by-step wizard** (`@/components/step-rail`): step 1 upload one input → step 2 generate a grid of variations (`GenerationCard`) and favorite the best → step 3 upscale/refine (with a `BeforeAfterCompare`). For a linear generate → select → refine flow. |

Map any request to the closest of the six; only build a fully custom shell when
the user asks for something none covers.

## Reusable UI components (`app/src/components/`)

Build the moving parts from these instead of hand-rolling them — they are the
cross-app contract (`app/src/components/AGENTS.md` is the full, mandatory
reference with wiring examples). Never fork, copy, or hand-roll a replacement;
if one lacks a prop, extend it there.

- `prompt-box/` — the studio prompt dock (mode rail, inline setting pills, upload tiles, GENERATE).
- `composer/` — a simpler side-rail prompt pane (caption + textarea + footer action pills).
- `setting-trigger/` — a compact labelled picker row (label + value + chevron).
- `upload-field/` — THE rail-style upload field for creation rails (opens `AssetLibraryModal`); use it, never a hand-rolled rail upload field.
- `dropzone/` — the bordered upload/select tile (`Dropzone` + `DropzonePreview`) for the app-detail generator hero; also an `AssetLibraryModal` trigger.
- `rail-footer/` — the pinned Generate CTA footer for a creation rail (`sticky bottom-0` + gradient scrim) so the costed CTA stays reachable when the rail overflows.
- `asset-library.tsx` — THE assets modal; every "+"/upload/attach/add-media action opens it (`trigger` + `onSelect`). Never build a custom picker/upload modal.
- `template-modal/` — the generic "choose one option" modal (grid of tiles); `template-picker.tsx` — the tabbed, searchable Studio-style gallery.
- `generation-card/` — the generation tile: `state="generating"` (pulsing brand glow) or ready (media + title). `generation-detail.tsx` — the fullscreen detail view.
- `history-grid.tsx` — THE History section (the current user's OWN generations, personal — never a public feed), a batch-grouped `generation-card` grid.
- `media-card/` — a cover/preview card (title + action); `ratio` picks landscape vs portrait.
- `before-after-compare/` — the draggable before↔after slider (Skin Enhancer / refine steps).
- `step-rail/` — the numbered multi-step wizard indicator (Shots).
- `icon-tile/` — a small gradient icon tile for sidebars/nav rows.

Anything these don't cover, build your own component from Quanta primitives
(`references/quanta-design.md` rule 5) — never a third-party UI library.

## Invariants (every layout)

- **Compact panels — progressive disclosure (EVERY layout).** A settings /
  creation panel shows only its PRIMARY inputs plus the costed Generate CTA by
  default. **If it would expose more than ~6 controls, keep the primary few
  visible and move the rest behind an "Additional settings" disclosure** — use
  the Quanta `Accordion` (`import { Accordion } from '@higgsfield/quanta/accordion'`,
  `multiple={false}` so only one section opens at a time), never a flat
  always-open list and never a hand-rolled collapsible. The creation rail (tall
  left input panel) has a field budget: at most **3 large fields** (`UploadField`
  / cover `MediaCard` / `Dropzone`) and **4 compact fields** (`SettingTrigger` /
  `Select`) visible at once in the default/collapsed state; make the rail a
  scroll container and pin the Generate CTA with `RailFooter`.
- **Simple app → the right side always shows an example output.** For a
  single-tool ("simple") app — the App detail hero especially — the large right
  panel is NEVER an empty frame in the default state: seed it with a
  representative example of the generation output (a real generated sample, or
  the first result once produced) so the user sees what the tool makes before
  they run it.
- **No app header/top bar** — apps render INSIDE Higgsfield, whose chrome
  provides the global header, credits/balance, and account controls. Never add
  a brand/logo row, top nav bar, breadcrumb crumb row, or sign-out/credits UI.
  In-app navigation is a Quanta `Sidebar` (studio) or inline controls (tabs,
  step indicators); a page title is just a heading inside the content area.
- **Permanently DARK** — `data-theme="default-dark"` is pinned on `<html>` in
  the template. No theme toggle, no light mode, no `dark:` variants.
- **Container width** — `mx-auto w-full max-w-7xl` on the shell (the body
  background fills the viewport). The exception is the studio layout — a
  full-bleed workspace (sidebar + edge-to-edge feed under the composer).
- **Buttons** — the GENERATE action is always Quanta `variant="marketingPrimary"`
  (the 3D lime CTA) with the credit cost INSIDE the button as
  `{label} {sparkles icon} {credits}` — the sparkle is the branded asset
  `@/assets/icon-sparkles-soft.svg?react` at 14px, and the credits number
  inherits the button label's font (never smaller/other). Quanta variant colors
  do NOT follow the names: `primary` = flat LIME, `secondary` = solid WHITE,
  `tertiary` = dark white/10 glass. Ordinary/nav actions use the dark
  `tertiary`/`ghost`; `secondary` (white) only where the real product shows a
  white button. **Default button `size="md"`** — Quanta's own default is `sm`
  (too small for app surfaces), so pass `md` explicitly; use `sm`/`xs` only in
  dense toolbars/pills. **Default button `size="md"`** — Quanta's own default is `sm`
  (too small for app surfaces), so pass `md` explicitly; use `sm`/`xs` only in
  dense toolbars/pills.
- **Quanta first** — `Button`, `Input`, `Textarea`, `Dropdown`, `Select`,
  `Modal`, `Tabs`, `Sidebar`, `Accordion`, `Avatar`, `Badge`, `Tooltip`,
  `sonner` toasts, `Loader`, `Media`, `Grid`, plus the app components above.
  Spacing = native Tailwind (`p-4`, `gap-3`); semantics = `q-` utilities
  (`bg-q-background-primary`, `text-q-body-md-regular`). For anything Quanta
  lacks, build your own component from Quanta primitives — never a third-party
  UI library.
- **Real end-to-end app** — Higgsfield auth (`references/auth.md`), server-side
  generation submit + poll, and the app's own product state in D1
  (saved/favorited, collections, presets, history). The signed-out state, auth
  guards, `/api/user`, cost preview, submit/poll routes, and D1 persistence are
  MANDATORY — see the checklist in `references/fnf-sdk.md`.

## Cross-template acceptance outcomes (after clone)

The cloned repo's layout and component guides remain the source of truth for
implementation mechanics. Regardless of the chosen template, enforce these
outcomes:

- **Accepted generation becomes visible immediately.** Once confirmation is
  accepted and submit returns queued/running generations, add those real
  generations to the visible result set and move focus to it. `preset` must
  activate History/Results instead of leaving the user on the preset gallery;
  inline-feed layouts scroll or focus the new card. Render the pending state
  immediately and poll it in place. Validation errors and confirmation cancel
  stay on the current form; a post-submit failure remains on Results as a
  failed card with retry. Preserve the chosen preset and composer state.
- **Generated-media galleries are responsive and uncropped.** Every generated
  output gallery — including Simple app output, History, and Results — adapts
  to its container and to mixed media geometry. Derive each pending/ready
  card's aspect ratio from result dimensions or the canonical submitted
  `aspectRatio`, and preserve the complete image/video with contain or natural
  sizing. Never force 1:1, 4:3, 16:9, and 9:16 outputs into one crop. Fixed
  crops are only for curated preset or marketing thumbnails.
- **Settings stay usable at every viewport.** Keep primary controls visible and
  put secondary settings behind progressive disclosure. A tall settings panel
  must be a real `min-h-0 overflow-y-auto overscroll-contain` region with a
  visible scrollbar or edge-fade/“more settings” cue; hidden, non-obvious
  scrolling is a bug. A pinned Generate action must not cover the final field
  and must respect mobile safe areas. Below desktop, stack settings above the
  result or move them into the repo-prescribed mobile sheet instead of
  squeezing the desktop rail. Verify expanded settings at 375px, tablet, and
  desktop with keyboard and touch access.
- **History stays inspectable in place.** Every ready History card opens the
  repo's detail view without leaving History. Detail provides Previous/Next
  plus Left/Right arrow keys over the current filtered/sorted results. Closing
  returns to the same History tab, filters, sort, and scroll position; never
  require the user to exit History and reopen generations one by one.

# **The Modern Motion Stack**

# **How to use Lenis, GSAP & Vanta.js like an award-winning designer**

GitHub Repos 

https://github.com/greensock/gsap

https://github.com/darkroomengineering/lenis

https://github.com/tengbao/vanta

# **Introduction**

Think of these three libraries as different tools inside a design toolkit.

- **Lenis** → Controls how the website scrolls.
- **GSAP** → Controls how everything moves.
- **Vanta.js** → Creates immersive animated backgrounds.

If you use them correctly, your website feels expensive.

If you use them everywhere, your website becomes annoying.

The goal isn’t more animation.

The goal is better user experience.

# **The Stack**

| **Library** | **Purpose** | **Use It For** |
| --- | --- | --- |
| Lenis | Smooth scrolling | Premium scrolling experience |
| GSAP | Motion & interactions | Hero animations, reveals, timelines |
| Vanta.js | Background effects | Atmosphere and depth |

# **1. Lenis**

# **What is Lenis?**

Lenis is a smooth scrolling engine.

Instead of relying on the browser’s default scroll behavior, Lenis creates a much smoother and more responsive scrolling experience.

This is why many premium websites feel “soft” while scrolling.

# **Use Lenis When**

✅ Portfolio websites

✅ Creative agencies

✅ Landing pages

✅ Product launches

✅ Storytelling websites

✅ Premium brands

# **Avoid Lenis When**

❌ Dashboard applications

❌ Banking apps

❌ Heavy data tables

❌ Documentation

❌ Admin panels

People visit these websites to complete tasks—not admire animations.

# **Best Practices**

Keep scrolling subtle.

Never make scrolling feel delayed.

The user should never notice Lenis.

They should only notice that the website feels “premium.”

# **AI Prompt (Cursor / Lovable / Bolt / Replit)**

Implement Lenis smooth scrolling across the entire website.

Requirements:

- Smooth but responsive scrolling
- Preserve native accessibility
- Disable smooth scrolling on mobile devices if performance drops
- Sync scrolling with GSAP ScrollTrigger
- Maintain 60 FPS
- Respect prefers-reduced-motion
- Do not introduce noticeable scroll lag
- Keep scrolling natural rather than exaggerated

The result should feel like a premium Apple or Linear website.

# **2. GSAP**

# **What is GSAP?**

GSAP is the industry-standard animation library.

Almost every major interactive website uses it.

It allows precise control over every animation.

Instead of simple fade-ins, GSAP creates meaningful movement.

# **Use GSAP For**

Hero sections

Page transitions

Scroll-triggered animations

Text reveals

Cards

Buttons

Navigation

Mouse interactions

SVG animations

Image reveals

Pinned storytelling

Loading sequences

Micro interactions

# **Avoid GSAP For**

Animating every element.

Animation fatigue is real.

If everything moves—

Nothing feels important.

# **Motion Principles**

Every animation should answer one question:

**Why is this moving?**

Possible answers:

Draw attention.

Guide the eye.

Create hierarchy.

Provide feedback.

Tell a story.

Never animate just because you can.

# **Good Animation Durations**

Micro interactions

150–250 ms

Cards

300–500 ms

Hero animations

600–1000 ms

Page transitions

500–800 ms

Large storytelling sequences

1–3 seconds

# **Easing**

Avoid:

linear

Use:

power2.out

power3.out

expo.out

back.out (only for playful interfaces)

# **AI Prompt**

Use GSAP to animate the interface.

Requirements:

- Animate only meaningful UI elements.
- Use timelines instead of independent animations.
- Use staggered reveals for cards and text.
- Trigger animations only when elements enter the viewport.
- Use ScrollTrigger where appropriate.
- Avoid excessive motion.
- Respect prefers-reduced-motion.
- Maintain 60 FPS.
- Keep animations subtle, elegant, and premium.

Animation style inspiration:

Apple

Linear

Stripe

Awwwards-winning agency websites

The animation should guide attention rather than distract users.

# **3. Vanta.js**

# **What is Vanta?**

Vanta creates animated WebGL backgrounds.

Examples include:

Birds

Fog

Clouds

Dots

Waves

Net

Globe

Halo

Cells

Topology

These effects create atmosphere rather than interaction.

# **Use Vanta For**

Hero sections

Landing pages

Portfolio intros

Creative agencies

Product launches

Event pages

Conference websites

# **Avoid Vanta For**

Entire websites

Blogs

Documentation

SaaS dashboards

Forms

Checkout pages

Accessibility-critical interfaces

# **Best Practices**

Keep opacity low.

Let content remain the focus.

Backgrounds should support—not compete.

# **AI Prompt**

Add a subtle Vanta.js animated background only to the hero section.

Requirements:

- Slow movement
- Minimal visual noise
- Dark elegant color palette
- Responsive layout
- GPU optimized
- Pause when the tab is inactive
- Respect reduced-motion settings
- Ensure text readability remains excellent

The background should create atmosphere without distracting from the content.

# **The Perfect Combination**

# **Landing Page**

Lenis

- ●

GSAP Hero

- ●

GSAP Scroll Reveals

- ●

Vanta Hero Background

This is the most common stack used by creative agencies.

# **Portfolio**

Lenis

- ●

GSAP Page Transitions

- ●

GSAP Cursor Effects

- ●

GSAP Image Reveals

Optional:

Vanta Hero

# **Startup Website**

Lenis

- ●

GSAP Micro Interactions

- ●

ScrollTrigger

No Vanta unless it supports the brand.

# **SaaS Dashboard**

GSAP only.

Skip Lenis.

Skip Vanta.

Speed matters more than visual effects.

# **Performance Rules**

The best animation is one users don’t consciously notice.

Always:

✓ Animate transform

✓ Animate opacity

Avoid:

✗ width

✗ height

✗ top

✗ left

Avoid animating expensive layout properties whenever possible.

# **Accessibility Checklist**

Always respect:

prefers-reduced-motion

Ensure animations:

- Can be skipped.
- Never block interaction.
- Never cause motion sickness.
- Never flash rapidly.
- Never hide essential information.

Good motion should improve usability, not reduce it.

# **Complete AI Prompt (Copy & Paste)**

Build a premium, award-quality landing page using modern web motion principles.

Technical Stack:

- Lenis for smooth scrolling
- GSAP for animations
- ScrollTrigger for scroll-driven motion
- Vanta.js only for the hero background

Motion Requirements:

- Smooth premium scrolling
- Hero timeline animation
- Staggered text reveals
- Image reveal animations
- Card entrance animations
- Scroll-triggered sections
- Subtle hover interactions
- Animated navigation
- Elegant page loading sequence
- Smooth section transitions

Design Rules:

- Minimalist layout
- Strong typography
- Premium whitespace
- Clear visual hierarchy
- Motion should guide attention, not distract
- Maintain consistent spacing
- Use smooth easing (power2.out, power3.out, expo.out)
- Avoid unnecessary animation

Performance Requirements:

- 60 FPS
- GPU-accelerated transforms
- Lazy-load media
- Pause background animations when inactive
- Respect prefers-reduced-motion
- Optimize for desktop and mobile

The final experience should feel similar to the quality and polish of websites featured on Awwwards, while remaining fast, accessible, and usable.

# **Final Advice**

The biggest mistake beginners make is copying animations without understanding *why* they’re there. The most memorable websites don’t move the most they move with purpose. Before adding any effect, ask yourself: **Does this help tell the story, clarify the interface, or create a better feeling?** If the answer is no, leave it out. Great motion is invisible until it’s missing.
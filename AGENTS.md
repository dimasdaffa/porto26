<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Git-Architecture Portfolio — AI Agent Guide

> **This document is the single source of truth for any AI assistant (Copilot, Claude, Gemini, etc.) working on this codebase.** Read it fully before making any changes.

---

## 1. Project Identity

| Field | Value |
|---|---|
| **Concept** | Software engineer portfolio disguised as a GitHub Dark Mode repository interface |
| **Framework** | Next.js (App Router) with Tailwind v4 |
| **Runtime** | `bun` (use `bun run dev` to start) |
| **Font** | JetBrains Mono (loaded via `next/font/google` in `layout.tsx`) |
| **Styling** | Custom CSS variables in `globals.css` — **NOT Tailwind utility classes** |

---

## 2. Architecture — File Structure

```
app/
├── page.tsx                          ← Main entry. Slim composition only (~30 lines).
├── layout.tsx                        ← Root layout. Font loading + metadata. DO NOT TOUCH.
├── globals.css                       ← ALL styles live here. Design system + component CSS.
│
├── data/                             ← Pure data files. No JSX. Easy to edit.
│   ├── repos.ts                      ← Repository items, tech stack, activity grid data
│   └── experiences.ts                ← Career timeline entries
│
├── components/                       ← Reusable UI components
│   ├── Header.tsx                    ← Two-row GitHub-style header (nav + tabs)
│   ├── Terminal.tsx                  ← Interactive bottom terminal bar
│   ├── Footer.tsx                    ← Page footer
│   │
│   ├── overview/                     ← Overview tab components (profile page)
│   │   ├── OverviewContent.tsx       ← Compositor: assembles sidebar + readme + career
│   │   ├── ProfileSidebar.tsx        ← Left sidebar: photo, name, bio, socials, tech
│   │   ├── ReadmeCard.tsx            ← README.md card + activity grid
│   │   └── CareerLog.tsx             ← Git-style career timeline with diffs
│   │
│   └── sections/                     ← Category tab content
│       └── CategoryContent.tsx       ← Renders App/Web/Product repo grids
│
└── contact/
    └── page.tsx                      ← Pull Request-style contact form
```

### Rules:
- **NEVER dump everything into `page.tsx`.** Keep it as a slim compositor.
- **New sections** should get their own component file under `components/`.
- **New data** (projects, skills, etc.) goes into `data/` as a `.ts` file.
- **Each component file** should be focused on ONE visual section.

---

## 3. Design System — MANDATORY

All styling uses CSS custom properties defined in `globals.css`. **You MUST use these variables. Do NOT invent new colors or use raw hex values inline.**

### Color Tokens

| Variable | Hex | Usage |
|---|---|---|
| `--gh-bg` | `#0d1117` | Page background |
| `--gh-bg-secondary` | `#161b22` | Cards, panels, header |
| `--gh-bg-tertiary` | `#1c2128` | Nested elements, hover states |
| `--gh-border` | `#30363d` | All borders |
| `--gh-border-subtle` | `#21262d` | Subtle separators |
| `--gh-text` | `#c9d1d9` | Body text |
| `--gh-text-muted` | `#8b949e` | Secondary/meta text |
| `--gh-text-heading` | `#e6edf3` | Headings, bold text |
| `--gh-green` | `#3fb950` | Success, additions, active states |
| `--gh-green-muted` | `rgba(63,185,80,0.15)` | Green background tint |
| `--gh-red` | `#f85149` | Errors, removals |
| `--gh-red-muted` | `rgba(248,81,73,0.15)` | Red background tint |
| `--gh-blue` | `#58a6ff` | Links, accents |
| `--gh-purple` | `#bc8cff` | Badges, highlights |
| `--gh-yellow` | `#d29922` | Warnings, stars |
| `--gh-orange` | `#db6d28` | Active tab underline |
| `--gh-cyan` | `#39d2c0` | Special accents |
| `--gh-accent` | `#238636` | Primary buttons (GitHub green) |
| `--gh-link` | `#58a6ff` | Anchor/link color |

### Layout Tokens

| Variable | Value | Usage |
|---|---|---|
| `--header-height` | `90px` | Sticky header (two-row) |
| `--terminal-height` | `48px` | Bottom terminal bar |

### Typography
- **Font:** JetBrains Mono (monospace) for everything
- **Headings:** `var(--gh-text-heading)`, weight 600–700
- **Body:** `var(--gh-text)`, 13–14px, line-height 1.6
- **Meta/muted:** `var(--gh-text-muted)`, 12–13px

---

## 4. Component Patterns

### Naming Convention
All CSS classes use the `gh-` prefix (short for "GitHub"):
```css
.gh-card { }
.gh-btn-primary { }
.gh-timeline-node { }
```

### Key UI Patterns

| Pattern | CSS Class(es) | Description |
|---|---|---|
| **Card** | `.gh-card` | Bordered panel with `--gh-bg-secondary` background |
| **Repo card** | `.gh-repo-card` | Project display with name, desc, lang dot, stars |
| **Badge** | `.gh-badge` | Tech stack pill with green border |
| **Diff block** | `.gh-diff`, `.gh-diff-line.add`, `.gh-diff-line.remove` | Git diff visualization |
| **Timeline** | `.gh-timeline`, `.gh-timeline-node`, `.gh-timeline-dot` | Vertical commit history |
| **Stats** | `.gh-stats`, `.gh-stat` | Horizontal stats bar |
| **Activity grid** | `.gh-activity-grid`, `.gh-activity-cell.l1`–`.l4` | GitHub contribution heatmap |
| **Form card** | `.gh-form-card`, `.gh-form-input`, `.gh-form-textarea` | Contact form styling |
| **Social button** | `.gh-social-btn` | Icon button for GitHub/LinkedIn links |

### Button Styles

```jsx
// Primary (green, filled)
<a className="gh-btn-primary">Action</a>

// Secondary (bordered, outline)
<a className="gh-btn-secondary">Action</a>
```

### Creating New Cards
```jsx
<div className="gh-card">
  <h3>Title</h3>
  <p>Content using var(--gh-text)</p>
</div>
```

---

## 5. Page Layout Rules

### Overview Page (Home `/`)
- Uses **two-column layout**: `gh-profile-layout` (296px sidebar + flexible content)
- Left: `ProfileSidebar` — sticky, scrolls independently
- Right: `ReadmeCard` + `Activity grid`
- Below both: `CareerLog` — full-width career timeline

### Category Pages (App/Web/Product tabs)
- Uses **`gh-content-with-panel`**: repo grid on left, info panel on right
- Data is pulled from `data/repos.ts`
- Switching tabs is handled via `useState` in `page.tsx`

### Contact Page (`/contact`)
- Standalone page with `Header showTabs={false}`
- PR-style form with Write/Preview tabs

### Header Behavior
- **Two rows:** Row 1 = repo identity + nav links. Row 2 = branch selector + category tabs.
- `showTabs` prop controls whether Row 2 appears
- Active tab state is managed by the parent page
- Content is centered at `max-width: 1012px` (GitHub standard)

### Terminal Bar
- Fixed at bottom, clickable
- Pressing Enter anywhere or clicking navigates to `/contact`
- Uses `useRouter().push("/contact")`

---

## 6. Adding New Content

### Add a new project/repo
Edit `app/data/repos.ts`:
```ts
product: [
  // ... existing items
  { name: "new-project", desc: "Description...", lang: "TypeScript", langColor: "#3178C6", stars: "100", forks: "20" },
],
```

### Add a new experience entry
Edit `app/data/experiences.ts`:
```ts
{
  role: "New Role Title",
  isCurrent: false,
  hash: "abc1234",
  company: "Company Name",
  period: "Month Year · Month Year · Location",
  description: "What you did...",
  diffHeader: "diff --git a/old b/new",
  additions: ["Added this", "Built that"],
  removals: ["Removed this"],
},
```

### Add a new category tab
1. Add data to `data/repos.ts` → `repos` object + `categoryTitles`
2. Add tab entry in `components/Header.tsx` → `categoryTabs` array
3. `CategoryContent.tsx` will render it automatically

### Add a new page
1. Create `app/newpage/page.tsx`
2. Import `Header` with `showTabs={false}`
3. Add nav link in `Header.tsx` → `navLinks` array

---

## 7. Constraints — DO NOT BREAK

1. **DO NOT** use Tailwind utility classes for layout/color. Use `globals.css` variables only.
2. **DO NOT** change the `:root` color tokens without explicit user approval.
3. **DO NOT** add inline `color: "#hex"` — always reference `var(--gh-*)`.
4. **DO NOT** modify `layout.tsx` unless changing metadata or adding a new font.
5. **DO NOT** put component logic or data arrays directly in `page.tsx`.
6. **DO NOT** remove the `"use client"` directive from interactive components.
7. **DO NOT** use `<Image>` from `next/image` for the profile photo — use `<img>` with `onError` fallback.
8. **ALWAYS** prefix new CSS classes with `gh-`.
9. **ALWAYS** center main content at `max-width: 1012px`.
10. **ALWAYS** match the GitHub Dark Mode aesthetic — no bright backgrounds, no light themes.

---

## 8. Quick Reference — Common Edits

| I want to... | Edit this file |
|---|---|
| Change my name/bio | `components/overview/ProfileSidebar.tsx` |
| Update profile photo | Drop image as `public/profile.jpg` |
| Edit README intro text | `components/overview/ReadmeCard.tsx` |
| Add/edit career entries | `data/experiences.ts` |
| Add/edit project repos | `data/repos.ts` |
| Change tech stack badges | `data/repos.ts` → `techStack` array |
| Edit social links | `components/overview/ProfileSidebar.tsx` |
| Modify header nav links | `components/Header.tsx` → `navLinks` |
| Add/remove category tabs | `components/Header.tsx` → `categoryTabs` |
| Edit contact form | `contact/page.tsx` |
| Change global colors | `globals.css` → `:root` block |
| Add new CSS component | `globals.css` (use `gh-` prefix) |

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JHPortfolio is a static personal portfolio website for Joel Hellberg (Fullstack Developer, Värnamo). No build system, no package manager, no framework — plain HTML, CSS, and JavaScript served directly in a browser.

## Development

Open any `.html` file directly in a browser, or use a local static server:

```bash
npx serve .
# or
python -m http.server 8080
```

## Architecture

Three pages, each with its own `<main>` content but sharing the same header, footer, and CSS stack.

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, about, skills |
| `projekt.html` | Projects — card grid (3 placeholder cards) |
| `kontakt.html` | Contact — email, GitHub, LinkedIn/Facebook placeholders |
| `js/main.js` | Mobile nav toggle, scroll reveal (IntersectionObserver), dynamic footer year |

### CSS Architecture

Each HTML page loads CSS in this order:

```
reset.css → variables.css → layout.css → components.css → [page].css → animations.css
```

| File | Scope |
|------|-------|
| `css/reset.css` | Box-sizing, margin/padding reset |
| `css/variables.css` | All CSS custom properties (colors, spacing, type scale, radii) |
| `css/layout.css` | Header, nav, footer, container, section helpers, responsive breakpoints |
| `css/components.css` | Buttons, skill cards, project cards, contact items, tags |
| `css/home.css` | Hero, about, skills grid — home page only |
| `css/projects.css` | Projects grid — projekt.html only |
| `css/contact.css` | Contact layout — kontakt.html only |
| `css/animations.css` | `.reveal`, `.reveal-left`, `.reveal-right`, `.stagger` — triggered by JS |

### Design Tokens (css/variables.css)

- **Accent:** `--accent: #22C55E` (green)
- **Backgrounds:** `--dark: #0D0D0D`, `--dark-surface: #141414`, `--surface: #1C1C1C`
- **Text:** `--text-primary: #F1F1F1`, `--text-secondary: #A0A0A0`, `--text-muted: #5A5A5A`
- **Spacing:** `--sp-1` through `--sp-24` in 0.25rem increments
- **Type scale:** `--text-xs` (0.75rem) through `--text-6xl` (3.75rem)

### Scroll Animations

Add class `reveal`, `reveal-left`, or `reveal-right` to any element. For a grid where children stagger in, add `stagger` to the parent. `js/main.js` uses `IntersectionObserver` to add `.visible` when elements enter the viewport.

### Responsive Breakpoints

- `768px` — hamburger menu activates, single-column layouts
- `480px` — smaller font sizes and padding

## Content Notes

- Site language: **Swedish**
- Profile photo: `bilder/jh.jpg`
- Logo: `bilder/jhlogovit.png` (white, for dark background)
- Project cards in `projekt.html` are placeholders — replace with real projects when ready
- LinkedIn and Facebook links are `href="#"` placeholders
- GitHub: `https://github.com/JoelHellberg95`

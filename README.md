# Jeongwan Shin · Research Portfolio

Native web portfolio built around the full content and narrative order of the supplied 25-page research deck.

## Content

Introduction → profile / experience → four research areas → RaPhy-AD motivation → architecture → training data / SFT / GRPO rewards → evaluation protocol and complete result tables → qualitative comparisons and all eight original videos → simulation → contact.

Whole-slide images are not used in the website. Research figures and portrait are extracted from the supplied PDF; text, tables, equations, process flows and navigation are native HTML/CSS/JS. The original PDF remains available as an optional Research deck download.

## Files

- `index.html`: full portfolio
- `qualitative.html`: standalone video page
- `design.css`: visual design and responsive layout
- `portfolio.js`: accessible tabs, figure viewer, old-anchor compatibility
- `script.js`: video controls and scene filters
- `scene-01.mp4` through `scene-08.mp4`: original driving videos

Local preview: `python3 -m http.server 8000`

Hosted with GitHub Pages from `main` / root.

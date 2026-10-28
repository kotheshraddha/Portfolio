# Portfolio

Static HTML site. No build step, no dependencies to install.

```
index.html                      homepage (Case Studies grid, Exploration drum, footer)
case-studies/
  spotify-analytics.html
  katha-canvas-analytics.html
  logistics-analytics.html
  credit-card-analytics.html
assets/
  css/case-study.css            styles shared by all case study pages
  js/case-study.js              behaviour shared by all case study pages
  img/spotify.png               image used on the Selected work cards
```

## Run locally

Open `index.html` in a browser (double-click works), or serve the folder:

    python3 -m http.server 8000     # then visit http://localhost:8000

## Where things live

- **Page colours**: each case study has a small `<style>` block in its `<head>` with its theme tokens
  (`--bg`, `--ink`, `--project`, `--accent`, ...). Everything else comes from `assets/css/case-study.css`.
- **Selected work cards** (`cs` array in `index.html`): `m` (label), `t` (title), `d` (description), `h` (link),
  `img` (card image path, exported at 2x and shown at half size). Only the first two projects live here.
- **Exploration drum cards** (`CS` array in `index.html`): every case study, same fields plus `c` — the card gradient.
  **To change a drum card's colours edit `c:{top, bottom, glow}`** in the block headed `DRUM CARD COLOURS` (search for it).
  `top` = dark colour behind the text, `bottom` = main colour fading in lower down, `glow` = highlight in the bottom-right corner.
  The gradient is painted in `csTex()` just below that block.
- **Hero layout**: styles under `/* hero */` — `.hero-row` holds the buttons (left) and the sub-text (right, under "Kothe").
- **Power BI reports**: the `src` of the `<iframe>` and the "Open in new tab" link in each case study.

## Adding a case study

Copy an existing page in `case-studies/`, change its tokens, copy and embed URL, then add a card to `index.html`.

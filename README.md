# Pedro Kalva Portfolio

Static Angular portfolio for GitHub Pages. Content is hardcoded for now so the site can be hosted without a backend.

## Edit Content

Update portfolio content in:

```text
src/app/data/portfolio-content.ts
```

That file contains profile links, projects, blog posts, the draft experience timeline, and future project ideas.

## Local Development

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Build

```bash
npm run build
```

For GitHub Pages project hosting at `/portfolio/`:

```bash
npm run build:pages
```

The `build:pages` script also copies `index.html` to `404.html` so Angular routes can survive page refreshes on GitHub Pages.

## Deploy

The workflow in `.github/workflows/pages.yml` builds the app and deploys it to GitHub Pages from the `main` branch.


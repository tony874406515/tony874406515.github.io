# Shitao Jin Academic Website

Personal academic website for Shitao Jin, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and configured for GitHub Pages.

## Local Structure

- `_pages/about.md`: homepage biography and highlights
- `_bibliography/papers.bib`: publication data
- `_projects/`: research theme pages
- `_data/cv.yml`: CV page data
- `_data/socials.yml`: academic and contact links
- `assets/img/profile.jpg`: profile photo
- `assets/img/publications/`: publication preview images rendered from local PDFs
- `assets/pdf/`: CV PDFs and selected paper PDFs

## GitHub Pages URL

This repository is configured as a project page for:

```yml
url: https://tony874406515.github.io
baseurl:
```

The expected deployed URL is:

```text
https://tony874406515.github.io/
```

The repository should be named `tony874406515.github.io` so the site is published at the root GitHub Pages address.

## Deployment

The included `.github/workflows/deploy.yml` builds the site with GitHub Actions and deploys the generated `_site` folder to GitHub Pages.

After pushing to GitHub, enable GitHub Pages from the `gh-pages` branch in the repository settings if it is not already enabled.

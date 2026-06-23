# Shitao Jin Academic Website

Personal academic website for Shitao Jin, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and configured for GitHub Pages.

## Local Structure

- `_pages/about.md`: homepage biography and highlights
- `_bibliography/papers.bib`: publication data
- `_projects/`: research theme pages
- `_data/cv.yml`: CV page data
- `_data/socials.yml`: academic and contact links
- `assets/img/profile.jpg`: profile photo
- `assets/img/publication_preview/`: publication preview images referenced by the `preview` field in `_bibliography/papers.bib`
- `assets/pdf/`: CV PDFs and selected paper PDFs

## GitHub Pages URL

The GitHub repository homepage link can point to:

```text
https://shitaojin.github.io/
```

For the current `tony874406515/shitaojin.github.io` repository, GitHub Pages publishes the working site as a project page:

```yml
url: https://tony874406515.github.io
baseurl: /shitaojin.github.io
```

The expected deployed URL is:

```text
https://tony874406515.github.io/shitaojin.github.io/
```

To make `https://shitaojin.github.io/` actually resolve, the site must be hosted from a GitHub user or organization named `shitaojin` with a repository named `shitaojin.github.io`.

## Deployment

The included `.github/workflows/jekyll.yml` builds the site with GitHub Actions and deploys the generated `_site` folder to GitHub Pages.

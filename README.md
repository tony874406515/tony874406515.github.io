# Shitao Jin Academic Website

Personal academic website for Shitao Jin, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and configured for GitHub Pages.

## Local Structure

- `_pages/about.md`: homepage biography and highlights
- `_bibliography/papers.bib`: publication data
- `_projects/`: research theme pages
- `_data/cv.yml`: CV page data
- `_data/socials.yml`: academic and contact links
- `assets/img/profile.jpg`: profile photo
- `assets/css/custom.css`: local visual styling overrides
- `assets/img/publication_preview/`: publication preview images referenced by the `preview` field in `_bibliography/papers.bib`
- `assets/pdf/`: CV PDFs and selected paper PDFs

## GitHub Pages URL

The GitHub repository homepage link can point to:

```text
https://shitaojin.github.io/
```

The current repository is `shitaojin/shitaojin.github.io`, so GitHub Pages publishes the site as a user homepage:

```yml
url: https://shitaojin.github.io
baseurl:
```

The expected deployed URL is:

```text
https://shitaojin.github.io/
```

The repository name must remain exactly `shitaojin.github.io` for this root URL to work.

## Deployment

The included `.github/workflows/jekyll.yml` builds the site with GitHub Actions and deploys the generated `_site` folder to GitHub Pages.

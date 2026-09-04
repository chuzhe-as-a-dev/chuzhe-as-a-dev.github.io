# Repository guide

This repository is Chuzhe Tang's academic homepage. It is a customized [al-folio](https://github.com/alshedivat/al-folio) Jekyll site deployed from `main` to GitHub Pages. Treat the upstream documentation as theme reference material; preserve the site's current, deliberately reduced scope.

## Active content

- `_config.yml` controls site identity, enabled collections, Jekyll plugins, and publication rendering. The site URL is `https://chuzhe.me`, with an empty `baseurl`.
- `_pages/about.md` contains the homepage biography, profile image configuration, and the switches for news and selected publications.
- `_layouts/about.liquid` contains the homepage-only Honors and Awards, Services, Teaching, and Mentoring sections.
- `_news/*.md` contains dated news entries. Use YAML front matter with `layout: post`, an ISO date, `inline: true`, and `related_posts: false`.
- `_pages/publications.md` renders the publication list through Jekyll Scholar.
- `_my_bib` is a Git submodule and the active bibliography source is `_my_bib/all.bib`. `_bibliography/papers.bib` is upstream sample data and is not used by the current Scholar configuration.
- `assets/img/` and `assets/audio/` contain personal media. The profile image is `assets/img/headshot.jpg` and the pronunciation link targets `assets/audio/pronunciation.mp3`.
- `_includes/`, `_layouts/`, `_sass/`, `_scripts/`, and `_plugins/` contain theme implementation. Change them only when the requested behavior cannot be achieved through content or configuration.

Blog posts, books, projects, repositories, profiles, teaching, and curriculum vitae pages remain in the checkout as upstream examples, but `_config.yml` excludes them from the built site. Do not update or re-enable them unless explicitly requested.

## Editing rules

Make narrow changes and preserve Liquid tags, YAML front matter, and the existing English prose style. Keep personal facts, dates, affiliations, publication metadata, and external links exactly as supplied or verified; do not infer missing biographical details.

When changing publications, initialize the submodule if needed with `git submodule update --init --recursive`. A bibliography update normally requires a commit in `_my_bib` followed by an update of the submodule pointer in this repository. Do not replace the submodule with copied bibliography data. Inspect both repositories' status before reporting completion.

For publication `location` fields, include standard two-letter state or province abbreviations for venues in the United States and Canada, as in `San Diego, CA, USA` and `Montreal, QC, Canada`. Keep venues in other countries in `City, Country` form.

Do not edit generated or cached output in `_site/`, `.jekyll-cache/`, `.sass-cache/`, `assets/libs/`, `node_modules/`, or `vendor/`. Do not commit local `.DS_Store` files. Keep unrelated upstream theme examples and unrelated user changes intact.

## Validation

Choose checks in proportion to the change.

- For Markdown, YAML, Liquid, JavaScript, or style edits, run `npm ci` when dependencies are absent, then `npx prettier . --check`. To avoid unrelated churn, use `npx prettier --write <changed-files>` only on files intentionally edited.
- For a site-affecting change, use the Ruby version declared in `.ruby-version`, ensure Bundler 2.6.9 is available, and run `bundle exec jekyll build`. The build output belongs in `_site/` and must not be committed.
- If the native Ruby toolchain is unavailable, use `docker compose up --build` for local preview at `http://localhost:8080` or report the toolchain limitation instead of modifying dependency versions merely to make the local machine build.
- Run `git diff --check` before completion. Review `git diff --submodule=log` when `_my_bib` is involved.

GitHub Actions performs the production Jekyll build, PurgeCSS processing, Prettier checks, link checks, and accessibility checks. A local Jekyll build validates rendering but does not replace those hosted checks.

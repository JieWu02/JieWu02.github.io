# Academic website

Source for the academic homepage at <https://jiewu02.github.io/>.

## Published content

- `_pages/about.md`: homepage, publications, and public contact links.
- `_pages/sitemap.md` and `_pages/404.md`: sitemap and missing-page response.
- `images/`: images and icons used by the published pages and web manifest.
- `terminal-universe/index.html`: redirect to the independent project website.
- `_layouts/`, `_includes/`, `_sass/`, and `assets/`: theme and presentation code.

Only include material intended for public access. Files in this repository can be
downloaded even if no page links to them. Keep private originals, contact QR codes,
unused portraits, and local credentials outside the repository. Before adding an
image, remove location, device, and other private metadata.

Deleting a file from the current version does not remove it from Git history.
History cleanup requires a separate coordinated rewrite.

## Local preview

Install a Ruby version compatible with the `github-pages` gem, then run:

```sh
bundle install
bundle exec jekyll serve
```

To build the static site:

```sh
bundle exec jekyll build --safe
```

The generated `_site/` directory, local environment files, and dependency caches
are excluded from version control. Check local links and image references before
publishing. GitHub Pages builds the repository's `master` branch.

## Attribution

Based on [AcademicPages](https://github.com/academicpages/academicpages.github.io)
and [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes).
The theme copyright and MIT license are retained in `LICENSE`.

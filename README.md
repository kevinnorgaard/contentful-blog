# Contentful Blog

An Angular blog application powered by [Contentful](https://www.contentful.com/) as a headless CMS.

## Prerequisites

- [Node.js](https://nodejs.org/) v20+ (managed via [nvm](https://github.com/nvm-sh/nvm))
- npm v10+

## Getting Started

```bash
nvm use 20
npm install --force
```

> `--force` is needed due to a peer dependency mismatch in `ngx-disqus`.

## Development

```bash
npm run serve
```

Serves the app at [http://localhost:4200/](http://localhost:4200/) with live reload.

## Production Build

```bash
npm run build -- --configuration=production
```

Output is written to `dist/contentful-blog/`.

## Deploy

```bash
npm run deploy
```

Builds for production and syncs to the remote server via rsync.

## Tech Stack

- **Angular** 19
- **TypeScript** 5.8
- **Contentful** SDK for CMS content
- **ngx-disqus** for comments
- **RxJS** for reactive programming

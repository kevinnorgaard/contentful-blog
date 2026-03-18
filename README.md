# Contentful Blog

A blog and lifestyle content platform built with Angular and server-side rendering, powered by the Contentful headless CMS. The platform serves multi-category content across fashion, beauty, wellness, and art — featuring dynamic rich-text rendering, an Instagram feed, social sharing, and a Disqus-powered comments system.

## Prerequisites

- [Node.js](https://nodejs.org/) v20+ (managed via [nvm](https://github.com/nvm-sh/nvm))
- npm v10+

## Getting Started

```bash
nvm use 20
npm install
```

## Development

```bash
npm run serve
```

Serves the app at [http://localhost:4200/](http://localhost:4200/) with live reload.

## SSR Development

```bash
npm run dev:ssr
```

Serves the app with server-side rendering enabled.

## Production Build

```bash
npm run build:ssr
```

Output is written to `dist/contentful-blog/`. Start the SSR server with:

```bash
npm run serve:ssr
```

## Deploy

```bash
npm run deploy
```

Builds for production and syncs to the remote server via rsync.

## Tech Stack

- **Angular** 19 with **@angular/ssr** (server-side rendering)
- **TypeScript** 5.8
- **Contentful** SDK for CMS content
- **ngx-disqus** for comments
- **RxJS** for reactive programming
- **Express** for the SSR server

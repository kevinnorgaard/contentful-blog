# Contentful Blog

A blog and lifestyle content platform built with Angular and server-side rendering, powered by the Contentful headless CMS. The platform serves multi-category content across fashion, beauty, wellness, and art -- featuring dynamic rich-text rendering, an Instagram feed, social sharing, and a Disqus-powered comments system.

## Prerequisites

- [Node.js](https://nodejs.org/) v22+ (managed via [nvm](https://github.com/nvm-sh/nvm))
- npm v10+

## Getting Started

```bash
nvm use 22
npm install
```

## Development

```bash
npm start
```

Serves the app at [http://localhost:4200/](http://localhost:4200/) with live reload.

## Production Build

```bash
npm run build
```

Output is written to `dist/contentful-blog/`. Start the SSR server with:

```bash
npm run serve:ssr
```

## Docker

```bash
docker build -t blog .
docker run -p 8080:8080 blog
```

## Deploy

```bash
npm run deploy
```

Deploys to Google Cloud Run via Cloud Build. This builds the Docker image using Kaniko and deploys it to the `blog` Cloud Run service in `us-west1`.

## Tech Stack

- **Angular** 21 with **@angular/ssr** (server-side rendering)
- **TypeScript** 5.9
- **Contentful** SDK for CMS content
- **ngx-disqus** for comments
- **RxJS** for reactive programming
- **Express** 5 for the SSR server
- **Google Cloud Run** for hosting
- **Docker** with multi-stage builds

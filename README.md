# Carina Collective - Blog

Blog and lifestyle platform for [blog.kevinnorgaard.com](https://blog.kevinnorgaard.com). Built with Angular 21, Express SSR, and Contentful CMS. Features multi-category content (fashion, beauty, wellness, art), Disqus comments, and newsletter subscriptions.

## Tech Stack

| Layer | Choice |
|---|---|
| Runtime | Node.js 22 |
| Framework | Angular 21 (standalone, SSR via `@angular/ssr`) |
| Language | TypeScript 5.9 |
| CMS | Contentful (REST SDK) |
| Comments | Disqus (ngx-disqus) |
| Server | Express 5 |
| Hosting | Google Cloud Run (us-east1) |
| CI/CD | Google Cloud Build (Kaniko) |

## Project Structure

```
src/
├── app/
│   ├── app.component.ts              # Root component
│   ├── app.config.ts                 # Client config (routing, hydration)
│   ├── app.config.server.ts          # Server config (SSR rendering)
│   ├── app.routes.ts                 # Client routes
│   ├── app.routes.server.ts          # Server route render modes
│   ├── contentful.service.ts         # Contentful CMS queries
│   ├── contentful.resolve.ts         # Route resolver for blog data
│   ├── disqus.service.ts             # Disqus comments integration
│   ├── header/                       # Site navigation
│   ├── footer/
│   ├── blog/                         # Single blog post (contentful-list/, share-bar/)
│   ├── blog-list/                    # Blog listing grid
│   ├── blog-preview/                 # Blog card component
│   ├── category-list/                # Category navigation (category/)
│   ├── newsletter/                   # Email signup (newsletter-input/)
│   ├── instagram/                    # Instagram feed
│   ├── slideshow/                    # Image carousel
│   └── pages/
│       ├── home/
│       ├── about/
│       ├── art/
│       ├── style-beauty/
│       └── wellness/
├── server.ts                         # Express SSR server entry
├── main.ts                           # Client bootstrap
├── main.server.ts                    # Server bootstrap
└── assets/                           # Images and static files
```

## Local Development

```bash
nvm use 22
npm install
npm start
# Open http://localhost:4200
```

## Deployment

```bash
npm run deploy
```

This runs `gcloud builds submit`, which builds the Docker image via Kaniko and deploys to the `blog` Cloud Run service in `us-east1`.

## Key Configuration Notes

- `outputMode: "server"` in `angular.json` enables proper SSR manifest injection for `AngularNodeAppEngine`
- `NG_ALLOWED_HOSTS` env var in the Dockerfile controls which hostnames are permitted for SSR (SSRF protection)
- Express catch-all route uses `/{*path}` syntax for `path-to-regexp` v8 compatibility
- Contentful API keys are configured in `contentful.service.ts`

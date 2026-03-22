FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

ENV PORT=8080
ENV NG_ALLOWED_HOSTS="*.run.app,blog.kevinnorgaard.com,localhost"
EXPOSE 8080

CMD ["node", "dist/blog/server/server.mjs"]

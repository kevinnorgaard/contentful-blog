FROM node:10

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build:ssr

CMD [ "npm", "run", "serve:ssr" ]

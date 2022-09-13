# syntax=docker/dockerfile:1

FROM node:lts-alpine AS svelte-build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:1.23.1

WORKDIR /srv/www

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=svelte-build /usr/src/app/dist .

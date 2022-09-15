# syntax=docker/dockerfile:1

FROM node:lts-alpine AS sveltekit-build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM node:lts-alpine

WORKDIR /app
ENV NODE_ENV production
ENV PORT 80

COPY package.json package-lock.json ./
RUN npm ci --production --ignore-scripts

COPY --from=sveltekit-build /app/build ./

EXPOSE 80
CMD ["node", "./index.js"]

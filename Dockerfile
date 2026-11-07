FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:alpine
RUN apk add --no-cache nodejs
WORKDIR /app
COPY package.json ./
COPY server/ ./server/
COPY src/data/site.js ./src/data/site.js
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/.astro/site-chat.json ./.astro/site-chat.json
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENV INQUIRY_ALLOWED_ORIGINS=https://one-event.gr,https://one.savvaszinonos.work
EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["node", "server/production.mjs"]

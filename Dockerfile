# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY web/package*.json ./
RUN npm ci

COPY web/src ./src
COPY web/public ./public
COPY web/index.html ./
COPY web/vite.config.js ./
COPY web/tailwind.config.js ./
COPY web/eslint.config.js ./
COPY web/postcss.config.cjs ./

RUN npm run build

# Production stage
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

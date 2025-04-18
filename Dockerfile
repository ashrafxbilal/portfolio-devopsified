# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies required for canvas
RUN apk add --no-cache \
    build-base \
    python3 \
    make \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    libjpeg-turbo-dev \
    giflib-dev

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# rebuild canvas for Linux
RUN npm rebuild canvas --build-from-source

# Generate OpenGraph image
RUN node scripts/generate-og-image.js

# Build the application
RUN npm run build

# Stage 2: Use a minimal nginx image for serving static files
FROM nginx:alpine AS production

# Copy the built app to nginx's serve directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Create a custom nginx config that handles SPA routing
RUN echo 'server { \
    listen 3000; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose the port the app will run on
EXPOSE 3000

# nginx starts automatically, no CMD needed
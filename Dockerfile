# Multi-stage build for Hugo static site
# Stage 1: Build the Hugo site
FROM hugomods/hugo:latest AS builder

# Set working directory
WORKDIR /src

# Copy Hugo configuration and content
COPY hugo.toml .
COPY archetypes/ ./archetypes/
COPY assets/ ./assets/
COPY content/ ./content/
COPY data/ ./data/
COPY i18n/ ./i18n/
COPY layouts/ ./layouts/
COPY static/ ./static/
COPY themes/ ./themes/

# Build the Hugo site
RUN hugo --minify --gc

# Stage 2: Serve with nginx
FROM nginxinc/nginx-unprivileged:1-alpine

# Copy built site from builder stage
COPY --from=builder /src/public /usr/share/nginx/html

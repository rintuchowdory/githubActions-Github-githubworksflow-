FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your custom index.html
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80


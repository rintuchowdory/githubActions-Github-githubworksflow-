FROM ubuntu:22.04
RUN apt update && apt install -y curl nginx -y
COPY index.html /var/www/html/index.html
CMD ["nginx", "-g", "daemon off;"]

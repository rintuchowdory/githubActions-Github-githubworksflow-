# Build the image
docker build -t rintuuu/github-actions-demo:latest .

# You should see output like:
# Step 1/4 : FROM ubuntu:22.04
# Step 2/4 : RUN apt update && apt install -y curl nginx -y
# Step 3/4 : COPY index.html /var/www/html/index.html
# Step 4/4 : CMD ["nginx", "-g", "daemon off;"]
# Successfully built...

# Use the official Node.js image
FROM docker.arvancloud.ir/node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Build the application
RUN npm run build

# Use a lighter image for production
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
COPY .env /usr/share/nginx/html/.env
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
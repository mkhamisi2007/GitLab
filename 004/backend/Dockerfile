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

# Expose the port
EXPOSE 3000

# Run the web service on container startup.
CMD ["node", "src/index.js"]
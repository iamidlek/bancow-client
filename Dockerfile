# Base on offical Node.js Alpine image
FROM node:alpine
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Separate layer
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]

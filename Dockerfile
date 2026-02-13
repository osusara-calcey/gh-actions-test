# Use official Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Expose port (adjust if needed)
EXPOSE 3000

# Start app
CMD ["node", "server.js"]

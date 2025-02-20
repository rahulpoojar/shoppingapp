# Build Stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install a lightweight HTTP server
RUN npm install -g serve

# Copy only the built files from the builder stage
COPY --from=builder /app/dist /app/dist

# Expose the port your app runs on
EXPOSE 5173

# Serve the built files
CMD ["serve", "-s", "dist", "-l", "5173"]

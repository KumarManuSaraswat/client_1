# Stage 1: Build the React application
FROM node:22-alpine AS build
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code and build
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Replace default Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
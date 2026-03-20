# Build the Vite app
FROM node:20-alpine AS build
WORKDIR /app

ARG VITE_TRIP_URL
ARG VITE_DRIVER_URL
ARG VITE_RIDER_URL

ENV VITE_TRIP_URL=$VITE_TRIP_URL
ENV VITE_DRIVER_URL=$VITE_DRIVER_URL
ENV VITE_RIDER_URL=$VITE_RIDER_URL

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

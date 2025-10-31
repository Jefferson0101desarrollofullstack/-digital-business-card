FROM node:16 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

# Usar la configuración por defecto de nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
### STAGE 1: Build ###
FROM node:16-alpine AS build
WORKDIR /usr/src/app

# Copie uniquement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installe les dépendances dans le conteneur
RUN npm install --force

# Copie le reste des fichiers du projet
COPY . .

# Exécute le build Angular
RUN npm run build --force

# Expose le port 80 (optionnel pour le stade de build)
EXPOSE 80

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine

# Copie la configuration Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copie les fichiers construits d'Angular vers le dossier Nginx
COPY --from=build /usr/src/app/dist/tpfoyer-front /usr/share/nginx/html

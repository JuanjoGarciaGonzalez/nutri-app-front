# Usa una imagen base de Node.js
FROM node:18-alpine

# Crea el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Construye la aplicación para producción
RUN npm run build

# Instala un servidor HTTP simple para servir el frontend
RUN npm install -g serve

# Exponer el puerto 80
EXPOSE 80

# Comando para servir la aplicación
CMD ["serve", "-s", "dist", "-l", "80"]
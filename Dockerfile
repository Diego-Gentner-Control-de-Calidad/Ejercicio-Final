# Establece la imagen base
FROM node:14-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de la aplicación (package.json y package-lock.json si existe)
COPY package*.json ./

# Instala las dependencias de npm
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto 80
EXPOSE 80

# Ejecuta el archivo "graphs.js"
CMD [ "node", "graphs.js" ]

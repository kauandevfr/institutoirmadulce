FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 1007
# use shell form p/ evitar qualquer array injectado:
CMD npm run start

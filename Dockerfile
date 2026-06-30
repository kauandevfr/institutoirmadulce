FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 1007
ENV PORT=1007
ENV HOST=0.0.0.0
CMD ["node", ".output/server/index.mjs"]
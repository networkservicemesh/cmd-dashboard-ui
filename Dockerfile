FROM node:20.17.0-alpine3.20

WORKDIR /app
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]

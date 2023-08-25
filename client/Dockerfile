FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm run install --verbose

RUN npm run lint --verbose

RUN npm run build --verbose

EXPOSE 3000

CMD [ "npm", "run", "start" ]
FROM node:8.7.0-alpine

WORKDIR /app/react-chat-server

COPY package*.json /app/react-chat-server/
RUN npm install

COPY . /app/react-chat-server/

CMD ["node", "server.js"]
EXPOSE 5000
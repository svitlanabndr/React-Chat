FROM node:8.7.0-alpine

WORKDIR /app/react-chat-client

COPY package*.json /app/react-chat-client/
RUN npm install

COPY . /app/react-chat-client/

CMD ["npm", "start"]
EXPOSE 3000
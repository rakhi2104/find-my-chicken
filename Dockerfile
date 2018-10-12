FROM node:slim
WORKDIR /app
ADD . .
RUN npm install && \
    cd client && \
    npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]
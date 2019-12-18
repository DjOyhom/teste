FROM node:slim
WORKDIR /api-gdd
COPY . /api-gdd
RUN npm install
CMD ["node" , "index.js"]

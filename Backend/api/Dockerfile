FROM node
WORKDIR ./app
RUN npm install -g nodemon
COPY . .
RUN npm install
EXPOSE 5000
CMD ["nodemon", "index.js"]

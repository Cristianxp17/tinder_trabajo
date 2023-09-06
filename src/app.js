require('dotenv').config()

const { server } = require ('./server');

const server = new server();

server.listen();

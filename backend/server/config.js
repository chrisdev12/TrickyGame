const express = require('express');
const server = express();
const cors = require('cors');
const router = require('./router');
//Basic server config: Cors, JsonParser and routes
server.use(cors({ origin: '*' }));
server.use(express.json());
router(server);

module.exports = server;

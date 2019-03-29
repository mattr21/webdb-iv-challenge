const express = require('express');
const server = express();
const helmet = require('helmet');
// const cohortsRouter = require('');
// const studentsRouter = require('');

server.use(express.json());
server.use(helmet());
// server.use('', );
// server.use('', );

module.exports = server;
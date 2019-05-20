const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('./routes/users-router.js');
const authRouter = require('../auth/auth-router.js');

const restricted = require('../auth/restricted-mw.js');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
});

server.use('/api/users', restricted, userRouter);
server.use('/api/auth', authRouter);

module.exports = server;

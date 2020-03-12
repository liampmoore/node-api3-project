const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'client/build')));


const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

server.use(express.json())

server.use(logger)


server.use('/api/users', userRouter)
server.use('/api/posts', postRouter)

//Catchall to return the the react app
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//custom middleware

function logger(req, res, next) {
  console.log("\x1b[36m", `${req.method}`, "\x1b[32m", `to ${req.originalUrl}`)
  next()
}

module.exports = server;

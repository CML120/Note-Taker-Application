const express = require('express');

// import routes
const apiRouter = require('./apiroutes.js');
const htmlRouter = require('./htmlroutes.js');

const app = express();

// use routes
app.use('/api', apiRouter);
app.use('/', htmlRouter);

module.exports = app;
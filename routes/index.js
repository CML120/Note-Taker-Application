const express = require('express');

// import routers
const htmlRouter = require('./htmlroutes.js');

const app = express();

// use routes
app.use('/', htmlRouter);

module.exports = app;
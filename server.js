//dependency: required npm package
const express = require('express');
//creating instance of express server
const app = express();
//sets port for use with listener
const PORT = process.env.port || 3001;
//routes
const apiRouter = require('./routes');
const htmlRouter = require('./routes'); 
// const { apiRouter, htmlRouter } = require('./routes');


// middleware for parsing JSON and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving static files from public directory
app.use(express.static('public'));

//path to html notes page
app.use('/', apiRouter);
app.use('/', htmlRouter);

//start the server and listen to the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

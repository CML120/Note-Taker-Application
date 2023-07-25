//dependency: required npm package
const express = require('express');
//creating instance of express server
const app = express();
//sets port for use with listener
const PORT = process.env.port || 3001;
//routes
const htmlRouter = require('./routes/index.js'); 



// middleware for parsing JSON and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//path to html notes page
app.use('/', htmlRouter);

//serving static files from public directory
app.use(express.static('public'));

//start the server and listen to the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

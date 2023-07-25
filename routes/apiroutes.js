const apiRouter = require('express').Router();
const fs = require('fs');
const dbFilePath = './db/db.json';



apiRouter.get('/notes', function(req, res) {
    fs.readFile(dbFilePath, (err, data) => {
      if (err) throw err;
      notesData = JSON.parse(data);
      res.send(notesData);
    });
  });



module.exports = apiRouter;
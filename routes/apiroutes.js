//importing required npm package
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//import helper functions
const { readNotesFromDb, writeNotesToDb } = require("../helpers/helpers.js");

//create instance of express
const apiRouter = require('express').Router();

const dbFilePath = './db/db.json';


//GET route. retrieve notes, returned as JSON
apiRouter.get('/notes', function (req, res) {
  fs.readFile(dbFilePath, (err, data) => {
    if (err) throw err;
    notesData = JSON.parse(data);
    res.send(notesData);
  });
});

//POST route. saves new notes to db
apiRouter.post('/notes', function (req, res) {
  const newNote = req.body;
  const notes = readNotesFromDb();
  newNote.id = uuidv4();
  notes.push(newNote);
  writeNotesToDb(notes);
  res.json(newNote);
});


//DELETE route,  deletes note by id
apiRouter.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const notes = readNotesFromDb();

  const noteIndex = notes.findIndex((note) => note.id === noteId);

  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    writeNotesToDb(notes);
    res.status(204).send(); // 
  } else {
    res.status(404).json({ error: 'Note does not exist' });
  }
});

//export apiRouter to be used in other parts of the application
module.exports = apiRouter;
const apiRouter = require('express').Router();
const fs = require('fs');
const dbFilePath = './db/db.json';
const { v4: uuidv4 } = require('uuid');
const { readNotesFromDb, writeNotesToDb } = require("../helpers/helpers.js");

apiRouter.get('/notes', function(req, res) {
    fs.readFile(dbFilePath, (err, data) => {
      if (err) throw err;
      notesData = JSON.parse(data);
      res.send(notesData);
    });
  });

  apiRouter.get('/notes', function (req, res) {
    const notes = readNotesFromDb();
    res.json(notes);
  });
  
  apiRouter.post('/notes', function (req, res) {
    const newNote = req.body;
    const notes = readNotesFromDb();
    newNote.id = uuidv4();
    notes.push(newNote);
    writeNotesToDb(notes);
    res.json(newNote);
  });

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

module.exports = apiRouter;
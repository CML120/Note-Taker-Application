const fs = require('fs');
const dbFilePath = './db/db.json';

function readNotesFromDb() {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
  }
  
  function writeNotesToDb(notes) {
    fs.writeFileSync(dbFilePath, JSON.stringify(notes), 'utf8');
  }
  
  module.exports = { readNotesFromDb, writeNotesToDb };
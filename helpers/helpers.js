//importing required npm package
const fs = require('fs');

//set file path of db
const dbFilePath = './db/db.json';

//function to read data from db
function readNotesFromDb() {
  const data = fs.readFileSync(dbFilePath, 'utf8');
  return JSON.parse(data);
};

//function to write data to db
function writeNotesToDb(notes) {
  fs.writeFileSync(dbFilePath, JSON.stringify(notes), 'utf8');
};

//exporting functions
module.exports = { readNotesFromDb, writeNotesToDb };
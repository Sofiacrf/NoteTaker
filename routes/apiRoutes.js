// LOAD DATA
// Linking the routes to the date

//const noteData = require('../data/noteData');
const fs = require('fs');
const path = require("path");
//const { read } = require('../data/noteData')

let theNotes;

// ROUTING
module.exports = (app) => {

   // API notes reads the db.json file
   const noteData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));

   app.get('/api/notes', (req, res) => res.json(noteData));

   // API POST Request returns all saved notes
   app.post('/api/notes', (req, res) => {
      noteData.push(req.body);
      res.json(true);
   });
   
   fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteData),
   function (err, data) {
      if (err) {
         return err;
      }
      res.json(noteData);
   })

   };

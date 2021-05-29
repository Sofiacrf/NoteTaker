// LOAD DATA
// Linking the routes to the date

//const noteData = require('../data/noteData');
const fs = require('fs');
const util = require("util");

const readTheFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

let theNotes;

// ROUTING
module.exports = (app) => {

   // Read the db.json file
   const noteData = readTheFile('./db/db.json');
   
   
   //API GET Requests 
   app.get('/api/notes', (req, res) =>
      res.json(theNotes))



   //API POST Request
   // Save the information on the request body
   app.post('/api/notes', (req, res) => {
      noteData.push(req.body);
   

   // Save the information on the db.json file
   writeToFile('./db/db.json', JSON.stringify(noteData), function (err, data) {
      if (err) {
         return err
      }
      res.json(theNotes);
   });
});



};

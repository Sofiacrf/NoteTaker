
// Require data
const fs = require('fs');
const path = require("path");


// ROUTING
module.exports = (app) => {

   // API notes reads the db.json file
   const noteData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));

  // API GET Request that gets the response
   app.get('/api/notes', (req, res) => res.json(noteData));

   // API POST Request returns all saved notes on the request body
   app.post('/api/notes', (req, res) => {
      noteData.push(req.body);
      res.json(true);
   });
   // Use FS WriteFileSync to write the notes
   fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteData),
   function (err, data) {
      if (err) {
         return err;
      }
      res.json(noteData);
   })

   };

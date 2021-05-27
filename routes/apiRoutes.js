// LOAD DATA
// Linking the routes to the date

const noteData = require('../data/noteData');
const savedNotes = require('../data/savedNotesData');

// ROUTING
module.exports = (app) => {
   //API GET Requests 
   app.get('/api/notes', (req, res) => {
      noteData.push(req.body.id);
      fs.readFile('notes.json');
   });

   app.get('api/saved', (req, res) => res.json(savedNotes));

   //API POST Requests
   app.post('/api/notes', (req, res) => {
      noteData.push(req.body);
      fs.writeFile('notes.json', JSON.stringify(noteData));
   })

   app.post('api/saved', (req, res) => {
      savedData.push(req.body);
      fs.writeFile('notes.json', JSON.stringify(savedNotes));
   });
}
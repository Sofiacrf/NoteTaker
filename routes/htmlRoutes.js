// DEPENDENCIES
// Include the path to get the right file path for our HTML
const path = require('path');
const fs = require('fs');


// ROUTING

module.exports = (app) => {
    //Handle HTML GET Requests
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/index', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}
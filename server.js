// Require dependencies 
const express = require('express');


// EXPRESS CONFIGURATION
// Create an express server
const app = express()

// Sets the port 
const PORT = process.env.PORT || 8080; 

// Sets up the Express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// ROUTES
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//LISTENER
// To start the port
app.listen(PORT, () => {
    console.log(`App listening: http://localhost:${PORT}`);
});

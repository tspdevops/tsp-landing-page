const express = require('express');
const path = require('path');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
//Middleware
app.use(express.static(path.join(__dirname, 'build')))
//Routes
app.get('/', (req, res) => {
  
    res.sendFile(path.join(__dirname, 'build/index.html'));
});





app.listen(PORT, HOST);

//Extra
console.log(`Running on http://${HOST}:${PORT}`);

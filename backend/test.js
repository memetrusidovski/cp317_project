const express = require('express');
const app = express();
const PORT = 3000;
const places = require('./get.js');

app.get('/', (req, res) => {
    res.send('Hello Group!');
});

app.listen(PORT, () => 
    console.log(`Server listening on port: ${PORT}`)
);
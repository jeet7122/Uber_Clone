const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = app;
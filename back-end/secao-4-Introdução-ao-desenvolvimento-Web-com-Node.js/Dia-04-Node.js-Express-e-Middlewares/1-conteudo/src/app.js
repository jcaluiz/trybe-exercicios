const express = require('express');

const app = express();

app.use(express.json());

let nextId = 3;



module.exports = app;
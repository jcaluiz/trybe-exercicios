const express = require('express');
const activities = require('./data/activities');

const app = express();

app.use(express.json());

// ROTAS

app.get('/activities', (_req, res) => {
    res.status(200).json(activities);
});

app.get('/activities/:id', (req, res) => {
    const { id } = req.paaarams
})

app.post('/activities', (req, res) => {
    const activity = req.body;
    activities.push(activity);
    res.status(200).json(activities);
});

module.exports = app;
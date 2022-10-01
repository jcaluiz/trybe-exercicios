const express = require('express');

const activities = require('./data/activities');

const app = express();

app.use(express.json());

// ROTAS

app.get('/myActivities/:id', (req, res) => {
    const idParam = req.params.id;
    const activity = activities.find(({ id }) => id === Number(idParam));
    res.status(200).json(activity);
});

app.get('/myActivities', (_req, res) => {
    res.status(200).json(activities);
});

app.get('/:filter/myActivities', (req, res) => {
    const statusFilter = req.params.filter;
    const activity = activities.find(({ status }) => (statusFilter === 'a-fazer' 
    ? statusFilter.replace(/-/, ' ') : statusFilter.replace(/f/, 'F') === status));
    res.status(200).json(activity);
});

app.get('/search/:q/myActivities', (req, res) => {
    const searchParam = req.params.q;
    const activity = activities
    .filter(({ id, description, status }) => id === Number(searchParam) || description
    .includes(searchParam) || status.includes(searchParam));
    res.status(200).json(activity);
});

module.exports = app;

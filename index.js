const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

app.get('/', (req, res)) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visit is '+ visits);
        client.set('visits', parseInt(visits) + 1);
    });
};
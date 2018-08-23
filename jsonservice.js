// const external = require('./testmodule');
// const http = require('http');
const json = require('./getjson');

const express = require('express');
const mongo = require('./mongo-handler')

const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.status(200);
    res.send('home page');
    res.end();
});

app.get('/api', (req, res) => {
    res.status(200);
    res.send(json.file);
});

app.get('/api/games', (req, res) => {
    res.status(200);
    res.send('games here!')
    res.end();
});

app.listen(port, () =>{
    console.log(`Express listening on port 3000!`)
});
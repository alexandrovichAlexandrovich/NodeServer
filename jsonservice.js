const http = require('http');
const express = require('express');
const external = require('./testmodule');
const jsonGetter = require('./getjson');

var app = express();

const port = 3000;


app.get('/', function (req, res) {
    res.send(jsonGetter.get());
})

app.listen(port, () =>{
    console.log(`Express listening on port 3000!`)
});
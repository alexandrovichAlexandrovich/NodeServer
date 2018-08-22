const http = require('http');
const express = require('express');
const external = require('./testmodule');

// var app = express();
//
// const hostname = '127.0.0.1';
// const port = 5000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'application/json')
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World \n');
// });
//
// server.listen(port, hostname, () =>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
//
// app.get('/', function (req, res) {
//     res.send('Hello from EXP! '+external.getData());
//     // res.send('Hello from EXP! ');
// })
//
// app.listen(3000, () =>{
//     console.log(`Express listening on port 3000!`)
// });

doSteps(' MEEP');

function Point(i, j){
    this.x = i;
    this.y = j;

    this.px = x * 50;
    this.py = y * 50;
    var c = 0;
}

const pt = new Point(2,3);

console.log(pt.px+','+pt.py);

function doSteps(str){
    startSteps(str)
        .then(step1)
        .then(step2)
        .catch(function (error) {
            console.log('error!!! '+error);
        });
}

function startSteps(str) {
    console.log('starting process');
    return new Promise(function (resolve, reject) {
        resolve(str);
    });
}

function step1(str) {
    return new Promise(function(resolve, reject){
        console.log("Step 1 start"+str);
        var x = 3;
        var does = setInterval(function () {
            if(x == 0){
                clearInterval(this);
                finalizeStep1();
                resolve(str);
            }else{
                console.log(x+' steps left');
                x--;
            }
        }, 1000);
    })
}

function finalizeStep1() {
    console.log("Step 1 Done.")
}

function step2(str) {
    console.log("Step 2 start"+str);

    setTimeout(finalizeStep2, 1000);
}

function finalizeStep2() {
    console.log("Step 2 done!");
}
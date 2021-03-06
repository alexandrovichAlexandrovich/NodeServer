const express = require('express');
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

const port = 3000;

//APP.USE IS ORDERED

app.use(bodyParser.json());

app.use(cors());




// initialize routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.status(200);
    res.send('home page');
    res.end();
});

app.listen(port, () =>{
    console.log(`Express listening on port 3000!`)
});
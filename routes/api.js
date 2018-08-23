const express = require('express');
const router = express.Router();

const mongo = require('../mongo-handler.js');

// home page
router.get('/', (req, res) => {
    res.send('API home page');
});


// get a list of games
router.get('/games/all', (req, res) => {
    mongo.getAllGames(res);
});

// get a single game by its id (123-789-1)
router.get('/games', (req, res) => {
    console.log(req.param('id'));
    mongo.getGameById(req.param('id'), res);
});

// add a new game
router.post('/games', (req, res) => {
    console.log(req.body);
    mongo.postGame(req.body);
    res.send({
        type:'POST'
    });
});

// update a game state
// id is parameter: gameid
router.put('/games/:id', (req, res) => {
    res.send({
        type: 'PUT'
    });
});

// delete a game state
// id is parameter: gameid
router.delete('/games/:id', (req, res) => {
    res.send({
        type: 'DELETE'
    });
});

module.exports = router;

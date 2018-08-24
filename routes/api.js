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
    console.log(req.param('GameId'));
    mongo.getGameById(req.param('id'), res);
});

// add a new game
router.post('/games', (req, res) => {
    mongo.postGame(req.body, res);
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

router.post('/teams', (req, res) => {
    mongo.postTeam(req.body, res);
    // res.send('posted team.');
});

router.get('/teams/all', (req, res) => {
    // console.log(req.param('id'));
    mongo.getAllTeams(res);
});

router.get('/teams', (req, res) => {
    // console.log(req.param('id'));
        const gameID = req.param('GameId');
        const playerID = req.param('PlayerId');
        mongo.getTeam(gameID, playerID, res);
});

// queries
router.patch('/teams/move', (req, res) => {
    const gameID = req.query['GameId'];
    const playerID = req.query['PlayerId'];
    const unitID = req.query['UnitId']
    const target= req.query['Position'].split(',');
    mongo.moveUnit(gameID, playerID, unitID, target);
    res.send('moved.');
});


// Equip -> Use Item[] -> Move -> Act;
router.post('/teams/act', (req, res) => {
    const gameID = req.query['GameId'];
    const playerID = req.query['PlayerId'];
    const unitID = req.query['UnitId']
    const target= req.query['Position'].split(',');
    const equip = req.query['Equip'];
    const item = req.query['Items'].split(',');
    const action = req.query['Action'].split(',');
    const turn = req.query['Turn'];
    writeToMongo(gameID, playerID, turn, [unitID, equip, item, target, action]);
});

router.patch('/teams/battle', (req, res) => {
    const gameID = req.query['GameId'];
    const player1 = res.query['Player1'];
    const player2 = res.query['Player2'];
    const unit1 = res.query['Player1'];
    const unit2 = res.query['Player2'];
    mongo.updatePlayer(gameID, player1, unit1, res);
    mongo.updatePlayer(gameID, player2, unit2, res);
})

//


// Moves
function writeToMongo(gameId, PlayerId, turn, actions) {

}

module.exports = router;

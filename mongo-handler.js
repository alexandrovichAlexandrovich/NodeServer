const mongo = require('mongodb');

const url = "mongodb://localhost:27017/";

const jsonDB = 'jsonTest';

const games = "Games";
const teams = "Teams";


// ******* Get and post GAMES *******

exports.postGame = (json, res) => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(jsonDB);
        dbo.collection(games).insertOne(json, (err) =>{
            if (err) res.send(err['errmsg']);
            else res.send('successful post');
        });
    });
};


exports.getAllGames = res => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(jsonDB);
        dbo.collection(games)
            .find()
            .toArray((err, data) =>{
                  res.send(data);
              });
    });
}

exports.getGameById = (id, res) => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(jsonDB);
        dbo.collection("Games")
            .find({'GameID':id})
            .toArray((err, data) =>{
                if (err) throw err;
                  res.send(data[0]);
              });
    });
}

// exports.moveUnit = (move) => {
//     mongo.connect(url, (err, db) => {
//         if (err) throw err;
//
//         var id = move['id'];
//         var player = move['player']
//         var unit = move['unit'];
//         var to = move['to'];
//
//         var games = db.db(jsonDB).collection("Games");
//         var query = {
//             "GameID": id,
//             "Unit"
//         };
//         games.find(query).toArray((err, data) =>{
//             console.log(data)
//         });
//     });
// };

// ******* Get and post TEAMS *******

exports.getTeam = (gameID, playerID, res) => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db(jsonDB);
        const query = {
            'GameId':gameID,
            'PlayerId':playerID
        };
        dbo.collection(teams)
            .find(query)
            .toArray((err, data) =>{
                if(err) throw err;
                res.send(data);
            });
    });
};


exports.getAllTeams = res => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(jsonDB);
        dbo.collection(teams)
            .find()
            .toArray((err, data) =>{
                res.send(data[0]);
            });
    });
}


exports.postTeam = (json, res) => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(jsonDB);
        dbo.collection(teams).insertOne(json, err =>{
            if (err) res.send(err['errmsg']);
            else res.send('successful post');
        });
    });
};


exports.moveUnit = (gameID, playerID, unitID, target) => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        const query = {
            'GameId': gameID,
            'PlayerId': playerID,
            'Units.UnitId': unitID
        };
        const dbo = db.db(jsonDB);
        dbo.collection(teams).updateOne(
            query,
            {$set: {'Units.$.Position': target} }
        );
    });
};

exports.updatePlayer = (gameID, playerID, unitID, res) => {
    res.send('player updated');
    // mongo.connect(url, (err, db) => {
    //     if (err) throw err;
    //     const query = {
    //         'GameId': gameID,
    //         'PlayerId': playerID,
    //         'Units.UnitId': unitID
    //     };
    //     const dbo = db.db(jsonDB);
    //     dbo.collection(teams).updateOne(
    //         query,
    //         {$set: {'Units.$.Position': target} }
    //     );
    // });
}
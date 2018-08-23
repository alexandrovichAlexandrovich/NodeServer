const mongo = require('mongodb');

var url = "mongodb://localhost:27017/";

var jsonDB = 'jsonTest';
var collection = "Games";


exports.postGame = json => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(jsonDB);
        var games = dbo.collection("Games");
        games.insertOne(json);
    });
};

exports.getAllGames = res => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(jsonDB);
        var games = dbo.collection("Games");
        games.find().toArray((err, data) =>{
            res.send(data);
        });
    });
}

exports.getGameById = (id, res) => {
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db(jsonDB);
        var games = dbo.collection("Games");
        games.find({'GameID':id}).toArray((err, data) =>{
            res.send(data);
        });
    });
}

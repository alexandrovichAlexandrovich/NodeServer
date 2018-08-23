exports.file = {
    'A':'a',
    'B':['b','c','d'],
    'C':{
        'a':'1',
        'b':'2'
    }
};

var mongodb = require("mongodb");
var mongo = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";
var jsonDB = 'jsonTest';
var collection = "Games";


var res;
var db;
exports.get = function(r){
    res = r;
    mongo.connect(url, pull);
}

function pull(err, d){
    if(err) throw err;
    db = d;
    var dbo = db.db(jsonDB);
    var games = dbo.collection("Games");
    games.findOne({}, getAndSend);
}

function getAndSend(err, data){
    if(err) throw err;
    res.json(data);
    db.close();
}

exports.allFiles = function(){
    mongo.connect(url, function (err, db) {
        if (err) throw err;
        // console.log("connected");
        var dbo = db.db(jsonDB);
        var games = dbo.collection("Games");
        // console.log("games found");
        games.findOne({}, function (err, res) {
            if (err) throw err;
            db.close();
            // data = res;
            return res;
        }).then(res => {
            return res.name;
        });
        console.log(data == null);
        return data;
    })
}


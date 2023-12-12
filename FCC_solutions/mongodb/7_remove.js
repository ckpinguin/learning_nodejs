var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];
var collName = process.argv[3];
var id = process.argv[4];
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var coll = db.collection(collName);
    var search = { _id: id };
    coll.remove(search, function(err, data) {
        if (err) throw err;
    });

    db.close();
});

var mongo = require('mongodb').MongoClient;

var age = parseInt(process.argv[2]);
var collName = 'parrots';
var dbName = 'learnyoumongo';
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var coll = db.collection(collName);
    var search = { age: { $gt: age } };
    coll.count(search, function(err, data) {
        if (err) throw err;
        console.log(data);
    });

    db.close();
});

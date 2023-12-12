var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var coll = db.collection('users');
    var search = { username: 'tinatime' };
    var setAge = { $set: { age: 40 } };
    coll.update(search, setAge, function(err, data) {
        if (err) throw err;
    });

    db.close();
});

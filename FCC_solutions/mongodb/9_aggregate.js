var mongo = require('mongodb').MongoClient;

var size = process.argv[2];
var collName = 'prices';
var dbName = 'learnyoumongo';
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var coll = db.collection(collName);
    var match = { $match: {
        size: size
    }};
    var group = { $group: {
        _id: 'total',
        total: {
            $avg: '$price'
        }
    }};
    var pipeline = [ match, group ];
    coll.aggregate(pipeline).toArray(function (err, results) {
        if (err) throw err;
        //console.log(results);
        if (!results.length) {
            throw new Error('No results found');
        }
        var res = results[0].total;
        console.log(Number(res).toFixed(2));
    });

    db.close();
});

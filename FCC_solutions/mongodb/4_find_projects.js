var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
    if (err) throw err;
    // db gives access to the database
    db.collection('parrots').find({
        age: {
            $gt: parseInt(process.argv[2])
        }},{
            _id: 0,
            name: 1,
            age: 1
        }
    ).toArray(function(err, documents) {
        if (err) throw err;
        console.log(documents);
    });

    db.close();
});

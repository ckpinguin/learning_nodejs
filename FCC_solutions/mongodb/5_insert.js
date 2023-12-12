var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var document = {
    firstName: process.argv[2],
    lastName: process.argv[3]
};
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var coll = db.collection('docs');

    coll.insert(document, function(err, data) {
        if (err) throw err;
        // If successfully inserted we print the document (not the data!)
        console.log(JSON.stringify(document));
    });

    db.close();
});

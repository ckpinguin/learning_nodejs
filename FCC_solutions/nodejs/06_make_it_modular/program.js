const mymodule = require('./mymodule');

const dir = process.argv[2];
const filter = process.argv[3];

mymodule(dir, filter, function(err, res) {
    if (err) throw err;
    for (let item of res) {
        console.log(item);
    }
});

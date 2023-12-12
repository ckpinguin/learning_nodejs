const mymodule = require('./mymodule');

const urls = process.argv.splice(2);
const count = urls.length;
const start = 0;

function readURL(idx) {
    mymodule(urls[idx], function(err, res) {
        if (err) throw err;
        console.log(res);
        if (idx < count)
            readURL(idx+1);
    });
}
readURL(start);

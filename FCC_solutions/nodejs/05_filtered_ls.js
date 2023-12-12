const fs = require('fs');

const dir = process.argv[2];
const filter = process.argv[3];

fs.readdir(dir, function callack(err, list) {
    for (let item of list) {
        if (item.match('.*\.' + filter + '$'))
            console.log(item);
    }
});

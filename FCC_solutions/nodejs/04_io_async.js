const fs = require('fs');
// console.log(process.argv);
const file = process.argv[2];

fs.readFile(file, 'utf8', function callack(err, str) {
    let linecount = -1;
    const lines = str.split('\n');
    for (let line of lines) {
         linecount++;
    }
    console.log(linecount);
});

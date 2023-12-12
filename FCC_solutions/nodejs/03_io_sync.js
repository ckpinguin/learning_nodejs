var fs = require('fs');
// console.log(process.argv);
var file = process.argv[2];

var buffer = fs.readFileSync(file);
var str = buffer.toString();

var lines = str.split('\n');

var linecount = -1; // Cheating ;-)
for (var line of lines) {
    //console.log(line);
    linecount++;
}
console.log(linecount);

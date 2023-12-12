const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const inStream = fs.createReadStream(file);

const server = http.createServer(function (req, res) {
    inStream.pipe(res);
});
server.listen(port);

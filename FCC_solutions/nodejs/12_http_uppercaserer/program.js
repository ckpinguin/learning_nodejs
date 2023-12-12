const http = require('http');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
    req.setEncoding('utf8');
    let chunks = [];
    req.on('error', (err) => {
        throw err;
    });
    req.on('data', chunk => {
        chunks.push(chunk.toString());
        res.write(chunk.toUpperCase());
    });
    req.on('end', () => {
        res.end();
    });
}).listen(port);

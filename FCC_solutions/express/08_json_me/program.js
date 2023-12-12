const express = require('express');
const path = require('path');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const buffer = fs.readFileSync(file);
const str = buffer.toString();

var app = express();

app.get('/books', function(req, res) {
    //res.writeHead(200, { 'Content-Type': 'application/json' });
    res.send(JSON.stringify(JSON.parse(str)));
    res.end();
});

app.listen(port);

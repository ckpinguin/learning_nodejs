const express = require('express');
const path = require('path');

const port = process.argv[2];

var app = express();



app.get('/search', function(req, res) {
    res.send(req.query);
    res.end();
});

app.listen(port);

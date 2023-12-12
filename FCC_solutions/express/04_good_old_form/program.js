const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const port = process.argv[2];

function reverse(str) {
    return (str) ? str.split('').reverse().join('') : null;
}

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    const revStr = reverse(req.body.str);
    res.end(revStr);
});

app.listen(port);

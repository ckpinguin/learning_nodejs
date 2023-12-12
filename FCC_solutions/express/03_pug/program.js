const express = require('express');
const path = require('path');

const port = process.argv[2];
const pubFolder = process.argv[3];

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');
app.get('/home', function(req, res) {
    const date = new Date().toDateString();
    res.render('index', { date: date });
});
app.listen(port);

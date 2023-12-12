const express = require('express');
const path = require('path');

const port = process.argv[2];
const pubDir = process.argv[3];

var app = express();

app.use(require('stylus').middleware(pubDir));
app.use(express.static(pubDir));

app.listen(port);

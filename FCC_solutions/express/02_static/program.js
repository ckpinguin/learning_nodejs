const express = require('express');

const port = process.argv[2];
const pubFolder = process.argv[3];

var app = express();
app.use(express.static(pubFolder));

app.listen(port);

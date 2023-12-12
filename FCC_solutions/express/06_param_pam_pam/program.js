const express = require('express');
const path = require('path');

const port = process.argv[2];
const pubDir = process.argv[3];

var app = express();

function hash(id) {
    return (
        require('crypto')
            .createHash('sha1')
            .update(new Date().toDateString() + id)
            .digest('hex')
    );
}

app.put('/message/:id', function(req, res) {
    res.end(hash(req.params.id));
});

app.listen(port);

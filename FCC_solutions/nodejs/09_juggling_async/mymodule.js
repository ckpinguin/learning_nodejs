const http = require('http');

module.exports = function(url, callback) {
    http.get(url, function(res) {
        res.on('error', function(err) {
            callback(err);
        });
        let chars = [];
        res.on('data', function(data) {
            chars.push(data);
        });
        res.on('end', function(data) {
            callback(null, chars.join('').toString());
        });
    });
};

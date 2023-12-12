const http = require('http');

module.exports = function(url, callback) {
    http.get(url, function(res) {
        res.on('error', (err) => {
            callback(err);
        });
        res.on('data', function(data) {
            callback(null, data.toString());
        });
        res.on('error', function(err) {
            callback(err);
        });

    });
};

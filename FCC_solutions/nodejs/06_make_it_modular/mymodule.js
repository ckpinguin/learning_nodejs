const fs = require('fs');

module.exports = function(dir, filter, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);
        let filteredList = [];
        for (let item of list) {
            if (item.match('.*\.' + filter + '$'))
                filteredList.push(item);
        }
        callback(null, filteredList);
    });
};

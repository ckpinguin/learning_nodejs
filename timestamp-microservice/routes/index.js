var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Timestamp microservice' });
});
router.get('/:unixtimestamp(\\d{1,10})', function(req, res, next) {
    const date = new Date(parseInt(req.params.unixtimestamp + '000'));
    res.send(getTimeObj(date));
});
router.get('/:naturalTime(\\w{3,8}\\W+\\d{1,4},\\W+\\d{1,6})', function(req, res, next) {
    const dateString = req.params.naturalTime;
    res.send(getTimeObj(new Date(dateString)));
});

function getTimeObj(date) {
    if (date) {
        return (
        {
            unix: date.getTime(),
            natural: getNaturalDate(date)
        });
    }
    return ({
        unix: null,
        natural: null
    });
}

function getNaturalDate(date) {
    const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ];
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return month + ' ' + day + ', ' + year;
    //return date.toLocaleString();
}

module.exports = router;

const http = require('http');
const url = require('url');

const port = process.argv[2];

function convertToUnix(inDate) {
    const timestamp = new Date(inDate).getTime();
    return { unixtime: timestamp };
}

function convertToTime(inDate) {
    const date = new Date(inDate);
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return ({
        hour: h,
        minute: m,
        second: s
    });
}

const server = http.createServer(function (req, res) {
    if (req.method === 'GET' && /api\/parsetime\?iso=/.test(req.url)) {
        const query = url.parse(req.url, true).query;
        let body = '';
        sendBody(convertToTime(query.iso));
    } else if (req.method === 'GET' && /api\/unixtime\?iso=/.test(req.url)) {
        const query = url.parse(req.url, true).query;
        let body = '';
        sendBody(convertToUnix(query.iso));
    } else {
        res.statusCode = 404;
        res.end();
    }

    function sendBody(timeObj) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const body = JSON.stringify(timeObj);
        res.end(body);
    }

}).listen(port);

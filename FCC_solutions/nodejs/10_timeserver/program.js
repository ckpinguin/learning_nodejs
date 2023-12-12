const net = require('net');

const port = process.argv[2];

function zerofill(i) {
    return (i < 10 ? '0' : '') + i;
}

function now() {
    let date = new Date();
    let Y = date.getFullYear();
    let M = zerofill(date.getMonth() +1); // zero based!
    let d = zerofill(date.getDate());
    let h = zerofill(date.getHours());
    let m = zerofill(date.getMinutes());
    let s = zerofill(date.getSeconds());
    return Y + '-' + M + '-' + d + ' ' + h + ':' + m;
}
const server = net.createServer(function (socket) {
    socket.end(now() + '\n');
});
server.listen(port);

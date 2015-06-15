require('babel/register');

var http = require('http');
var app = require('./app');
var server = http.createServer(app);

var port = process.env.PORT || 3002;

console.log('start server on port ' + port);

server.listen(port);

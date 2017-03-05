// 创建 http 服务器
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(1221, '127.0.0.1');

console.log("server started at: 127.0.0.1:1221");
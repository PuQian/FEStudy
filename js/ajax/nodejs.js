var http = require('http');
var url = require('url');
var querystring = require('querystring');
// var app = require('express');

// CORS 方法解决跨域
// var server = http.createServer(function(req, res) {
// 	res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost"});
// 	res.write("Hello World!");
// 	res.end();
// });

var server = http.createServer(function(req, res){
	var arg = url.parse(req.url).query;
	var callback = querystring.parse(arg).callback;

	res.writeHead(200);
	res.write(callback + '({"name":"123"})');  // 写出执行 callback 的 js 函数形式，因为 src 返回的是 js代码
	res.end();
});


server.listen(1234, "127.0.0.1", function(){
	console.log("Server started at port : 1234");
})
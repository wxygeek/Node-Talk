var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

http.createServer(function (req, res) {
  console.log(req.url);
  fs.readFile(path.join(__dirname, req.url), {encoding: 'utf8'}, function (err, data) {
    if(err) {
      res.statusCode = 404;
      return res.end('Not Found');
    };
    res.end(data);
  });
}).listen(8000);

console.log('http server started, listen at port: 8000');
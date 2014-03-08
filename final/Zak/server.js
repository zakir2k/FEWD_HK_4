var http = require("http");
var mongoose = require("mongoose");
var express = require('express');
var less = require('less');

var db = mongoose.connect('mongodb://localhost/test');


var server = http.createServer(function(request, response){

    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("New Server. Hello!");
    response.end();

}).listen(8080);


var parser = new(less.Parser)({
  paths: ['.', './lib'], // Specify search paths for @import directives
  filename: 'css/style.less' // Specify a filename, for better error messages
});

parser.parse('.class { width: (1 + 1) }', function (e, tree) {
  tree.toCSS({
    // Minify CSS output
    compress: true
  });
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connection successful");
});
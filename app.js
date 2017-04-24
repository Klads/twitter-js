var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.use('*', function (req, res, next) {
  console.log(req.method, req.originalUrl);
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('server listening')
})
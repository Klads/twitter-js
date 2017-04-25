
const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const routes = require( './routes' );
const bodyParser = require( 'body-parser' );

const app = express(); // creates an instance of an express application

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('*', function (req, res, next) {
  console.log(req.method, req.originalUrl);
  next();
});

app.use(express.static('public'));

app.use('/', routes);

app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
app.set('view engine', 'html'); // have res.render work with html files

const people = [{name: 'Grace Hopper'}, {name: 'Person'}];

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', {title: 'Hall of Fame', people: people}, function (err, output) {
    //console.log(output);
});

// app.get('/views', function(req, res, next) {
// 	res.render('index.html', {title: 'Hall of Fame', people: people});
// })

// app.get('/stylesheets/style.css', function(req, res, next) {
// 	res.sendFile(__dirname + '/public/stylesheets/style.css')
// 	//console.log(__dirname);
// })

var server = app.listen(3000, () => {
	console.log("Listening on port 3000")
})
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;  
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets, showForm: true, userName: name, } );
});

module.exports = router;
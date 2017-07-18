const express = require('express'),
      app = express();
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
      request = require('request');

let port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {
  searchTerm = req.body.search;
  let url = `http://www.recipepuppy.com/api/?q=${ searchTerm }`;
  let results = [];
  request(url, function(err, response, body) {
    let array = JSON.parse(body);
    results = array.results;
    console.log('The results are:', results);
    res.render('results', {results})
  });
});

app.listen(port, function(req, res) {
  console.log(`Your server is starting on ${ port }`)
})

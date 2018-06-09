var express  = require('express');
var app = express();

var bodyParser = require('body-parser');    

app.use(express.static(__dirname + '/public')); 

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));
// application/json
app.use(bodyParser.json());                                     

app.listen(8080);

// routes
// application 
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); 
});

console.log("Marvin AutoML listening on port 8080");
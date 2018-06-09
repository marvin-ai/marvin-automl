const express  = require('express');
const app = express();

const bodyParser = require('body-parser');    

app.use(express.static(__dirname + '/public')); 

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

// routes
// application 
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html'); 
});

app.listen(8080, () => {
    console.log("Marvin AutoML listening on port 8080");
});
var express = require('express');

var path = require('path');
var jwt = require('jsonwebtoken');
var bodyParser = require("body-parser");
var router = require('./controllers/routes');

var app = express();
//public assets directory
app.use('/client', express.static(path.join(__dirname, '../client')));

// set bodyParser configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../client/views', 'index.html'));
});

//set a port to listen to
var port = process.env.PORT || 8080;

//tune in to that port
app.listen(port, function(){
  console.log('listening on port: ' + port);
});

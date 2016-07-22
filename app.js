var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

app.use(bodyParser());
app.use(methodOverride());
app.use('/public', express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/networking');
 
var Schema = new mongoose.Schema({
	user_name: String,
	user_email: String,
        user_message:String
});
 
var user = mongoose.model('Email', Schema);
 
app.post('/new', function(req, res){
	user.create(req.body, function(err, doc) {
   res.json(doc);
 })
});

app.post('/new', function(req, res){
	new user({
		_id    : req.body.email,
		name: req.body.name				
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.send('I will be in Touch!');
	});
});
 

var path = __dirname + '/views/';

app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000);
  console.log("Live at Port 3000");
});



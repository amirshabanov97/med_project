var express 	 	= require("express");
var http 		 	= require("http");
var bodyParser 	 	= require("body-parser");
var favicon 		= require("serve-favicon");
var lessMiddleware	= require("less-middleware");

var app 			= express();
var server 			= http.createServer(app);

// app.use(favicon(__dirname + "/app/img/icon.png"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(lessMiddleware(__dirname + "/app", { debug : true }));
app.use(express.static(__dirname + "/app"));


app.get("/", function(req, res) {
	return res.sendFile(__dirname + "/app/index.html");
});

app.get("/:page", function(req, res) {
	return res.sendFile(__dirname + "/app/index.html");
});

app.get("/tags", function(req, res) {
	return res.sendFile(__dirname + "/app/tags.html");
});

server.listen(6500, "192.168.1.110",function() {
	console.log("Listnening on " + server.address().port);
	console.log("Showing on " + server.address().address);
});
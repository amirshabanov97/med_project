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

app.get("/api/requests", function(req, res) {
	var records = [
		{
			"id" : "1",
			"type" : "Вызов врача на дом",
			"symptoms" : {
				"symptom_id1" : "Головная боль", 
				"symptom_id2" : " Боль в спине",
				"symptom_id3" : "Боль в шее",
			},
			"doctortype" : "Невролог",
			"time" : "c 17:00 до 21:00",
			"status" : "Не подтверждено",
			"count" : "12"
		},
		{	
			"id" : "2",
			"type" : "Запись на прием",
			"symptoms" : {
				"symptom_id1" : "Боль в животе",
				"symptom_id2" : "Тошнота",
			},
			"doctortype" : "Гинеколог",
			"time" : "c 13:00 до 15:00",
			"status" : "Не подтверждено",
			"count" : "7"
		},
		{	
			"id" : "3",
			"type" : "Процедура на дому",
			"symptoms" : {
				"symptom_id1" : "Внутремышечные уколы",
				"symptom_id2" : "Капельница",
				"symptom_id3" : "Три раза в течении месяца",
			},
			"doctortype" : "Медсестра",
			"time" : "c 9:00 до 10:30",
			"status" : "Не подтверждено",
			"count" : "18"
		}
	]

	return res.send({
		data : records
	});
});

server.listen(6500, "localhost",function() {
	console.log("Listnening on " + server.address().port);
	console.log("Showing on " + server.address().address);
});
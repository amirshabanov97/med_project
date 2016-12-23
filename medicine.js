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

app.get("/request/:id?", function(req, res) {
	return res.sendFile(__dirname + "/app/index.html");
});

app.get("/api/request/:id?", function(req, res) {
	var request_record = 
		{
			"id" : "1",
			"type" : "Вызов врача на дом",
			"symptoms" : {
				"symptom_id1" : "Головная боль", 
				"symptom_id2" : " Боль в спине",
				"symptom_id3" : "Боль в шее",
			},
			"doctortype" : {
				"doctor_type1" : "Невролог",
				"doctor_type2" : "Хирург",
			},
			"time" : {
				"from" :"17:00",
				"to" : "21:00",
			},
			"status" : "Не подтверждено",
			"count" : "12"
		};
	var request_review = [
		{
			"id" : "1",
			"fullname" : "Климов Виталий Арсеньевич",
			"doctortype" : {
				"doctor_type1" : "Врач - терапевт",
				"doctor_type2" : "Хирург"
			},
			"avatar" : "/img/brad.jpg",
			"workplace" : "Клиника 'Авимед'",
			"time" : {
				"from" : "17:00",
				"to"  : "18:00",
			},
			"price" : "2700",
			"rate" : "4",
		},
		{
			"id" : "2",
			"fullname" : "Абаева Жанара Махмудова",
			"doctortype" : {
				"doctor_type1" : "Врач - терапевт",
				"doctor_type2" : "Хирург"
			},
			"avatar" : "/img/scarlet.jpg",
			"workplace" : "Гор. больница №7",
			"time" : {
				"from" : "16:30",
				"to"  : "16:00",
			},
			"price" : "3500",
			"rate" : "4.5",
		},
		{
			"id" : "3",
			"fullname" : "Матаев Санжар Кайратович",
			"doctortype" : {
				"doctor_type1" : "Врач - терапевт",
				"doctor_type2" : "Хирург"
			},
			"avatar" : "/img/cloney.jpg",
			"workplace" : "Поликлиника №1",
			"time" : {
				"from" : "16:30",
				"to"  : "17:30",
			},
			"price" : "3000",
			"rate" : "3.3",
		},
		{
			"id" : "4",
			"fullname" : "Шабанов Амир Кайратович",
			"doctortype" : {
				"doctor_type1" : "Врач - терапевт",
				"doctor_type2" : "Хирург"
			},
			"avatar" : "/img/tatum.jpg",
			"workplace" : "Частная клиника 'Авиценна'",
			"time" : {
				"from" : "16:30",
				"to"  : "17:30",
			},
			"price" : "5000",
			"rate" : "4.3",
		},
		{
			"id" : "5",
			"fullname" : "Амиров Кабдолла Маратович",
			"doctortype" : {
				"doctor_type1" : "Врач - терапевт",
				"doctor_type2" : "Хирург"
			},
			"avatar" : "/img/zac.jpg",
			"workplace" : "Гор больница № 2",
			"time" : {
				"from" : "16:30",
				"to"  : "17:30",
			},
			"price" : "3799",
			"rate" : "3.7",
		},
	];
	return res.send({
		request : request_record,
		reviews : request_review,
	})
});

app.get("/api/requests_list", function(req, res) {

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
			"time" : {
				"from" : "17:00",
				"to" : "21:00",
			},
			"status" : "Не подтверждено",
			"count" : "12",
		},
		{	
			"id" : "2",
			"type" : "Запись на прием",
			"symptoms" : {
				"symptom_id1" : "Боль в животе",
				"symptom_id2" : "Тошнота",
			},
			"doctortype" : "Гинеколог",
			"time" : {
				"from" : "13:00",
				"to" :  "15:00",
			},
			"status" : "Не подтверждено",
			"count" : "7",
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
			"time" : {
				"from" : "9:00",
				"to" : "10:30",
			},
			"status" : "Не подтверждено",
			"count" : "18",
		},
		{
			"id" : "1",
			"type" : "Вызов врача на дом",
			"symptoms" : {
				"symptom_id1" : "Головная боль", 
				"symptom_id2" : " Боль в спине",
				"symptom_id3" : "Боль в шее",
			},
			"doctortype" : "Невролог",
			"time" : {
				"from" : "17:00",
				"to" : "21:00",
			},
			"status" : "Не подтверждено",
			"count" : "12",
		},
		{	
			"id" : "2",
			"type" : "Запись на прием",
			"symptoms" : {
				"symptom_id1" : "Боль в животе",
				"symptom_id2" : "Тошнота",
			},
			"doctortype" : "Гинеколог",
			"time" : {
				"from" : "13:00",
				"to" :  "15:00",
			},
			"status" : "Не подтверждено",
			"count" : "7",
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
			"time" : {
				"from" : "9:00",
				"to" : "10:30",
			},
			"status" : "Не подтверждено",
			"count" : "18",
		}
	]

	return res.send({
		data : records
	});
});

app.delete("/api/request/:id?", function(req, res) {
	return res.send({
		data : req.params.id
	});
});


server.listen(6500, "localhost",function() {
	console.log("Listnening on " + server.address().port);
	console.log("Showing on " + server.address().address);
});
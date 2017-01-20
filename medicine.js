var express 	 	= require("express");
var http 		 	= require("http");
var bodyParser 	 	= require("body-parser");
var favicon 		= require("serve-favicon");
var lessMiddleware	= require("less-middleware");

var app 			= express();
var server 			= http.createServer(app);

var week = 86400000 * 7;

// app.use(favicon(__dirname + "/app/img/icon.png"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(lessMiddleware(__dirname + "/app", { debug : true }));
// app.use(express.static(__dirname + "/app", { maxAge : week }));
app.use(express.static(__dirname + "/app"));


app.get("/", function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/base.html");
});


app.get("/client", function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/client.html");
});
app.get('/client/:page', function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/client.html");
})
app.get("/client/request/:id?", function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/client.html");
});
app.get("/client/profile/:id?", function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/client.html");
})


app.get("/doctor", function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/doctor.html");
});
app.get("/doctor/:page", function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/doctor.html");
});
app.get("/doctor/request/:id?", function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/doctor.html");
});
app.get("/doctor/profile/:id?", function(req, res) {
	res.header({'Cache-Control' : 'no-cache'});
	return res.sendFile(__dirname + "/app/doctor.html");
})


app.get("/api/requests_list", function(req, res) {

	var records = [
		{
			"id" : "1",
			"requesttype" : "doctoroncall",
			"title" : "Вызов врача на дом",
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
			"requesttype" : "doctorhour",
			"title" : "Запись на прием",
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
			"requesttype" : "procedures",
			"title" : "Процедура на дому",
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
			"requesttype" : "doctoroncall",
			"title" : "Вызов врача на дом",
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
			"requesttype" : "doctorhour",
			"title" : "Запись на прием",
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
			"requesttype" : "procedures",
			"title" : "Процедура на дому",
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
app.get("/api/request/:id?", function(req, res) {
	var success_record = {
		"id" : "16",
		"requesttype" : "doctoroncall",
		"title" : "Вызов врача на дом",
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
		"status" : "active",
		"statusTitle" : "Подтверждено",
		"count" : "1"
	};
	var success_review = [{
		"id" : "1",
		"fullname" : "Климов Виталий Арсеньевич",
		"doctortype" : {
			"doctor_type1" : "Врач - терапевт",
			"doctor_type2" : "Хирург"
		},
		"avatar" : "/img/profile_picture1.jpeg",
		"workplace" : "Клиника 'Авимед'",
		"time" : {
			"from" : "17:00",
			"to"  : "18:00",
		},
		"price" : "2700",
		"rate" : "4.0",
	}];
	var request_record =
		{
			"id" : "1",
			"requesttype" : "doctoroncall",
			"title_pain" : "Боль в спине",
			"doctor_types" : {
				"tyep_id1" : "Терапевт",
				"tyep_id2" : "Хирург",
				"tyep_id3" : "Невропотолог",
			},
			"comment" : "У меня недавно были роды и тд...",
			"address":"Ш.Калдаякова 16, блок С",
			"date":"16 декабря",
			"time" : {
				"from" : "17:00",
				"to" : "21:00",
			},
			"status" : "Не подтверждено",
			"count" : "12",
			"budget":{
				"from":"4500",
				"to":"5500"
			}
		};
	var request_review = [
		{
			"id" : "1",
			"fullname" : "Климов Виталий Арсеньевич",
			"doctortype" : {
				"doctor_type1" : "Врач - терапевт",
				"doctor_type2" : "Хирург"
			},
			"avatar" : "/img/profile_picture1.jpeg",
			"workplace" : "Клиника 'Авимед'",
			"time" : {
				"from" : "17:00",
				"to"  : "18:00",
			},
			"price" : "2700",
			"rate" : "4.0",
		},
		{
			"id" : "2",
			"fullname" : "Абаева Жанара Асылхановна",
			"doctortype" : {
				"doctor_type1" : "Врач - терапевт",
				"doctor_type2" : "Хирург"
			},
			"avatar" : "/img/profile_picture3.jpg",
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
			"avatar" : "/img/profile_picture2.jpeg",
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
			"avatar" : "/img/profile_picture5.jpg",
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
			"avatar" : "/img/profile_picture4.jpeg",
			"workplace" : "Гор больница № 2",
			"time" : {
				"from" : "16:30",
				"to"  : "17:30",
			},
			"price" : "3799",
			"rate" : "3.7",
		},
	];
	if (req.params.id==16) {
		return res.send({
			request : success_record,
			reviews : success_review,
		});
	}
	return res.send({
		request : request_record,
		reviews : request_review,
	})
});
app.delete('/api/request/:id?', function(req, res) {
	return res.send({
		data : req.params.id
	});
});
app.get("/api/messages", function(req, res) {
	var messages = [
		{
			"id" : "1",
			"fullname" : "Матаев Санжар Кайратович",
			"avatar" : "/img/profile_picture1.jpeg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "11:12",
		},
		{
			"id" : "2",
			"fullname" : "Билялов Асхат Муратович",
			"avatar" : "/img/profile_picture2.jpeg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "13:12",
		},
		{
			"id" : "3",
			"fullname" : "Амиров Кабдолла Адильханович",
			"avatar" : "/img/profile_picture3.jpg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "16:33",
		},
		{
			"id" : "6",
			"fullname" : "Климов Александр Васильевич",
			"avatar" : "/img/profile_picture4.jpeg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "13:52",
		},
		{
			"id" : "4",
			"fullname" : "Нурсагат Адильхан Маратович",
			"avatar" : "/img/profile_picture5.jpg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "11:12",
		},
		{
			"id" : "5",
			"fullname" : "Шабанов Амир Кайратович",
			"avatar" : "/img/profile_picture3.jpg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "14:44",
		},
		{
			"id" : "7",
			"fullname" : "Дулатов Бауржан Серикович",
			"avatar" : "/img/profile_picture1.jpeg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "11:12",
		},
		{
			"id" : "8",
			"fullname" : "Кайсаров Мерей Садуакасович",
			"avatar" : "/img/profile_picture2.jpeg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "15:32",
		},
		{
			"id" : "9",
			"fullname" : "Петров Димитрий Дмитрвиевич",
			"avatar" : "/img/profile_picture3.jpg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "19:21",
		},
		{
			"id" : "10",
			"fullname" : "Головач Лена Тимуровна",
			"avatar" : "/img/profile_picture2.jpeg",
			"message" : "Добрый вечер Мадина",
			"messagetime" : "17:58",
		},
	]
	return res.send({
		data : messages,
	});
});
app.get("/api/chat", function(req, res) {
	var doctor = {
		"id" : "1",
		"fullname" : "Шабанов Амир Кайратович",
		"doctortype" : {
			"doctor_type1" : "Врач - терапевт",
			"doctor_type2" : "Хирург"
		},
		"avatar" : "/img/brad.jpg",
	}
	var chat = [
		{
			"id" : '1',
			"authortype" : "doctor",
			"message" : "Доброго времени суток Мадина.",
		},
		{
			"id" : '2',
			"authortype" : "client",
			"message" : "Здравствуйте Амир",
		},
		{
			"id" : '3',
			"authortype" : "doctor",
			"message" : "Не могли бы вы подробно описать ваши процедуры ?",
		},
		{
			"id" : '4',
			"authortype" : "client",
			"message" : "Процедуры прописанны для болного человека в возрасте 40 лет. Капельница каждые три дня и уколы один раз в неделю и каждые выходные компрессы.",
		},
		{
			"id" : '5',
			"authortype" : "doctor",
			"message" : "Хорошо, я согласен, когда я могу приступить к работе ?",
		},
		{
			"id" : '6',
			"authortype" : "client",
			"message" : "Начнем пожалуй со следующего понедельника.",
		},
		{
			"id" : '7',
			"authortype" : "client",
			"message" : "Что нибудь еще нужно с моей стороны ?",
		},
		{
			"id" : '8',
			"authortype" : "doctor",
			"message" : "Cписок лекарств пожалуйста",
		},
		{
			"id" : '1',
			"authortype" : "doctor",
			"message" : "Доброго времени суток Мадина.",
		},
		{
			"id" : '2',
			"authortype" : "client",
			"message" : "Здравствуйте Амир",
		},
		{
			"id" : '3',
			"authortype" : "doctor",
			"message" : "Не могли бы вы подробно описать ваши процедуры ?",
		},
		{
			"id" : '4',
			"authortype" : "client",
			"message" : "Процедуры прописанны для болного человека в возрасте 40 лет. Капельница каждые три дня и уколы один раз в неделю и каждые выходные компрессы.",
		},
		{
			"id" : '5',
			"authortype" : "doctor",
			"message" : "Хорошо, я согласен, когда я могу приступить к работе ?",
		},
		{
			"id" : '6',
			"authortype" : "client",
			"message" : "Начнем пожалуй со следующего понедельника.",
		},
		{
			"id" : '7',
			"authortype" : "client",
			"message" : "Что нибудь еще нужно с моей стороны ?",
		},
		{
			"id" : '8',
			"authortype" : "doctor",
			"message" : "Cписок лекарств пожалуйста",
		},
	]

	return res.send({
		doctor : doctor,
		chat : chat,
	})
});
app.get("/api/profile/:id?", function(req, res) {
	var profile = {
		"fullname" : "Шабанов Амир Кайратович",
		"birthdate" : "16.04.1997",
		"avatar" : "/img/profile_picture4.jpeg",
		"telephone" : "+77757722135",
		"address" : {
			"city" : "Павлодар",
			"street" : "Майры",
			"streetnumber" : "49",
			"homenumber" : "205"
		}
	};
	var profile_description = [
		{
			"title" : "Группа крови",
			"description" : {
				"bloodtype1" : "2 положительная",
			}
		},
		{
			"title" : "Аллергия",
			"description" : {
				"allergy1" : "Шерсть",
				"allergy2" : "Цитрус",
				"allergy3" : "Лимонная кислота",
			}
		},
		{
			"title" : "Переломы",
			"description" : {
				"fracture1" : "Левая кисть",
				"fracture2" : "Шестое ребро",
				"fracture3" : "Левая ключица",
			}
		},
		{
			"title" : "Хронические заболевания",
			"description" : {
				"diseases1" : "Сахарный диабет",
				"diseases2" : "Пневмония",
				"diseases3" : "Сердечно-сосудистое заболевание",
			},
		}
	]
	return res.send({
		profile : profile,
		description : profile_description,
	})
});
app.get("/api/calendar", function(req, res) {
	records = [
		{
			"id" : "16",
			"requesttype" : "doctoroncall",
			"title" : "Вызов врача на дом",
			"date" : "05.01.2017",
			"dayofweek" : "Четверг",
			"time" : {
				"from" :"18:00",
				"to" : "19:00",
			},
		},
		{
			"id" : "16",
			"requesttype" : "procedures",
			"title" : "Процедуры на дому",
			"date" : "06.01.2017",
			"dayofweek" : "Пятница",
			"time" : {
				"from" :"19:00",
				"to" : "20:00",
			},
		},
		{
			"id" : "16",
			"requesttype" : "procedures",
			"title" : "Процедуры на дому",
			"date" : "07.01.2017",
			"dayofweek" : "Суббота",
			"time" : {
				"from" :"13:00",
				"to" : "15:00",
			},
		},
		{
			"id" : "16",
			"requesttype" : "doctorhour",
			"title" : "Запись на прием",
			"date" : "09.01.2017",
			"dayofweek" : "Понедельник",
			"time" : {
				"from" :"09:00",
				"to" : "10:00",
			},
		},
	]
	return res.send({
		calendar : records,
	})
});
// This part doctor api ====================== questions for Alisher
app.get("/api/doctor/requests_list", function(req, res) {
	var records = [
		{
			"id" : "1",

			"requesttype" : "doctoroncall",
			"title_pain" : "Боль в спине",
			"doctor_types" : [
				{
					type:"Терапевт"
				},
				{
					type:"Хирург"
				},
				{
					type:"Невропотолог"
				}
			],
			"comment" : "У меня недавно были роды и тд...",
			"address":"Ш.Калдаякова 16, блок С",
			"date":"16 декабря",
			"time" : {
				"from" : "17:00",
				"to" : "21:00",
			},
			"status" : true,
			"count" : "12",
			"budget":{
				"from":"4500",
				"to":"5500"
			}
		},
		{
			"id" : "2",
			"requesttype" : "doctorhour",
			"title_pain" : "Боль в спине",
			"doctor_types" : [
				{
					type:"Терапевт"
				},
				{
					type:"Хирург"
				},
				{
					type:"Невропотолог"
				}
			],
			"comment" : "У меня недавно были роды и тд...",
			"address":"Ш.Калдаякова 16, блок С",
			"date":"16 декабря",
			"time" : {
				"from" : "17:00",
				"to" : "21:00",
			},
			"status" : true,
			"count" : "12",
			"budget":{
				"from":"4500",
				"to":"5500"
			}
		},
		{
			"id" : "3",
			"requesttype" : "procedures",
			"title_pain" : "Боль в спине",
			"doctor_types" : [
				{
					type:"Терапевт"
				},
				{
					type:"Хирург"
				},
				{
					type:"Невропотолог"
				}
			],
			"comment" : "У меня недавно были роды и тд...",
			"address":"Ш.Калдаякова 16, блок С",
			"date":"16 декабря",
			"time" : {
				"from" : "17:00",
				"to" : "21:00",
			},
			"status" : false,
			"count" : "12",
			"budget":{
				"from":"4500",
				"to":"5500"
			}
		}
	]
	return res.send({
		data : records
	});
});

app.get("/api/doctor/request/:id"),function(req,res) {
	var records = [
		{
			"id" : "1",
			"requesttype" : "doctoroncall",
			"title_pain" : "Боль в спине",
			"doctor_types" : [
				{
					type:"Терапевт"
				},
				{
					type:"Хирург"
				},
				{
					type:"Невропотолог"
				}
			],
			"comment" : "У меня недавно были роды и тд...",
			"address":"Ш.Калдаякова 16, блок С",
			"date":"16 декабря",
			"time" : {
				"from" : "17:00",
				"to" : "21:00",
			},
			"status" : true,
			"count" : "12",
			"budget":{
				"from":"4500",
				"to":"5500"
			}
		}
	]
	return res.send({
		data: records
	})
}

app.get("/api/doctor/profile/:id?", function(req, res) {
	var profile = {
		"name" : "Вася",
		"surname":"Пупкин",
		"middlename":"Кэмбербетович",
		"major":"Педиатр",
		"email":"I_LOVE_MORIARTY_@gmail.com",
		"birthdate" : "16.04.1997",
		"avatar" : "/img/profile_picture4.jpeg",
		"work_time":"12", // this section in year
		"telephone" : "+77757722135",
		"address" : {
			"city" : "Павлодар",
			"street" : "Майры",
			"streetnumber" : "49",
			"homenumber" : "205"
		}
	};
	var profile_education = {
		"country":"Германия",
		"city":"Берлин",
		"school":"Germany State Medical University",
		"period":{
			"from":"someyear",
			"to":"2002"
		},
		"category":"Высшая",
		"degree":"Доктор"
	};
	var profile_work_hisctory = [
		{
			"status":true, // значит что он там все еще работает
			"location":"Алматы",
			"work_name":"гор. больница №34 ЧЛХ",
		},
		{
			"status":false,
			"location":"Алматы",
			"work_name":"гор. больница №34 ЧЛХ",
		},
		{
			"status":false,
			"location":"Алматы",
			"work_name":"гор. больница №34 ЧЛХ",
		},
	];
	return res.send({
		profile : profile,
		profile_education : profile_education,
		profile_work_hisctory:profile_work_hisctory,
	})
});


server.listen(7000, 'localhost', function() {
	console.log('Listnening on ' + server.address().port);
	console.log('Showing on ' + server.address().address);
});

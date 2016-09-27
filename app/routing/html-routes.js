var path = require('path');

module.exports = function(app){

	app.get('/survey', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//if no matching route or if they are at home page
	app.use(function(req,res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}
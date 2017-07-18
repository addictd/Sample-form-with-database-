var express = require('express');
var router = express.Router();
var User = require('../models/user');



/* GET users listing. */
router.get('/', function(req, res, next){
	res.render('users', { title: 'Form' });
});


router.post('/', function(req, res, next){


	var firstname = req.body.firstname;
	var lastname = req.body.lastname;

	var newUser = new User({
	   firstName: firstname ,
	   lastName: lastname
	});

	

	User.sync({force: true}).then(() => {
	  // Table created
	  return User.createUser(newUser);
	});

	res.location('/');
	res.redirect('/');
	
});

module.exports = router;

// config/passport.js

/* Load in what we need */
var LocalStrategy = require('passport-local').Strategy;

/* Load the user model */
var mongoose = require('mongoose');
var userSchema = require("../models/user");
//var User = mongoose.model('User', userSchema);
var db = mongoose.createConnection('mongodb://localhost/users');
var User = db.model('User', userSchema);
var patientSchema = require('../models/patient');
var db_patients = mongoose.createConnection('mongodb://localhost/entities');
var Patient = db.model('Patient', patientSchema);

/* Register the new user account */
process.argv.forEach(function(val, index, array) {
	if(index == '3') {
		var newUser = new User();
		
		newUser.local.username = array[2];
		newUser.local.password = newUser.generateHash(array[2]);
		newUser.userType = array[3];
		newUser.save(function(err) {
			if(err)
			throw err;
			else {
				console.log("User " + array[2] + " successfully added");
				process.exit(1);
			}
		});
	}
});

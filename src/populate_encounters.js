// config/passport.js

/* Load the user model */
var mongoose = require('mongoose');
var encounterSchema = require("../models/encounter");
var patientSchema = require("../models/patient");
var doctorSchema = require("../models/doctor");
var oralCancerSchema = require("../models/oral_cancer_assessment");
var tbAssessmentSchema = require("../models/tb_assessment");
var ophthalmologySchema = require("../models/ophthalmology_assessment");
var db = mongoose.createConnection('mongodb://localhost/encounters');
var db_entities = mongoose.createConnection('mongodb://localhost/entities');

/* Create each of the counters that we will be adding to the database */
var Encounter = db.model('Encounter', encounterSchema);
var Patient = db_entities.model('Patient', patientSchema);
var Doctor = db_entities.model('doctor', doctorSchema);
var oralCancerEncounter = db.model('oralCancerEncounter', oralCancerSchema);
var tbAssessmentEncounter = db.model('TB_Assessment', tbAssessmentSchema);
var ophthalmologyEncounter = db.model('ophthalmologyEncounter', ophthalmologySchema);



//for(var i = 1; i < 1000; i++) {
process.argv.forEach(function(val, index, array) {

	if(index == '2') {
		i = val;
		Patient.findOne({patientID: i}, function(err, patient) {
			if(err)
			throw err;
			else {

				/* Create a new encounter list */
				var encounterList = new Encounter();
				encounterList.patientID = i;
				encounterList.username = "Patient" + i.toString();
				encounterList.tb_assessment = [];
				encounterList.oral_cancer_assessment = [];
				encounterList.ophthalmology_assessment = [];

				/* Give the patient the Encounter ID */
				patient._encounterID = encounterList._id;

				/* Add a random number of doctors */
				var docIDs = [];
				var numDocs = Math.floor((Math.random() * 10) + 1);
				for(var n = 0; n < numDocs; n++) {
					var doctorID = Math.floor((Math.random() * 1000) + 1003);
					docIDs.push(doctorID.toString());
					encounterList.doctorID.push(doctorID); //Add to the encounter
				}

				/* Create the new TB Assessment */
				var tbAssessment = new tbAssessmentEncounter();
				tbAssessment.parentID = encounterList._id;	// Initialize Values
				tbAssessment.procedureType = "TB Assessment";
				tbAssessment.username = patient.username;
				tbAssessment.patientID = patient.patientID;
				tbAssessment.doctorID = docIDs[0];
				var day = Math.floor((Math.random() * 30) + 1);
				if(day < 10)
					day = "0" + day.toString();
				else
					day = day.toString();
				var month = "09";
				var year = "2014";
				tbAssessment.date = month + "/" + day + "/" + year;
				var startTime = Math.floor((Math.random() * 23) + 1);
				var endTime = startTime + 1;
				tbAssessment.start_time = startTime;
				tbAssessment.end_time = endTime;
				tbAssessment.encounterLocation = "Houston";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					tbAssessment.cough = "Yes";
				else
					tbAssessment.cough = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					tbAssessment.fever = "Yes";
				else
					tbAssessment.fever = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					tbAssessment.poor_weight_gain = "Yes";
				else
					tbAssessment.poor_weight_gain = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					tbAssessment.night_sweats = "Yes";
				else
					tbAssessment.night_sweats = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					tbAssessment.fatigue = "Yes";
				else
					tbAssessment.fatigue = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					tbAssessment.chest_pain = "Yes";
				else
					tbAssessment.chest_pain = "No";

				tbAssessment.contact = "Yes";
				tbAssessment.afb_results = "Positive";
				tbAssessment.anti_biotics = "No";
				tbAssessment.details_logged = true;

				encounterList.tb_assessment.push(tbAssessment);
			
				/* Create the new Oral Cancer Encounter */
				var oralCancer = new oralCancerEncounter();
				oralCancer.parentID = encounterList._id;	// Initialize Values
				oralCancer.procedureType = "Oral Cancer Assessment";
				oralCancer.username = patient.username;
				oralCancer.patientID = patient.patientID;
				oralCancer.doctorID = docIDs[0];
				var day = Math.floor((Math.random() * 30) + 1);
				if(day < 10)
					day = "0" + day.toString();
				else
					day = day.toString();
				var month = "09";
				var year = "2014";
				oralCancer.date = month + "/" + day + "/" + year;
				var startTime = Math.floor((Math.random() * 23) + 1);
				var endTime = startTime + 1;
				oralCancer.start_time = startTime;
				oralCancer.end_time = endTime;
				oralCancer.encounterLocation = "Houston";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.familyHistory = "Yes";
				else
					oralCancer.familyHistory = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.educationLevel = "Yes";
				else
					oralCancer.educationLevel = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.employed = "Yes";
				else
					oralCancer.employed = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.drinker = "Yes";
				else
					oralCancer.drinker = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.smoker = "Yes";
				else
					oralCancer.smoker = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.tobacco = "Yes";
				else
					oralCancer.tobacco = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.dentist = "Yes";
				else
					oralCancer.dentist = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.brush_teeth = "Yes";
				else
					oralCancer.brush_teeth = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.toothpowder = "Yes";
				else
					oralCancer.toothpowder = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.lesion = "Yes";
				else
					oralCancer.lesion = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.hospital = "Yes";
				else
					oralCancer.hospital = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					oralCancer.high_risk = "Yes";
				else
					oralCancer.high_risk = "No";	

				oralCancer.details_logged = true;
				encounterList.oral_cancer_assessment.push(oralCancer);

				/* Populate the Ophthalmology Details */
				var ophthalmology = new ophthalmologyEncounter();
				ophthalmology.parentID = encounterList._id;	// Initialize Values
				ophthalmology.procedureType = "Ophthalmology Assessment";
				ophthalmology.username = patient.username;
				ophthalmology.patientID = patient.patientID;
				ophthalmology.doctorID = docIDs[0];
				var day = Math.floor((Math.random() * 30) + 1);
				if(day < 10)
					day = "0" + day.toString();
				else
					day = day.toString();
				var month = "09";
				var year = "2014";
				ophthalmology.date = month + "/" + day + "/" + year;
				var startTime = Math.floor((Math.random() * 23) + 1);
				var endTime = startTime + 1;
				ophthalmology.start_time = startTime;
				ophthalmology.end_time = endTime;
				ophthalmology.encounterLocation = "Houston";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.sudden_vision_loss = "Yes";
				else
					ophthalmology.sudden_vision_loss = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.gradual_vision_loss = "Yes";
				else
					oralCancer.gradual_vision_loss = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.pain = "Yes";
				else
					ophthalmology.pain = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.tearing = "Yes";
				else
					ophthalmology.tearing = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.itching = "Yes";
				else
					ophthalmology.itching = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.redness = "Yes";
				else
					ophthalmology.redness = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.discharge = "Yes";
				else
					ophthalmology.discharge = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.double_vision = "Yes";
				else
					ophthalmology.double_vision = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.headache = "Yes";
				else
					ophthalmology.headache = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.glaucoma = "Yes";
				else
					ophthalmology.glaucoma = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.dry_eyes = "Yes";
				else
					ophthalmology.dry_eyes = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.uveitis = "Yes";
				else
					ophthalmology.uveitis = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.allergic_eye_disease = "Yes";
				else
					ophthalmology.allergic_eye_disease = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.vernal_catarrh = "Yes";
				else
					ophthalmology.vernal_catarrh = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.glasses = "Yes";
				else
					ophthalmology.glasses = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.glasses = "Yes";
				else
					ophthalmology.glasses = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.diabetic = "Yes";
				else
					ophthalmology.diabetic = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.hypertensive = "Yes";
				else
					ophthalmology.hypertensive = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.hiv_positive = "Yes";
				else
					ophthalmology.hiv_positive = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.tb_positive = "Yes";
				else
					ophthalmology.tb_positive = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.meningitis_positive = "Yes";
				else
					ophthalmology.meningitis_positive = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.brimondinine = "Yes";
				else
					ophthalmology.brimondinine = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.pilocarpine = "Yes";
				else
					ophthalmology.pilocarpine = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.prednisolone_1per = "Yes";
				else
					ophthalmology.prednisolone_12per = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.flourometholone_neomycin = "Yes";
				else
					ophthalmology.flourometholone_neomycin = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.tetracycline = "Yes";
				else
					ophthalmology.tetracycline = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.chloramphenicol = "Yes";
				else
					ophthalmology.chloramphenicol = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.tears = "Yes";
				else
					ophthalmology.tears = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.antihistamine_drops = "Yes";
				else
					ophthalmology.antihistamine_drops = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.sodium_cromoglycate_drops = "Yes";
				else
					ophthalmology.sodium_cromoglycate_drops = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.cataract = "Yes";
				else
					ophthalmology.cataract = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.pteryglum_excision = "Yes";
				else
					ophthalmology.pteryglum_excision = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.trabeculectumy = "Yes";
				else
					ophthalmology.trabeculectumy = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.cryotherapy = "Yes";
				else
					ophthalmology.cryotherapy = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.conjunctival_tumar_excision = "Yes";
				else
					ophthalmology.conjunctival_tumar_excision = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.pan_retinal_laser_treatment = "Yes";
				else
					ophthalmology.pan_retinal_laser_treatment = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.macular_laser_treatment = "Yes";
				else
					ophthalmology.macular_laser_treatment = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.yag_laser_treatment = "Yes";
				else
					ophthalmology.yag_laser_treatment = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.cornea_transplant = "Yes";
				else
					ophthalmology.cornea_transplant = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.evisceration = "Yes";
				else
					ophthalmology.evisceration = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.enucleation = "Yes";
				else
					ophthalmology.enucleation = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.glaucoma_family = "Yes";
				else
					ophthalmology.glaucoma_family = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.cataract_family = "Yes";
				else
					ophthalmology.cataract_family = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_acuity = "Yes";
				else
					ophthalmology.right_acuity = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_acuity = "Yes";
				else
					ophthalmology.left_acuity = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_acuity_pinhole = "Yes";
				else
					ophthalmology.right_acuity_pinhole = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_acuity_pinhole = "Yes";
				else
					ophthalmology.left_acuity_pinhole = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_ocular_pressure = "Yes";
				else
					ophthalmology.right_ocular_pressure = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_ocular_pressure = "Yes";
				else
					ophthalmology.left_ocular_pressure = "No";

				/* Globe/Orbit Information */
				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_proptosis = "Yes";
				else
					ophthalmology.right_proptosis = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_swelling = "Yes";
				else
					ophthalmology.right_swelling = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_reduced_movement = "Yes";
				else
					ophthalmology.right_reduced_movement = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_squint = "Yes";
				else
					ophthalmology.right_squint = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_retropulsion_resistance = "Yes";
				else
					ophthalmology.right_retropulsion_resistance = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_tumour = "Yes";
				else
					ophthalmology.right_tumour = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_proptosis = "Yes";
				else
					ophthalmology.left_proptosis = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_swelling = "Yes";
				else
					ophthalmology.left_swelling = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_reduced_movement = "Yes";
				else
					ophthalmology.left_reduced_movement = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_squint = "Yes";
				else
					ophthalmology.left_squint = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_retropulsion_resistance = "Yes";
				else
					ophthalmology.left_retropulsion_resistance = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_tumour = "Yes";
				else
					ophthalmology.left_tumour = "No";

				/* Eyelid Information */
				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_trichiasis = "Yes";
				else
					ophthalmology.right_trichiasis = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_everted = "Yes";
				else
					ophthalmology.right_everted = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_close = "Yes";
				else
					ophthalmology.right_close = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_swelling_eyelid = "Yes";
				else
					ophthalmology.right_swelling_eyelid = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_pouting_meibomian = "Yes";
				else
					ophthalmology.right_pouting_meibomian = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_stye = "Yes";
				else
					ophthalmology.right_stye = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_chalazion = "Yes";
				else
					ophthalmology.right_chalazion = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_tumour_eyelid = "Yes";
				else
					ophthalmology.right_tumour_eyelid = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_herpes = "Yes";
				else
					ophthalmology.right_herpes = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_trichiasis = "Yes";
				else
					ophthalmology.left_trichiasis = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_everted = "Yes";
				else
					ophthalmology.left_everted = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_close = "Yes";
				else
					ophthalmology.left_close = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_swelling_eyelid = "Yes";
				else
					ophthalmology.left_swelling_eyelid = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_pouting_meibomian = "Yes";
				else
					ophthalmology.left_pouting_meibomian = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_stye = "Yes";
				else
					ophthalmology.left_stye = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_chalazion = "Yes";
				else
					ophthalmology.left_chalazion = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_tumour_eyelid = "Yes";
				else
					ophthalmology.left_tumour_eyelid = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_herpes = "Yes";
				else
					ophthalmology.left_herpes = "No";

				/* Pupils */
				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_round_reactive = "Yes";
				else
					ophthalmology.right_round_reactive = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_afferent_pupillary = "Yes";
				else
					ophthalmology.right_afferent_pupillary = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_irregular = "Yes";
				else
					ophthalmology.right_irregular = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_small = "Yes";
				else
					ophthalmology.right_small = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_large = "Yes";
				else
					ophthalmology.right_large = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_unreactive = "Yes";
				else
					ophthalmology.right_unreactive = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_posterior_synichia = "Yes";
				else
					ophthalmology.right_posterior_synichia = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_round_reactive = "Yes";
				else
					ophthalmology.left_round_reactive = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_afferent_pupillary = "Yes";
				else
					ophthalmology.left_afferent_pupillary = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_irregular = "Yes";
				else
					ophthalmology.left_irregular = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_small = "Yes";
				else
					ophthalmology.left_small = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_large = "Yes";
				else
					ophthalmology.left_large = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_unreactive = "Yes";
				else
					ophthalmology.left_unreactive = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_posterior_synichia = "Yes";
				else
					ophthalmology.left_posterior_synichia = "No";


				/* Conjunctiva */
				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_hyperaemia = "Yes";
				else
					ophthalmology.right_hyperaemia = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_chemosis = "Yes";
				else
					ophthalmology.right_chemosis = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_discharge = "Yes";
				else
					ophthalmology.right_discharge = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_follicles = "Yes";
				else
					ophthalmology.right_follicles = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_pappillary_reaction = "Yes";
				else
					ophthalmology.right_pappillary_reaction = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_pterygium = "Yes";
				else
					ophthalmology.right_pterygium = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_tumour_conj = "Yes";
				else
					ophthalmology.right_tumour_conj = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_hyperaemia = "Yes";
				else
					ophthalmology.left_hyperaemia = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_chemosis = "Yes";
				else
					ophthalmology.left_chemosis = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_discharge = "Yes";
				else
					ophthalmology.left_discharge = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_follicles = "Yes";
				else
					ophthalmology.left_follicles = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_pappillary_reaction = "Yes";
				else
					ophthalmology.left_pappillary_reaction = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_pterygium = "Yes";
				else
					ophthalmology.left_pterygium = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_tumour_conj = "Yes";
				else
					ophthalmology.left_tumour_conj = "No";


				/* Cornea */
				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_reduced_sensation = "Yes";
				else
					ophthalmology.right_reduced_sensation = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_ulcer = "Yes";
				else
					ophthalmology.right_ulcer = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_scar = "Yes";
				else
					ophthalmology.right_scar = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_erosion = "Yes";
				else
					ophthalmology.right_erosion = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_dry_cornea = "Yes";
				else
					ophthalmology.right_dry_cornea = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_keratopathy = "Yes";
				else
					ophthalmology.right_keratopathy = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.right_oedema = "Yes";
				else
					ophthalmology.right_oedema = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_reduced_sensation = "Yes";
				else
					ophthalmology.left_reduced_sensation = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_ulcer = "Yes";
				else
					ophthalmology.left_ulcer = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_scar = "Yes";
				else
					ophthalmology.left_scar = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_erosion = "Yes";
				else
					ophthalmology.left_erosion = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_dry_cornea = "Yes";
				else
					ophthalmology.left_dry_cornea = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_keratopathy = "Yes";
				else
					ophthalmology.left_keratopathy = "No";

				var temp = Math.floor((Math.random() * 2) + 1);
				if(temp == 1)
					ophthalmology.left_oedema = "Yes";
				else
					ophthalmology.left_oedema = "No";

				ophthalmology.details_logged = true;
				encounterList.ophthalmology_assessment.push(ophthalmology);



				/* Save the encounter */
				encounterList.save(function(err) {
					if(err)
					throw err;
					else {
						/* Save the patient */
						patient.save(function(err) {
							if(err)
							throw err;
							else {
								/* Update and save the doctor */
								Doctor.find({doctorID: {$in: docIDs}}, function(err, doctorList) {
									if(err) {
										throw err;
									}
									else {
										doctorList.patients = [];
										for(var y = 0; y < doctorList.length; y++) {
											doctorList[y].patients.push(i);
											console.log(doctorList[y]);
										}

										doctorList.forEach(function(doctor) {
											doctor.save(function(err) {
												if(err)
												throw err;
												else {
													console.log("Added Doc");
													process.exit(1);
												}
											});
										});
									}
								});
							}
						});
					}
				});
			}
		});
	}
});


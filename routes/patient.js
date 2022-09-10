const express = require('express');
const { getPatients, getNewPatient, addPatient, searchPatient } = require('../controller/patientController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();


router.route('/patients').get(isAuthenticatedUser, getPatients);
router.route("/newPatient").get(isAuthenticatedUser, getNewPatient);
router.route("/newPatient").post(isAuthenticatedUser, addPatient);
router.route('/patient').get(isAuthenticatedUser,searchPatient);
module.exports = router;
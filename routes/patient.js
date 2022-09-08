const express = require('express');
const { getPatients } = require('../controller/patientController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();


router.route('/patients').get(isAuthenticatedUser,getPatients);

module.exports = router;
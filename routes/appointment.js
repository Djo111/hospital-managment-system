const express = require('express');
const router = express.Router();
const{getAppointments , addNewAppointment , deleteAppointment} = require('../controller/appointmentController');
const { isAuthenticatedUser } = require('../middlewares/auth');

router.route('/appointments').get(isAuthenticatedUser,getAppointments);
router.route('/appointments').post(isAuthenticatedUser,addNewAppointment);
router.route('/delete').get(isAuthenticatedUser,deleteAppointment);

module.exports = router;

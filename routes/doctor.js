const express = require('express');
const router = express.Router();
const {isAuthenticatedUser} = require('../middlewares/auth');
const {getDoctors , getNewDoctor , addNewDoctor, deleteDoctor,searchDoctor} = require('../controller/doctorController');

router.route('/doctors').get(isAuthenticatedUser,getDoctors);
router.route('/newDoctor').get(isAuthenticatedUser,getNewDoctor);
router.route('/newDoctor').post(isAuthenticatedUser,addNewDoctor);
router.route('/doctor/delete').get(isAuthenticatedUser,deleteDoctor);
router.route('/doctor').get(isAuthenticatedUser,searchDoctor);

module.exports =  router;

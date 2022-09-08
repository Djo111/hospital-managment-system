const {getEmployees} = require('../controller/employeeController');
const express = require('express');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();

router.route('/employees').get(isAuthenticatedUser,getEmployees);

module.exports = router ;
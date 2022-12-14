const {getEmployees, getNewEmployee, addEmployee, deleteEmployee,searchEmployee} = require('../controller/employeeController');
const express = require('express');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();

router.route('/employees').get(isAuthenticatedUser,getEmployees);
router.route("/newEmployee").get(isAuthenticatedUser, getNewEmployee);
router.route("/newEmployee").post(isAuthenticatedUser, addEmployee);
router.route("/deleteEmployee").post(isAuthenticatedUser, deleteEmployee);
router.route('/employee').get(isAuthenticatedUser,searchEmployee)

module.exports = router ;
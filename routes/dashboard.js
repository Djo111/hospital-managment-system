const {getDashboard} = require('../controller/dashboardController');

const express = require('express');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();

router.route('/').get(isAuthenticatedUser,getDashboard);

module.exports = router;
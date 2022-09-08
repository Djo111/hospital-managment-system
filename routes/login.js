const express = require('express');
const router = express.Router();
const {
    registerUser,login,getLoginPage,logout
} = require('../controller/loginController');


router.route('/register').post(registerUser);
router.route('/login').get(getLoginPage);
router.route('/login').post(login);
router.route('/logout').get(logout);
module.exports = router;
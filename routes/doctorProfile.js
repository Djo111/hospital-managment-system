const express = require("express");
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();

const {getProfile} = require("../controller/doctorProfileController");

router.route("/doctorProfile").get(isAuthenticatedUser, getProfile);

module.exports = router;
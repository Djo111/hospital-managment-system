const express = require("express");
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();

const {getMed, addMedication, addSurgerie, deleteMedication, deleteSurgerie } = require("../controller/medical_historyController");

router.route("/medical_history").get(isAuthenticatedUser ,getMed);
router.route("/medical_history").post(isAuthenticatedUser, addMedication);
router.route("/surgical_procedures").post(isAuthenticatedUser, addSurgerie);
router.route("/deleteMedication").post(isAuthenticatedUser, deleteMedication);
router.route("/deleteSurgerie").post(isAuthenticatedUser, deleteSurgerie);


module.exports = router;
const express = require('express');
const { getAllRooms, updateRoom , addRoom, deleteRoom} = require('../controller/roomController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router(); 
router.route('/rooms').get(isAuthenticatedUser,getAllRooms);
router.route('/update').post(isAuthenticatedUser,updateRoom);

router.route("/rooms").post(isAuthenticatedUser, addRoom);
router.route("/deleteRoom").post(isAuthenticatedUser, deleteRoom);
module.exports =  router;
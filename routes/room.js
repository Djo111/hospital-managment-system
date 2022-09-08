const express = require('express');
const { getAllRooms, updateRoom } = require('../controller/roomController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router(); 
router.route('/rooms').get(isAuthenticatedUser,getAllRooms);
router.route('/update').post(isAuthenticatedUser,updateRoom);


module.exports =  router;
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const mongoose = require('mongoose');
const Doctor = require('../models/doctors');

exports.getProfile = catchAsyncErrors(async(req, res, next)=>{
    const doctorid = req.query.doctorid;
    const query = Doctor.find({_id : doctorid});
    query instanceof mongoose.Query; // true
    const docs = await query;

    res.render("doctorProfile",{doctorsArray : docs});
});
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Doctor = require('../models/doctors');


exports.getDoctors = catchAsyncErrors(async(req,res,next)=>{
    const doctors = await Doctor.find({});
    res.render("doctors",{doctorsArray: doctors});
    next();
})
exports.getNewDoctor = catchAsyncErrors(async(req,res,next)=>{
    res.render("newDoctor");
    next();
})
exports.addNewDoctor = catchAsyncErrors(async(req,res,next)=>{
    const doctor = new Doctor({
        fName : req.body.fName,
        lName: req.body.lName,
        speciality: req.body.speciality,
        dateOfBirth: req.body.dateOfBirth,
        sex: req.body.sex,
        phoneNumber: req.body.phoneNumber,
        salary: req.body.salary
        
    
    });
    await doctor.save();

    res.redirect("/doctors");
    next();
})
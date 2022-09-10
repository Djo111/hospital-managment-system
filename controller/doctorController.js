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
        address : req.body.address,
        speciality: req.body.speciality,
        dateOfBirth: req.body.dateOfBirth,
        sex: req.body.sex,
        phoneNumber: req.body.phoneNumber,
        
        schoolAttended : req.body.schoolAttended,
        degreeHeld: req.body.degreeHeld,
        license : req.body.license,
        previousCompany : req.body.previousCompany,
        previousTitle : req.body.previousTitle,
        internship : req.body.internship

        
    
    });
    await doctor.save();

    res.redirect("/doctors");
    next();
})
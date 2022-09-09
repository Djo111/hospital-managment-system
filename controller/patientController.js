const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Patient = require("../models/patients");



exports.getPatients = catchAsyncErrors(async(req,res,next)=>{
    Patient.find(function(err, patients){
        if (err){
            console.log(err);
        }else {
            
            res.render("patients",{patientsArray: patients});
            
        }
        
        });
});
exports.getNewPatient = catchAsyncErrors(async(req,res, next)=>{
    res.render("newPatient");
});

exports.addPatient = catchAsyncErrors(async(req, res, next)=>{
    const patient = new Patient({
        fName : req.body.fName,
        lName: req.body.lName,
        dateOfBirth: req.body.dateOfBirth,
        patientID : req.body.id,
        medicalRecordID : req.body.mrID ,
        sexe: req.body.sexe,
        phoneNumber: req.body.phoneNumber
    });
    patient.save();

    res.redirect("/patients");
 });
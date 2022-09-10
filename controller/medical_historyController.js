const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const mongoose = require('mongoose');
const Medication = require("../models/medications");
const Surgerie = require("../models/surgeries");

exports.getMed = catchAsyncErrors(async(req, res, next)=>{
    const medid = req.query.medid ; 
    
    const query = Medication.find({medicalRecord: medid});
    query instanceof mongoose.Query; // true
    const docs = await query;
    
    const query1 = Surgerie.find({medicalRecord: medid});
    query1 instanceof mongoose.Query; // true
    const docs1 = await query1;

    
    
    res.render("medical_history",{medArray: docs , surgArray: docs1});
});

exports.addMedication = catchAsyncErrors(async(req, res, next)=>{
    const medication = new Medication({
        medicalRecord: req.body.Mmr,
        medicationName : req.body.medicationName,
        Mphysician : req.body.Mphysician,
        medicationStartDate : req.body.MstartDate,
        medicationEndDate : req.body.MendDate,
        medicationPurpose : req.body.medicationPurpose

    });
    medication.save();
    res.redirect("/medical_history?medid="+req.body.Mmr);
});
exports.addSurgerie = catchAsyncErrors(async(req, res, next)=>{
    const surgerie = new Surgerie({
        medicalRecord: req.body.Mmr,
        procedure : req.body.procedure,
        Sphysician : req.body.Sphysician,
        hospital : req.body.hospital,
        date : req.body.date,
        notes : req.body.notes

    });
    surgerie.save();
    res.redirect("/medical_history");
});

exports.deleteMedication = catchAsyncErrors(async(req, res, next)=>{
    const deletebtn = req.body.mdeleteBtn;
    const medid = req.body.medid;
    console.log(medid);
    Medication.findByIdAndRemove(deletebtn, function(err){
        if(!err){
            console.log("Succecfully deleted medication");
            res.redirect("/medical_history?medid="+medid);
        }
    });
});

exports.deleteSurgerie = catchAsyncErrors(async(req, res, next)=>{
    const deletebtn = req.body.sdeleteBtn;
    const medid = req.body.medid;
    Surgerie.findByIdAndRemove(deletebtn, function(err){
        if(!err){
            console.log("Succecfully deleted surgerie");
            res.redirect("/medical_history?medid="+medid);
        }
    });
});


const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Appointment = require('../models/appointments');

exports.getAppointments = catchAsyncErrors(async(req,res,next)=>{
    const appointments = await Appointment.find({});
    res.render("appointments",{appArray: appointments});
})

exports.addNewAppointment = catchAsyncErrors(async(req,res,next)=>{
    const appointment = new Appointment({
        dateOfAppoitnment : req.body.date,
        timeOfAppoitment : req.body.time,
        patient : req.body.patient,
        diagnostic : req.body.diagnostic,
        doctor : req.body.doctor,
        price : req.body.price
    });
    appointment.save();
    res.redirect("/appointments");
    next();
})
exports.deleteAppointment = catchAsyncErrors(async(req,res,next)=>{
        const deletebtn = req.body.deleteBtn;
        const appointment = await Appointment.findByIdAndRemove(deletebtn);
        res.redirect('/appointments');
        
})
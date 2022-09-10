const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Doctor = require('../models/doctors');
const Patient = require('../models/patients');
const Appointment = require('../models/appointments');


exports.getDashboard = catchAsyncErrors(async(req,res,next)=>{
    const doctors = await Doctor.find({});
    const patients = await Patient.find({});
    const date = new Date(Date.now());
    const appointments = await Appointment.find({dateOfAppointment:{$gte:date}});
    res.render("dashboard",{
        doctors:doctors.length,patients:patients.length,appointments:appointments.length
    });
})

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Doctor = require('../models/doctors');
const Patient = require('../models/patients');
const Appointment = require('../models/appointments');
const Room = require('../models/rooms');


exports.getDashboard = catchAsyncErrors(async(req,res,next)=>{
    const doctors = await Doctor.find({});
    const patients = await Patient.find({});
    const rooms = await Room.find({});
    let availableRooms = 0;
    const totalRooms = rooms.length;
    rooms.forEach(element => {
        if(element.patient=='None' || element.patient==''){
            availableRooms++;
        }
    });
    const date = new Date(Date.now());
    const appointments = await Appointment.find({dateOfAppointment:{$gte:date}});
    res.render("dashboard",{
        doctors:doctors.length,patients:patients.length,appointments:appointments.length,availableRooms:availableRooms,totalRooms:totalRooms
    });
})

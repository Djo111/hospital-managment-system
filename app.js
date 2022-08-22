//jshint esversion:6
		 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine" ,"ejs");

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/Hospital",{useNewUrlParser: true});

const Appointment = require("./models/appointments.js");
const Doctor = require("./models/doctors.js");

//---------------------------------------------------------------------------------

//Dashboard :
app.get("/", function(req, res){
    res.render("dashboard");
});

//---------------------------------------------------------------------------------


//Doctors::

app.get("/doctors", function(req, res){
    Doctor.find(function(err, doctors){
        if (err){
            console.log(err);
        }else {
            //mongoose.connection.close();
            //console.log(doctors); 
            res.render("doctors",{doctorsArray: doctors});
            
        }
        
        });
});

app.get("/newDoctor", function(req, res){
    res.render("newDoctor");
});
app.post("/newDoctor", function(req, res){
    const doctor = new Doctor({
        fName : req.body.fName,
        lName: req.body.lName,
        speciality: req.body.speciality,
        dateOfBirth: req.body.dateOfBirth,
        sex: req.body.sex,
        phoneNumber: req.body.phoneNumber,
        salary: req.body.salary
        
    
    });
    doctor.save();

    res.redirect("/doctors");
});


//---------------------------------------------------------------------------------


//Employees::
app.get("/employees", function(req, res){
    res.render("employees");
});

//---------------------------------------------------------------------------------

//Patients:::
app.get("/patients", function(req, res){
    res.render("patients");
});

//---------------------------------------------------------------------------------


//Appointments
app.get("/appointments", function(req, res){
    Appointment.find(function(err, appointments){
        if (err){
            console.log(err);
        }else {
            
            res.render("appointments",{appArray: appointments});
            
        }
    });
});


app.post("/appointments", function(req, res){
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
});
app.post("/delete", function(req, res){
    const deletebtn = req.body.deleteBtn;
    Appointment.findByIdAndRemove(deletebtn, function(err){
        if(!err){
            console.log("Succecfully deleted appointment");
            res.redirect("/appointments")
        }
    });
});


//---------------------------------------------------------------------------------

//Rooms:::
app.get("/rooms", function(req, res){
    res.render("rooms");
});


//---------------------------------------------------------------------------------


app.listen(3000, function(){
    console.log("server started on port 3000");
});
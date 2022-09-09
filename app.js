//jshint esversion:6
		 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const app = express();

app.set("view engine" ,"ejs");

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/Hospital",{useNewUrlParser: true});

const Appointment = require("./models/appointments.js");
const Doctor = require("./models/doctors.js");
const Room = require("./models/rooms");
dotenv.config({path:'./config/config.env'});
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//---------------------------------------------------------------------------------
const {isAuthenticatedUser} = require('./middlewares/auth');
/*
//Dashboard :
app.get("/",function(req, res,next){
    if(isAuthenticatedUser(req,res,next)){
        res.render("dashboard");
    }else{
        res.redirect('/login');
    }
});


//---------------------------------------------------------------------------------


//Doctors::

app.get("/doctors", function(req, res,next){
    if(isAuthenticatedUser(req,res,next)){
        Doctor.find(function(err, doctors){
            if (err){
                console.log(err);
            }else {
                //mongoose.connection.close();
                //console.log(doctors); 
                res.render("doctors",{doctorsArray: doctors});
                
            }
            
            });
    }else{
        res.redirect('/login');
    }
});

app.get("/newDoctor", function(req, res,next){
   if(isAuthenticatedUser(req,res,next)){
    res.render("newDoctor");
   }else{
       res.redirect('/login')
   }
});
app.post("/newDoctor", function(req, res,next){
    if(isAuthenticatedUser(req,res,next)){
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
    }else{
        res.redirect('/login');
    }
});


//---------------------------------------------------------------------------------


//Employees::
app.get("/employees", function(req, res,next){
    if(isAuthenticatedUser(req,res,next)){
        res.render("employees");
    }else{
        res.redirect('/login');
    }
});

//---------------------------------------------------------------------------------

//Patients:::
app.get("/patients", function(req, res,next){
    if(isAuthenticatedUser(req,res,next)){
        res.render("patients");
    }else{
        res.redirect('/login');
    }
});

//---------------------------------------------------------------------------------


//Appointments
app.get("/appointments", function(req, res,next){
    if(isAuthenticatedUser(req,res,next)){
        Appointment.find(function(err, appointments){
            if (err){
                console.log(err);
            }else {
                
                res.render("appointments",{appArray: appointments});
                
            }
        });
    }else{
        res.redirect('/login');
    }
    
});


app.post("/appointments", function(req, res){
    if(isAuthenticatedUser(req,res,next)){
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
    }else{
        res.redirect('login');
    }
});
app.post("/delete", function(req, res,next){
    if(isAuthenticatedUser(req,res,next)){
        const deletebtn = req.body.deleteBtn;
        Appointment.findByIdAndRemove(deletebtn, function(err){
        if(!err){
            console.log("Succecfully deleted appointment");
            res.redirect("/appointments")
        }
    });
    }else{
        res.redirect('/login');
    }
    
});


//---------------------------------------------------------------------------------

//Rooms:::
app.get("/rooms", function(req, res,next){
    if(isAuthenticatedUser(req,res,next)){
        Room.find(function(err, rooms){
            if (err){
                console.log(err);
            }else {
                
                res.render("rooms",{roomArray: rooms});
                
            }
        });
    }else{
        res.redirect('/login');
    }
    
});
const room = new Room({
    department : "A&E",
    roomNumber : 1,
    roomCategorie : "day room",
    patient : 'djo',
    date : '2010'
});
//room.save();
app.post("/update", function(req, res,next){
    
    if(isAuthenticatedUser(req,res,next)){
        const patientupdatebtn = req.body.patientupdateBtn;
        const dateupdatebtn = req.body.dateupdateBtn;
    if(patientupdatebtn){
        Room.findByIdAndUpdate(patientupdatebtn, { patient : req.body.patient },{ new: true },
                            function (err) {
    if (err){
        console.log(err)
    }
    else{
        
        res.redirect("/rooms");
    }
});}else{
Room.findByIdAndUpdate(dateupdatebtn, { date : req.body.date },{ new: true },
    function (err) {
if (err){
console.log(err)
}
else{

res.redirect("/rooms");
}
});}
    }else{
        res.redirect('/login');
    }
    
});
*/

//---------------------------------------------------------------------------------
const login = require('./routes/login');
const employee= require('./routes/employee');
const doctor = require('./routes/doctor');
const appointment = require('./routes/appointment');
const room = require('./routes/room');
const dashboard = require('./routes/dashboard');
const patient = require('./routes/patient');
const medical_history = require("./routes/medical_history");

app.use('/' ,dashboard);
app.use('/',login);
app.use('/',doctor);
app.use('/',employee);
app.use('/',appointment);
app.use('/',room);
app.use('/',patient);
app.use('/', medical_history);

app.listen(3000, function(){
    console.log("server started on port 3000");
});
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


//Dashboard :
app.get("/", function(req, res){
    res.render("dashboard");
});

//Doctors:::
const doctorSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'Please Enter the doctor First Name '],
        maxlength: [30, 'the doctor name cannot exceed 30 characters']
    },
    lName: {
        type: String,
        required: [true, 'Please Enter the doctor Last Name '],
        maxlength: [30, 'the doctor Last Name cannot exceed 30 characters']
    },
    speciality: {
        type: String,
        requierd: [true, 'Please Enter the doctor Speciality']
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Please Enter the date of Birth']
    },
    sex:{
        type:String,
        enum :{
            values: ["Male","Female"],
            message: "Please the patient's sex"
        }
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please Enter the doctor phone Number']
    },
    avatar: {
            type: String,
            //required: true,
            default: 'https://cdn5.vectorstock.com/i/thumb-large/54/69/male-user-icon-vector-8865469.jpg'
    },
    salary: {
        type: Number,
        required: [true, "Enter the docotor's Salary"]
    }

});

const Doctor = mongoose.model("Doctor", doctorSchema);
// const doctor = new Doctor({
//     fName : "Youssef",
//     lName: "Weslati",
//     speciality: "Neurosurgeon",
//     dateOfBirth: "01/16/2000",
//     sex: "Male",
//     phoneNumber: 245243,
//     salary: 0
    

// });
//doctor.save();





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








//Employees::
app.get("/employees", function(req, res){
    res.render("employees");
});

//Patients:::
app.get("/patients", function(req, res){
    res.render("patients");
});


//Appointments

// const appointmentSchema = new mongoose.Schema({
//     dateOfAppoitnment : {
//         type : Date,
//         required : [true, "please enter the date "]
//     },
//     timeOfAppoitment : {
//         type: String,
//         required: [true, "please enter the time"]
//     },
//     patient : {
//         type : String,
//         required : [true, "please enter the patient"]
//     },
//     diagnostic : {
//         type : String,
//         required : [true, "please enter the patient's diagnostic"]
//     },
//     doctor : {
//         type : String,
//         required : [true, "please enter the doctor"] 
//     },
//     price : {
//         type : Number,
//         required : [true, "please enter the price"]
//     }


// });

// const Appointment = mongoose.model("Appointment", appointmentSchema);





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




//Rooms:::
app.get("/rooms", function(req, res){
    res.render("rooms");
});





app.listen(3000, function(){
    console.log("server started on port 3000");
});
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    dateOfAppoitnment : {
        type : Date,
        required : [true, "please enter the date "]
    },
    timeOfAppoitment : {
        type: String,
        required: [true, "please enter the time"]
    },
    patient : {
        type : String,
        required : [true, "please enter the patient"]
    },
    diagnostic : {
        type : String,
        required : [true, "please enter the patient's diagnostic"]
    },
    doctor : {
        type : String,
        required : [true, "please enter the doctor"] 
    },
    price : {
        type : Number,
        required : [true, "please enter the price"]
    }


});

module.exports = new mongoose.model("Appointment", appointmentSchema);
const mongoose = require("mongoose");

const medicationSchema = new mongoose.Schema({
    medicalRecord: {
        type : Number,
        required : [true]
    },
    medicationName : {
        type : String,
        required : [true],
        maxlength: [30]
    },
    Mphysician : {
        type : String,
        required : [true],
        maxlength: [30]
    },
    medicationStartDate : {
        type : Date,
        required : [true]
    },
    medicationEndDate : {
        type : Date,
        required : [true]
    },
    medicationPurpose : {
        type : String,
        required : [true]
    }
});


module.exports = new mongoose.model("Medication", medicationSchema);

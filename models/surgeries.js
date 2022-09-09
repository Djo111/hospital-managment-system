const mongoose = require("mongoose");

const surgicalProceduresSchema = new mongoose.Schema({
    medicalRecord : {
        type : Number,
        required : [true]
    },
    procedure : {
        type : String,
        required : [true]
    },
    Sphysician : {
        type : String,
        required :[true],
        maxlength :[30]
    },
    hospital : {
        type : String,
        require: [true],
        maxlength : [30]
    },
    date : {
        type : Date,
        required : [true]
    },
    notes : {
        type : String,
        required : [true]
    }
});

module.exports = new mongoose.model("Surgerie", surgicalProceduresSchema);
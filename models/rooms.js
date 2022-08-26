const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    department : {
        type : String,
        required : [true, "please enter the department"]
    },
    roomNumber : {
        type : Number,
        required : [true, "please enter the room's number"] 
    },
    roomCategorie : {
        type : String,
        required : [true, "please enter the room's categorie"]
    },
    patient : {
        type : String,
        default : "None"
    },
    date : {
        type : Date,
    }

});

module.exports = new mongoose.model("Room", roomSchema);
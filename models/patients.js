const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'Please Enter the patient First Name '],
        maxlength: [30, 'the doctor name cannot exceed 30 characters']
    },
    lName: {
        type: String,
        required: [true, 'Please Enter the patient Last Name '],
        maxlength: [30, 'the doctor Last Name cannot exceed 30 characters']
    },
    
    dateOfBirth: {
        type: Date,
        required: [true, 'Please Enter the date of Birth']
    },
    patientID: {
        type: Number,
        required :[true ,'Please enter the patient ID']
    },
    medicalRecordID :{
        type: Number,
        required :[true ,'Please enter the patient medical record ID']
    },
    sexe:{
        type:String,
        enum :{
            values: ["Male","Female"],
            message: "Please the patient's sexe"
        }
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please Enter the patient phone Number']
    }
   
});

module.exports = new mongoose.model("Patient", patientSchema);
const mongoose = require("mongoose");
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
    
    address : {
        type: String,
        required: [true, "Enter the docotor's address"]
    },
    schoolAttended: {
        type: String,
        
    },
    degreeHeld: {
        type: String,
        required: [true, "Enter the docotor's degree held"]
    },
    license : {
        type: String,
        required: [true, "Enter the docotor's license"]
    },
    previousCompany:{
        type: String,
        
    },
    previousTitle:{
        type: String,
   },
   internship: {
    type: String,
}
});

module.exports = new mongoose.model("Doctor", doctorSchema);
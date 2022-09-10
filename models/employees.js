const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'Please Enter the First Name '],
        maxlength: [30, 'the  name cannot exceed 30 characters']
    },
    lName: {
        type: String,
        required: [true, 'Please Enter the Last Name '],
        maxlength: [30, 'the Last Name cannot exceed 30 characters']
    },
    
    dateOfBirth: {
        type: Date,
        required: [true, 'Please Enter the date of Birth']
    },
    speciality: {
        type: String,
        requierd: [true, 'Please Enter the doctor Speciality']
    },
    
    sexe:{
        type:String,
        enum :{
            values: ["Male","Female"],
            message: "Please the  sexe"
        }
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please Enter the  phone Number']
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

module.exports = new mongoose.model("Employee", employeeSchema);
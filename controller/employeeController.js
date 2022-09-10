const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Employee = require("../models/employees");
const APIFeatures = require('../utils/APIFeatures');


exports.getEmployees = catchAsyncErrors(async(req,res,next)=>{
    Employee.find(function(err, employees){
        if (err){
            console.log(err);
        }else {
            
            res.render("employees",{employeesArray: employees});
            
        }
        
        });
});
exports.getNewEmployee = catchAsyncErrors(async(req,res, next)=>{
    res.render("newEmployee");
});
exports.addEmployee = catchAsyncErrors(async(req, res, next)=>{
    const employee = new Employee({
        fName : req.body.fName,
        lName: req.body.lName,
        dateOfBirth: req.body.dateOfBirth,
        speciality : req.body.speciality,
        sexe: req.body.sexe,
        phoneNumber: req.body.phoneNumber,
        salary : req.body.salary
    });
    employee.save();

    res.redirect("/employees");
});

exports.deleteEmployee = catchAsyncErrors(async(req, res, next)=>{
    const dltBtn = req.body.deleteEmpl;
    Employee.findByIdAndRemove(dltBtn, function(err){
        if(!err){
            console.log("Succecfully deleted employee");
            res.redirect("/employees");
        }
    });
})
exports.searchEmployee = catchAsyncErrors(async(req,res,next)=>{
    const apiFeature =  new APIFeatures(Employee,req.query).filter();
    const results = await apiFeature.query;
    res.render('employees',{employeesArray: results});
})
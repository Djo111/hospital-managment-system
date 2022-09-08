const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.getEmployees = catchAsyncErrors(async(req,res,next)=>{
    res.render("employees");
    next();
});


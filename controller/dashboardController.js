const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.getDashboard = catchAsyncErrors(async(req,res,next)=>{
    res.render("dashboard");
})
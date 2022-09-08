const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
module.exports.getPatients = catchAsyncErrors(async(req,res,next)=>{
    res.render('patients');
})
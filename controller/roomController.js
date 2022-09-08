const Room = require('../models/rooms');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
exports.getAllRooms = catchAsyncErrors(async(req,res,next)=>{
    const rooms = await Room.find({});
    res.render("rooms",{roomArray: rooms});
})

exports.updateRoom = catchAsyncErrors(async(req,res,next)=>{
        const patientupdatebtn = req.body.patientupdateBtn;
        const dateupdatebtn = req.body.dateupdateBtn;
        if(patientupdatebtn){
            Room.findByIdAndUpdate(patientupdatebtn, { patient : req.body.patient },{ new: true },
                                function (err) {
        if (err){
            console.log(err)
        }
        else{
            
            res.redirect("/rooms");
        }
        });}else{
        Room.findByIdAndUpdate(dateupdatebtn, { date : req.body.date },{ new: true },
            function (err) {
        if (err){
        console.log(err)
        }else{

        res.redirect("/rooms");
        }
    });}
})

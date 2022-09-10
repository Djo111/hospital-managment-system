const Room = require('../models/rooms');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
exports.getAllRooms = catchAsyncErrors(async(req,res,next)=>{
    const rooms = await Room.find({});
    res.render("rooms",{roomArray: rooms});
})
exports.addRoom = catchAsyncErrors(async(req, res, next)=>{
    const room = new Room({
        department : req.body.department,
        roomNumber : req.body.roomNumber,
        roomCategorie : req.body.roomC,
        patient : req.body.patient,
        date : req.body.date
    });
    room.save();
    res.redirect("/rooms");
    next();
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

exports.deleteRoom = catchAsyncErrors(async(req, res, next)=>{
    const deletebtn = req.body.deleteBtn;
    Room.findByIdAndRemove(deletebtn, function(err){
        if(!err){
            console.log("Succecfully deleted room");
            res.redirect("/rooms");
        }
    });
})
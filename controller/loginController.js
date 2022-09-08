const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const sendToken = require('../utils/jwtToken');
const errorHandler = require('../utils/errorHandler');

exports.getLoginPage = catchAsyncErrors(async(req,res,next)=>{
    res.render('login');
});
//NOTE Register a user => /register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const {
        username,
        password
    } = req.body;
    const user = await User.create(
        req.body
    );
    sendToken(user, 200, res);

});
//NOTE login user => /login
exports.login = catchAsyncErrors(async (req, res, next) => {
    //ANCHOR check if email and password is entered by user 
    if (!req.body.username || !req.body.password) {
        return next(new errorHandler('Please enter email and password', 500));
    }
    //ANCHOR  finding the user in the database 
    const user = await User.findOne({
        username: req.body.username
    }).select('+password');

    if (!user) {
        return next(new errorHandler('Invalid username or password!', 404));
    }
    //ANCHOR check if the password is correct or not
    const isPasswordCorrect = await user.comparePassword(req.body.password);
    if (!isPasswordCorrect) {
        return next(new errorHandler('Incorrect password !', 404));

    }
    sendToken(user, 200, res);
    res.redirect('/');

    


});


//NOTE logout user => /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnlly:true
    })
    res.redirect('/login');
});
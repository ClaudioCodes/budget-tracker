const mongoose = require('mongoose')

//Schema
const userSchema = mongoose.Schema({
    firstName:{
        required: [true, 'First name is required'],
        type: String,
    },
    lastName:{
        required: [true, 'Last name is required'],
        type: String,
    },
    email:{
        required: [true, 'Email is required'],
        type: String,
    },
    password:{
        required: [true, 'Password is required'],
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
},{
    timestamp: true,
 });

 //Compile schema into model

 const User = mongoose.model('User', userSchema);

 module.exports = User;

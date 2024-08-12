const express = require('express');
const dbConnect = require('./config/dbConnect');
const { errorHandler } = require("./middlewares/errorMiddleware");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require('./routes/users/usersRoute');

const app = express();

//dbConnect
dbConnect();

//middlewares
app.use(express.json())

//routes
app.use('/', userRoute)  

//Error
app.use(errorHandler)


module.exports = app;
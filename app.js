
// const hbs           = require('hbs');
// const express       = require('express');
// const mongoose      = require('mongoose');
// const path          = require('path');
// const chalk         = require('chalk');
// const bcrypt        = require('bcrypt');
// const bodyParser    = require("body-parser");
// const dotenv        = require("dotenv");
// const session       = require('express-session');
// const axios         = require('axios');
// const MongoStore    = require('connect-mongo')(session)



// //CONSTANTS----------------------------------------
// const app = express();

// //MODELS-------------------------------------------
// // const Cocktail = require ('./models/Cocktail');
// const User = require('./models/User.model')
// const Cocktail = require('./models/Cocktail.model')

// //CONFIGURATION------------------------------------
// //.ENV
// require('dotenv').config();

// //.DOTENV
// require('dotenv').config();

// const PORT = process.env.PORT || 3000;

// const url = "mongodb+srv://sara-prueba:1234@cluster0.jwvcc.mongodb.net/sara-prueba?retryWrites=true&w=majority";


// //MONGOOSE
// mongoose.connect(`mongodb://localhost/${process.env.DATABASE}`, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// })
// .then((result)=>{
//     console.log(chalk.cyan(`Connected to Mongo! Database used: ${result.connections[0].name}`));
// })
// .catch((error)=>{
//     console.log(chalk.red(`There has been an error: ${error}`));
// });



// //LISTENER-----------------------------------------------
// app.listen(process.env.PORT, ()=>{
//     console.log(chalk.green.inverse.bold(`Conectado al puerto ${process.env.PORT}`));
// });
const dotenvFlow = require("dotenv-flow");
dotenvFlow.config();
const express = require("express");
const cookieParser = require("cookie-parser");


const app = express();



// middleware setup

app.use(express.json({limit: "1MB"}));

app.use(express.urlendoced({extended: true, 
     limit: "1MB"
}))
app.use(cookieParser());



// here global error handler 




module.exports = app; 




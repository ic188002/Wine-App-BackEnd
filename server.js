// Require Express
const express = require('express');

// Require and Initialze dotenv
require('dotenv').config();

const expressLayouts = require('express-ejs-layouts');

// Require Mongoose
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// Port Configuration
const PORT = process.env.PORT;


// Initialze Express
const app = express();

const authRouter =  require('./routes/auth')

// // Mounting routes
app.use('/', authRouter);
app.use('/', authRouter)

app.use(expressLayouts)
app.use(bodyParser.json())
app.set("view engine", "ejs")


app.listen(PORT, () => {
    console.log(`Wine is running on port ${PORT}`);
})


// Database Connection
mongoose.connect(process.env.MongoDBURL,
    {useNewUrlParser: true , useUnifiedTopology: true},
    () => {
        console.log("MongoDB connected!")
    }
);

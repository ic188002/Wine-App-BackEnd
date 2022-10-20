// Require Express
const express = require('express');

// Require and Initialze dotenv
require('dotenv').config();


// Require Mongoose
const mongoose = require('mongoose');

// Port Configuration
const PORT = process.env.PORT;


// Initialze Express
const app = express();






app.listen(PORT, () => {
    console.log(`Wine is running on port ${PORT}`);
})

mongoose.connect(process.env.MongoDBURL,
    {useNewUrlParser: true , useUnifiedTopology: true},
    () => {
        console.log("MongoDB connected!")
    }
);

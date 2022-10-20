// Require Express
const express = require('express');

// Require and Initialze dotenv
require('dotenv').config();

// Require Connect Flash
const flash = require('connect-flash');

// Require Mongoose
const mongoose = require('mongoose');

// Port Configuration
const PORT = 5400;


// Initialze Express
const app = express();



app.listen(PORT, () => {
    console.log(`Wine is running on port ${PORT}`);
})


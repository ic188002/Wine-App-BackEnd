// Require Express
const express = require('express');

// Initialze Express
const app = express();

// Require and Initialze dotenv
require('dotenv').config();

const path = require('path')

app.use(express.static(path.join(__dirname, 'build')));

const expressLayouts = require('express-ejs-layouts');

// Require Mongoose
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// Port Configuration
const PORT = process.env.PORT;




const authRouter =  require('./routes/auth')
const favouriteWineRouter = require('./routes/favouriteWines')
const wineRouter = require('./routes/wine')

// // Mounting routes
app.use('/', authRouter);
app.use('/', favouriteWineRouter);
app.use('/', wineRouter);



app.use(expressLayouts)
// bodyparser used to recognise json 
app.use(bodyParser.json())
app.set("view engine", "ejs")


// app.listen(PORT, () => {
//     console.log(`Wine is running on port ${PORT}`);
// })
//connecting the fron tnad back end
app.get("/*", function (req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Database Connection
mongoose.connect(process.env.MongoDBURL,
    {useNewUrlParser: true , useUnifiedTopology: true},
    () => {
        console.log("MongoDB connected!")
    }
);
//mongodb+srv://ic188002:TheBaron1997@cluster0.uh6s9sb.mongodb.net/WineAppProduction?retryWrites=true&w=majority
const mongoose = require('mongoose');


const winesSchema = mongoose.Schema({
    Wines: [{  
    }]
},
{timestamps: true})


const Wines = mongoose.model("Wines", winesSchema);


module.exports = {Wines};
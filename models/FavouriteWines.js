// Require Mongoose
const mongoose = require('mongoose');

// Schema
const favouriteWinesSchema = mongoose.Schema({
    name: String,
    Description: String,
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    wine: [{ type: mongoose.Schema.Types.ObjectId,
         ref: 'Wines'

    }]

}, 
);

// Model
const FavouriteWines = mongoose.model("FavouriteWines", favouriteWinesSchema);

// Exporting to other files.
module.exports = {FavouriteWines};
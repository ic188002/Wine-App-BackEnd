// Require Mongoose
const mongoose = require('mongoose');

// Schema
const favouriteWineSchema = mongoose.Schema({
    name: String,
    description: String,
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
const FavouriteWine = mongoose.model("FavouriteWine", favouriteWineSchema);

// Exporting to other files.
module.exports = {FavouriteWine};
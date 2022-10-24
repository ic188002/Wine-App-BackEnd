// Require Mongoose
const mongoose = require('mongoose');

// Schema
const favouriteWineSchema = mongoose.Schema({
    name: String,
    description: String,
    wineNights: String,
    user: String,
    wine: [{ type: mongoose.Schema.Types.ObjectId,
         ref: 'Wines'
    }]
    

}, 
);

// Model
const FavouriteWine = mongoose.model("FavouriteWines", favouriteWineSchema);

// Exporting to other files.
module.exports = {FavouriteWine};
// Require Mongoose
const mongoose = require('mongoose');

// Schema
const favouriteWinesSchema = mongoose.Schema({
}, 
);

// Model
const FavouriteWines = mongoose.model("FavouriteWines", favouriteWinesSchema);

// Exporting to other files.
module.exports = {FavouriteWines};
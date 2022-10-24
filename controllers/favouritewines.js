
const {FavouriteWine} = require("../models/FavouriteWine");
const {Wines} = require("../models/Wines");

exports.favouriteWine_create_post = (req, res) => {
    let favouriteWine = new FavouriteWine(req.body);
    console.log(favouriteWine + "This is to check favourite wine on line 7 controllers.")

    favouriteWine.save()
    .then(() => {
        res.json({favouriteWine});
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    })
}

exports.favouriteWine_index_get = (req, res) => {
    FavouriteWine.find()
    .then(favouriteWines => {
        res.json({favouriteWines: favouriteWines})
    })
    .catch(err => {
        console.log(err);
    })
}
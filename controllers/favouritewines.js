
const {FavouriteWine} = require("../models/FavouriteWine");
const {Wines} = require("../models/Wines");
const User = require("../models/User");

exports.favouriteWine_create_post = async (req, res) => {
 try {
    const favouriteWine = new FavouriteWine(req.body);
    // got the user id from the form 
    console.log(favouriteWine.user + "This is to check favourite wine on line 7 controllers.")
    // saved the id 
     await favouriteWine.save();
    //  find the user id through the id favouriteWine.user
     const user = await User.findById({_id:favouriteWine.user})
    //  push the favourite wine the favourite wine to the user list 
     user.favouritewine.push(favouriteWine)
     await user.save();
     console.log(user + "FROM LINE 12")
     res.status(200).json({success: true, favouriteWine: favouriteWine})
    

 }
    catch(err){
        console.log(err);
        res.send("Please try again later");
    }
}

exports.UserfavouriteWine_index_get = (req, res) => {
     User.findById(req.query.id).populate('favouritewine')
    .then(user => {
        // console.log(favouriteWines)
        res.json({user:user})
    })
    .catch(err => {
        console.log(err);
    })
}




// app.post('/addBook', async (req, res)=>{


//     /**
//      * @tutorial: steps
//      * 1. Authenticate publisher and get user _id.
//      * 2. Assign user id from signed in publisher to publisher key.
//      * 3. Call save method on Book.
//     */
 
//     try {
//        //validate data as required
 
//        const book = new Book(req.body);
//        // book.publisher = publisher._id; <=== Assign user id from signed in publisher to publisher key
//        await book.save();
 
//        /**
//         * @tutorial: steps
//         * 1. Find the publishing house by Publisher ID.
//         * 2. Call Push method on publishedBook key of Publisher.
//         * 3. Pass newly created book as value.
//         * 4. Call save method.
//        */
//        const publisher = await Publisher.findById({_id: book.publisher})
//        publisher.publishedBooks.push(book);
//        await publisher.save();
 
//        //return new book object, after saving it to Publisher
//        res.status(200).json({success:true, data: book })
 
//     } catch (err) {
//        res.status(400).json({success: false, message:err.message})
//     }
//  })
 

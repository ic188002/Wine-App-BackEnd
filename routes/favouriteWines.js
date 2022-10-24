const express = require('express');
const methodOverride = require('method-override');
const router = express.Router();
router.use(methodOverride('_method'))
// router.use(express.json());

const favouriteWineCtrl = require('../controllers/favouriteWines');
const isLoggedIn = require('../helper/isLoggedIn');

// Routes
router.post('/favouritewine/add', favouriteWineCtrl.favouriteWine_create_post);
router.get('/favouritewine/index', favouriteWineCtrl.favouriteWine_index_get);

module.exports = router;
const express = require("express");
const router = express.Router();

const productsControllers = require('../controllers/ProductsControllers');


router.get('/',productsControllers.getAllProducts)

module.exports = router;
const express = require("express");
const router = express.Router();

const productsControllers = require('../controllers/ProductsControllers');

router.get('/create',productsControllers.createProduct)
router.get('/:slug',productsControllers.getProductsDetail)
router.get('/',productsControllers.getAllProducts)
router.post('/store',productsControllers.storeProduct)

module.exports = router;
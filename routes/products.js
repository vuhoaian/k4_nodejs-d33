const express = require("express");
const router = express.Router();
const productsControllers = require('../controllers/ProductsControllers');



router.get('/create',productsControllers.createProduct)
router.post('/store',productsControllers.storeProduct)
router.post('/',productsControllers.storeProduct)
router.get('/:id/edit',productsControllers.edit)
router.put('/:id',productsControllers.update)
//router.detele('/:id',productsControllers.destroy)
router.get('/:slug',productsControllers.getProductsDetail)
router.get('/',productsControllers.getAllProducts)
module.exports = router;
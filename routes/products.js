const express = require("express");
const router = express.Router();
const productsControllers = require('../controllers/ProductsControllers');

// get /all json
// get :id
// put slug'
// post /products
// dete :id

router.get('/create',productsControllers.createProduct)
router.post('/store',productsControllers.storeProduct)
router.post('/',productsControllers.storeProduct)
router.get('/:id/edit',productsControllers.edit)
router.put('/:slug',productsControllers.update)
router.delete('/:id',productsControllers.destroy)
router.get('/:id',productsControllers.getProductsDetail)
router.get('/',productsControllers.getAllProducts)
module.exports = router;
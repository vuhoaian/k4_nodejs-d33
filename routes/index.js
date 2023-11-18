const { createProduct } = require('../controllers/ProductsControllers')
const products = require('./products')
function router(app){
    app.use("/products", products)
    
    app.use('/create',createProduct)
}

module.exports = router
const { createProduct } = require('../controllers/ProductsControllers')
const products = require('./products')
const meRouter = require('./me')
function router(app){
    app.use("/products", products)
    app.use("/me", meRouter)
    app.use('/create',createProduct)
}

module.exports = router
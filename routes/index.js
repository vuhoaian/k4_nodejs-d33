const { createProduct } = require('../controllers/ProductsControllers')
const categories = require('./categories')
const products = require('./products')
const meRouter = require('./me')
const userRouter = require('./users')
function router(app){
    app.use("/products", products)
    app.use("/users", userRouter)
    app.use('/categories', categories)
    app.use("/me", meRouter)
    app.use('/create',createProduct)
}

module.exports = router
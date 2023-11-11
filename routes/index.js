const products = require('./products')

function router(app){
    app.use("/products", products)
}

module.exports = router
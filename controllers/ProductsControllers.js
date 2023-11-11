const Product = require('../models/ProductModel');
const { mutipleMongooseToObject, mongooseToObject } = require('../util/mogoose');

class ProductsController {
  // [GET] /products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      // res.json(products);
      res.render('products/list', {
        products: mutipleMongooseToObject(products),
      });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [GET] /products/:id
  async getProductsDetail(req,res){
    const product = await Product.findOne({slug:req.params.slug});
    res.render('products/detail',{
      product: mongooseToObject(product),
    })
  }
  async createProduct(req,res){
    res.render('products/create')
  }
  async storeProduct(req,res){
   try{
    const product = new Product(req.body)
    await product.save()
    res.redirect('/products')
   }catch (error) {
    res.status(400).json({ error: 'ERROR!!!' });
  }
  }
  
}

module.exports = new ProductsController();

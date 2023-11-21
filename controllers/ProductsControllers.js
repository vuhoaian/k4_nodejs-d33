const Product = require('../models/ProductModel');
const { mutipleMongooseToObject, mongooseToObject } = require('../util/mogoose');

class ProductsController {
  // [GET] /products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
       res.json(products);
      // res.render('products/list', {
      //   products: mutipleMongooseToObject(products),
      // });
    } catch (error) {
      res.status(400).json({ error: 'ERROR!!!' });
    }
  }

  // [GET] /products/:id
  async getProductsDetail(req,res){
    const product = await Product.findById(req.params.id);
    res.json(product);
    // res.render('products/detail',{
    //   product: mongooseToObject(product),
    // })
  }
  async createProduct(req,res, next){
    res.render('products/create')
  }

  async storeProduct(req,res){
   try{
    const product = new Product(req.body)
    await product.save()
    res.json({mess:"ok"});
   // res.redirect('/products')
   }catch (error) {
    res.status(400).json({ error: 'ERROR!!!' });
  }
  }
   // [GET] /products/:id/edit
  edit(req,res, next){
    Product.findById(req.params.slug)
       .then(course =>res.render('products/edit',{
        course: mongooseToObject(course)
       }))
       .catch(next);
  }
  // [Put] /products/:id
  update(req, res, next){
      Product.updateOne({ slug:req.params.slug}, req.body)
      res.status(400).json({ message: 'ok!!!' });
      // .then(()=> res.redirect('/me/stored/courses'))
      // .catch(next);
    }
    
  // [Detele] /products/:id
  destroy(req, res, next){
      Product.deleteOne({_id:req.params.id})
      res.status(400).json({ message: 'ok!!!' });
      // .then(() =>res.redirect('back'))
      // .catch(next)
    }
}

module.exports = new ProductsController();

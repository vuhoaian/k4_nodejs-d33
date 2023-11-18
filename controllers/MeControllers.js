const Product = require('../models/ProductModel');
const { mutipleMongooseToObject, mongooseToObject } = require('../util/mogoose');

class MeController {
  // [GET] /me//stored/courses
  storedCourses(req, res, next){
    Product.find({})
    .then(courses =>  res.render('me/stored-courses', {
        courses:mutipleMongooseToObject(courses)
    }))

    .catch(next);
   
  }
}
module.exports = new MeController();
const Cuorse = require('../models/ProductModel')
const{mutipleMongooseToObject} = require('../util/mogoose')

class MeController{
    //get /Me/stored/courses
   storedCourses(req, res){
    res.render('me/stored-cuorses')
   }
}
module.exports = new MeController()
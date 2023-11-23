const User = require("../models/UserModel");
const createUserValidator = require("../validations/user");
const bcryptjs = require("bcryptjs");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../util/mongoose");

class UsersController {
  // [GET] /users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: "ERROR!!!" });
    }
  }
  //[GET]//users/ :id
  async getUsersDetail(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: "ERROR!!!" });
    }
  }
  //post /users
  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      // b1:validate values
      const { error } = createUserValidator.validate(req.body, {
        abortEarly: false, // check hết các lỗi
      });
      if (error) {
        console.log(error.details);
        return res.json({ message: error });
      }

      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({
          message: "Email này đã được đăng ký",
        });
      }
      const hashPassword = await bcryptjs.hash(password, 10);
      await User.create({ username, email, password: hashPassword });
      res.status(200).json({ message: "Add user successfull" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  ///users/login
  async loginUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: "ERROR!!!" });
    }
  }
  async deleteUsers(req, res) {
    try {
      User.deleteOne(req.params.id);
      res.status(200).json({ mess: "ok" });
    } catch (error) {
      res.status(400).json({ error: "ERROR!!!" });
    }
  }
}

module.exports = new UsersController();

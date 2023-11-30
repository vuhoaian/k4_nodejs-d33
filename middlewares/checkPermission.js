const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/UserModel');
const Student = require('../models/StudentModel');

dotenv.config();

const { SECRET_CODE } = process.env;

const checkPermissionUser = async (req, res, next) => {
  try {
    //Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYxYWY5YzFkYTc4Y2ZlMjMxZTk2NTEiLCJpYXQiOjE3MDExNTc4MzIsImV4cCI6MTcwMTI0NDIzMn0.pR0wQTAs6UXntroM4_TCqF7EDI77aOTimdnWa0nPMI0
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(403).json({
        message: 'Bạn chưa đăng nhập!',
      });
    }
    // Bước 2: Verify token
    const decoded = jwt.verify(token, SECRET_CODE);
    console.log(decoded)
    // {_id: userId}

    // Bước 3: Find User từ token
    const user = await User.findById(decoded.id);

    //  Bước 4: Check user.role === 'admin' | 'member'
    if (user.role !== 'admin') {
      return res.status(403).json({
        message: 'Bạn không có quyền làm việc này!',
      });
    }
    next();

  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
};

const checkPermissionStudent = async (req, res, next) => {
  try {
    // Bước 1: Kiểm tra xem đã đăng nhập hay chưa?
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(403).json({
        message: 'Bạn chưa đăng nhập!',
      });
    }
    // Bước 2: Verify token
    const decoded = jwt.verify(token, SECRET_CODE);

    if (!decoded) {
      throw new Error('Token Error!');
    }
    // Bước 3: Find User từ token
    const student = await Student.findById(decoded.id);
    // console.log(student)
    if (!student) {
      return res.status(404).json({
        message: 'Student không tồn tại trong hệ thống!',
      });
    }
    res.locals.id = student._id
    next();
  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
};

module.exports = { checkPermissionStudent, checkPermissionUser };

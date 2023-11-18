const express = require("express");
const router = express.Router();

const meControllers = require('../controllers/MeControllers');

router.get('/stored/courses',meControllers.storedCourses)

module.exports = router;
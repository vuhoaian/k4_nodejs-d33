const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsesrControllers')

router.get('/:id', usersController.getUsersDetail)
router.get('/', usersController.getAllUsers)
router.post('/login', usersController.loginUser)
router.post('/', usersController.createUser)
router.delete('/:id', usersController.deleteUsers)

module.exports = router;
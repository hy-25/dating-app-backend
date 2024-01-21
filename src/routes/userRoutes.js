const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()
router.use(express.json())
// router.route('/').post(userController.addUser).get(userController.getUsers)
router.route('/signup').post(userController.addUser)

// router.route('/login').post(userController.addUser).get(userController.getUsers)
router
  .route('/:id')
  .get(userController.getUserById)
  .delete(userController.deleteUser)
  .patch(userController.updateUser)
module.exports = router

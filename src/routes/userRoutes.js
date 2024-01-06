const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()
router.use(express.json())
router.route('/').post(userController.addUser).get(userController.getUsers)
// .delete(userController.deleteUser)
// .patch(userController.updateUser)
router
  .route('/:id')
  .get(userController.getUserById)
  .delete(userController.deleteUser)
  .patch(userController.updateUser)
module.exports = router

const express = require('express')
// const userController = require('../controller/userController')
const router = express.Router()
// const authController = require('../controller/authController')
router.use(express.json())
router
  .route('/')
  .post((_, res) => {
    console.log('Hi')
    res.json({
      response: 'user is added!',
    })
  })
  .get((_, res) => {
    console.log('Hi')
    res.json({
      response: 'this is the user!',
    })
  })
  .delete((_, res) => {
    res.json({
      response: 'user is deleted!',
    })
  })

module.exports = router

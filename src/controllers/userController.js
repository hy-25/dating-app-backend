const User = require('../models/userModel')
const { wrapWithTryCache } = require('../utils/controllerHelper')
async function addUser(req, res, next) {
  const body = req.body
  console.log(body)
  // Transform it later
  const data = await User.create(body)
  console.log(data)
  res.status(200).json({
    data: data,
  })
}

function deleteUser(req, res) {
  const params = req.params
  res.status(200).json({
    message: 'User is deleted from the table',
  })
}

function updateUser(req, res) {
  const params = req.params
  res.status(200).json({
    message: 'User is updatd to the table',
  })
}

async function getUsers(req, res) {
  const data = await User.find({})
  res.status(200).json({
    data: data,
  })
}

function getUserById(req, res) {
  const params = req.params
  res.status(200).json({
    message: 'this is the user',
  })
}

module.exports = {
  addUser: wrapWithTryCache(addUser),
  deleteUser,
  updateUser,
  getUsers: wrapWithTryCache(getUsers),
  getUserById,
}

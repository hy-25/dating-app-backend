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

async function deleteUser(req, res) {
  const params = req.params
  const data = await User.deleteOne({
    _id: params.id,
  })
  res.status(200).json({
    message: 'User is deleted from the table',
    data: data,
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

async function getUserById(req, res) {
  const params = req.params
  const id = params.id

  const data = await User.find({
    _id: id,
  })
  res.status(200).json({
    data: data,
  })
}

module.exports = {
  addUser: wrapWithTryCache(addUser),
  deleteUser: wrapWithTryCache(deleteUser),
  updateUser,
  getUsers: wrapWithTryCache(getUsers),
  getUserById: wrapWithTryCache(getUserById),
}

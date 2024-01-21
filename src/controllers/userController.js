const User = require('../models/userModel')
const { wrapWithTryCache } = require('../utils/controllerHelper')
async function addUser(req, res, next) {
  const {
    username,
    firstname,
    lastname,
    email,
    password,
    gender,
    birthdate,
    location,
  } = req.body

  // Transform it later
  const data = await User.create({
    username,
    firstname,
    lastname,
    email,
    password,
    gender,
    birthdate,
    location,
  })

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

async function updateUser(req, res) {
  const { username, firstname, lastname, email, gender, birthdate, location } =
    req.body

  console.log('asdsd')
  const params = req.params

  const data = await User.findByIdAndUpdate(
    params.id,
    { username, firstname, lastname, email, gender, birthdate, location },
    {
      new: true,
    },
  )

  console.log(data)

  res.status(200).json({
    message: 'User is updatd to the table',
    data: data,
  })
}

async function getUsers(req, res) {
  const data = await User.find({}).select('-password')
  res.status(200).json({
    data: data,
  })
}

async function getUserById(req, res) {
  const params = req.params
  const id = params.id

  const data = await User.find({
    _id: id,
  }).select('-password')
  res.status(200).json({
    data: data,
  })
}

module.exports = {
  addUser: wrapWithTryCache(addUser),
  deleteUser: wrapWithTryCache(deleteUser),
  updateUser: wrapWithTryCache(updateUser),
  getUsers: wrapWithTryCache(getUsers),
  getUserById: wrapWithTryCache(getUserById),
}

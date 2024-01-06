function addUser(req, res) {
  res.status(200).json({
    message: 'User is added to table',
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

function getUsers(req, res) {
  res.status(200).json({
    message: 'these are the users',
  })
}

function getUserById(req, res) {
  const params = req.params
  res.status(200).json({
    message: 'this is the user',
  })
}

module.exports = {
  addUser,
  deleteUser,
  updateUser,
  getUsers,
  getUserById,
}

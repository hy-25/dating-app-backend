const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please tell us your username!'],
  },
  firstname: {
    type: String,
    required: [true, 'Please tell us your first name!'],
  },
  lastname: {
    type: String,
    required: [true, 'Please tell us your last name!'],
  },
  email: {
    type: String,
    required: [true, 'Please tell us your email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Not a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please tell us your password!'],
    minlength: 8,
  },
  gender: {
    type: String,
    required: [true, 'Please tell us your gender'],
  },
  birthdate: {
    type: String,
    required: [true, 'Please tell us your birthdate'],
  },
  location: {
    type: {
      latitude: {
        type: Number,
        required: [true, 'Please tell us your latitude'],
      },
      longitude: {
        type: Number,
        required: [true, 'Please tell us your longitude'],
      },
      required: [true, 'Please tell us your location'],
    },
  },
})

UserSchema.pre('save', async function (next) {
  this._id = this.email
  const newPass = await bcrypt.hash(this.password, 12)
  this.password = newPass
  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User

/*
    Library Initialisations
*/
const mongoose = require('mongoose')
require('dotenv').config()

const express = require('express')

/*
    Constants & Env Variables
*/
const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD

//Database initialization
const finalUrl = DATABASE_URL.replace('<PASSWORD>', DATABASE_PASSWORD)
console.log(finalUrl)
mongoose.connect(finalUrl, {}).then(con => {
  console.log('Connections successful!')
})
console.log(finalUrl)

//App initialization
const app = express()

//Routers
app.route('/*').get((req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'We are listing to you!',
  })
}) //TODO: REMOVE IT LATER

//Port initialization
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})

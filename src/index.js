const express = require('express')
const route = require('./routes/routes.js')
const { default: mongoose } = require('mongoose')
const app = express()
const multer = require("multer")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(multer().any())


mongoose.connect("mongodb+srv://AbiM-DB:BGucCQmqenRiwUXT@cluster0.w5bka.mongodb.net/productsManagement", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port: ' + (process.env.PORT || 3000))
}) 
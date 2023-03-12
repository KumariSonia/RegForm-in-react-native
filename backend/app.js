const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/myreactnative'
const userRouter = require('./routes/users')

const app = express()
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log("database connected...")
})

app.use(express.json());

app.listen(8080, () => {
    console.log("server started..")
})

app.use('/users', userRouter)
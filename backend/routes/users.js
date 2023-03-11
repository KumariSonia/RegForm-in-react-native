const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    }
    catch (err) {
        res.send("Error " + err)
    }
})

router.post('/', async (req, res) => {
    const user = new User(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            gender: req.body.gender,
            password: req.body.password,

            education: req.body.education,
            yearOfPassing: req.body.yearOfPassing,
            grade: req.body.grade,
            experience: req.body.experience,
            designation: req.body.designation,
            domain: req.body.domain,

            address: req.body.address,
            landmark: req.body.landmark,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode

        }
    )
    try {
        const savedUser = await user.save()
        res.json(savedUser)
    }
    catch (err) {
        res.send("Error " + err)
    }
})


module.exports = router
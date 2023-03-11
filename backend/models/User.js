const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    yearOfPassing: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    domain: {
        type: String
    },
    address: {
        type: String
    },
    landmark: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pincode: {
        type: Number
    },
})

module.exports = mongoose.model('User', userSchema)
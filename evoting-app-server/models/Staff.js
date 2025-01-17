const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    role: {type: String, required: true},
    name: { type: String, required: true},
    age: { type: String, required: true},
    email: {type: String, required: false},
    contactNumber: {type: String, required: false},
    address: {type: String, required: false},
})

module.exports = mongoose.model('Staff', staffSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    email: {
        type: String,
    },
    jobtitle: {
        type: String,
    },
    gender:{
        type: String,
    },
}, {timestamps: true }
);

//Model
const User = mongoose.model('uziuser', userSchema);

module.exports = User;
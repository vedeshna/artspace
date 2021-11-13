const { Schema, model } = require('mongoose');
const userSchema = new Schema({  //defining the email. pw and username 
    email: String,
    username: String,
    password: String
}, {
    timestamps: true
});

module.exports = model('User', userSchema, 'users');
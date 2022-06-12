const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    clientId: String,
    fName: String,
    accountNumber:Number,
    phoneNumber: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

const OperationsSchema = mongoose.Schema({
    account: Number,
    type: String,
    amount: Number,
    payements: Number,
    interest:Number,
    OperationDate: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('Operation', OperationsSchema);
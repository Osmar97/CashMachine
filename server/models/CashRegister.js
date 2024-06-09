const mongoose = require('mongoose')

const CashRegisterSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    denomination: { type: String, required: true },
    quantity: { type: Number, required: true },
})

module.exports = mongoose.model('CashRegister', CashRegisterSchema);
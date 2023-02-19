const mongoose = require("mongoose");

const SpendingSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true,'An item is required!'],
    },
    quantity: {
        type: Number,
        required: [true, 'How many items did you bought?'],
        min: [1]
    },
    location: {
        type: String,
        required: [true, 'Where did you bought the item from?']
    },
    date: {
        type: String,
        required: [true, 'Date is required!']
    },
    price: {
        type: Number,
        required: [true, 'How much was the item?'],
        min: [1]
    }
},{timestamps: true});

module.exports = mongoose.model('Spending', SpendingSchema);
const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantitySold: Number,
    totalAmount: Number,
    saleDate:{
        type: Date,
        default: Date.now
    }
});

const Sale = mongoose.model('Sale', salesSchema);
module.exports = Sale;
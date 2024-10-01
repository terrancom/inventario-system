const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    costPrice: Number,
    salePrice: Number,
    totalQuantity: Number,
    availableQuantity: Number,
    totalSales: {
        type: Number,
        default: 0
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
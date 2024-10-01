const Product = require('../models/Product');

exports.getInventory = async (req, res) => {
    try {
        const products = await Product.find().sort({ created_at: -1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addProduct = async (req, res) => {
    const { name, costPrice, salePrice, totalQuantity } = req.body;
    const product = new Product({ 
        name, 
        costPrice, 
        salePrice, 
        totalQuantity, 
        availableQuantity: totalQuantity 
    });
    await products.save();
    res.redirect('/inventory');
};

exports.updateProduct = async (req, res) => {
    const { name, costPrice, salePrice, totalQuantity } = req.body;
    await Product.findByIdAndUpdate(req.params.id,{
        name,
        costPrice,
        salePrice,
        totalQuantity,
        availableQuantity: totalQuantity
    });
    res.redirect('/inventory');
};

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/inventory');
};
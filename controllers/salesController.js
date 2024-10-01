const Sale = require ('../model/Sale');
const Product = require ('../model/Product');

exports.getSales = async(req, res) => {
    const sales = await Sale.find().populate('product');
    res.render('admin/salesReport', { sales});
};

exports.addSale = async(req, res) => {
    const { productId, quantitySold } = req.body;
    const product = await Product.findById(productId);

    if (!product || product.availableQuantity < quantitySold) {
        return res.status(400).send('error', 'Producto no disponible');
    }

    const totalAmount = product.salePrice * quantitySold;
    const sale = new Sale({ product: productId, quantitySold, totalAmount });

    product.availableQuantity -= quantitySold;
    product.totalSales += quantitySold;

    await sale.save();
    await product.save();

    res.redirect('/sales');
};

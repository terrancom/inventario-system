const License = require ('../models/license');

exports.getLicenses = async (req, res) => {
    const license = await license.find().populate('assignedTo');
    response.render('admin/manageLicenses', {licenses});
};

exports.createLicense = async (req, res) => {
    const { licenseKey, expirationDate } = req.body;
    const license = new License({ licenseKey, expirationDate});
    await license.save();
    res.redirect('/admin/licenses');
};

exports.assignLicense = async (req, res) => {
    const license = await license.findById(req.params.id);

    if(license.isAactive && !license.assignedTo){
        licence.assignedTo = req,body.userId;
        license.isAactive = false;
        await license.save();
        res.redirect('/admin/licenses');
    }else{
        res.status(400).send('Licencia no valida')
    }
};
const User = require('../models/User');
const License = require('../models/License');

exports.getUsers = async (req, res) => {
    const user = await User.find().populate('license');
    res.render('admin/manageUsers', { users });
};

exports.createUser = async (req, res) => {
    const {
        username, 
        password,
        role
    } = req.body;

    const user = new User({ 
        username,
        password,
        role 
    });

    await user.save();
    res.redirect('/users');
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/users');
};

exports.assignLicense = async (req, res) => {
    const user = await User.findById(req.params.userId);
    const license = await License.findByIdAndUpdate(req.params.licenseId);

    if(!license || !license.isActive){
        return res.status(400).send('La licencia es invalida o ya esta asignada');
    }

    user.license = license._id;
    license.assignedTo = user._id;
    await user.save();
    await license.save();

    res.redirect('/users')
};
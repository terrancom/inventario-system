const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const user = await User.findOne({
        username
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({
            message: 'Datos incorrectos'
        });
    }

    const token = jwt.sign({
        userId: user._id, 
        role: user.role
    }, process.env.JWT_SECRET); 
    req.session.token = token;

    res.redirect('/dashboard');
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if(err)
            return res.status(500).send('Error al cerrar sesión');
            res.redirect('/auth/login');
    });
};

exports.protect = (req, res, next) =>{
    const token = req.session.token;
    if (!token) {
        return res.redirect('/auth/login');
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.redirect('/auth/login');
    }
};
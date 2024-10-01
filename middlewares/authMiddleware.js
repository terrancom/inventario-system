const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
    const token = req.session.token;

    if(!token) {
        return res.redirect('/auth/login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.redirect('/auth/login');
    }
};
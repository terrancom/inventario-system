const mongoose = require('mongoose');

const licenseSchema = new mongoose.Schema({
    licenseKey: {
        type: String,
        required: true,
        unique: true
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isActive:{
        type: Boolean,
        default: true
    },
    expirationDate: Date
});

const License = mongoose.model.License || mongoose.model('License', licenseSchema);
module.exports = License;
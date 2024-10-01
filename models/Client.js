const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
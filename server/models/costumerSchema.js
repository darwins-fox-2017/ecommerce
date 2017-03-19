var mongoose = require('mongoose');

// MEMBUAT SCHEMA
var costumer = mongoose.Schema({
    dataId: Number,
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: Number
});

var Costumer = mongoose.model('costumer', costumer)
module.exports = Costumer

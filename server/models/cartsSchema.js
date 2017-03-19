let mongoose = require('mongoose')
var Schema = mongoose.Schema

let cart = mongoose.Schema({
    dataId: Number,
    memberId: String,
    total: Number,
    transaction_date: Date,
    itemList: Schema.Types.Mixed
});

var Cart = mongoose.model('cart', cart)
module.exports = Cart

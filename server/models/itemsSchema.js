let mongoose = require('mongoose')

let item = mongoose.Schema({
    dataId: Number,
    image: String,
    itemCode: String,
    name: String,
    description: String,
    price: String,
    stock: Number
});

var Item = mongoose.model('item', item)
module.exports = Item

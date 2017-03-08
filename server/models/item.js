var mongoose = require('mongoose')
var Schema = mongoose.Schema

var itemSchema = new Schema({
  name: String,
  description: String,
  price: String,
  rate: Number,
  image: String,
  review: []
},{
  timestamps:true
})

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;

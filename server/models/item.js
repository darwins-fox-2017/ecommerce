'use strict'

const mongoose = require('mongoose')

var itemSchema = mongoose.Schema({
  itemCode: String,
  name: String,
  description: String,
  price: Number,
  stock: Number
}, {timestamps: true})

var item = mongoose.model('Item', itemSchema)

module.exports = item

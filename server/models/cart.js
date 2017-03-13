'use strict'

const mongoose = require('mongoose')
var Schema = mongoose.Schema

var cartSchema = mongoose.Schema({
  memberId: String,
  total: Number,
  transaction_date: Date,
  itemlist: Schema.Types.Mixed
}, {timestamps: true})

var cart = mongoose.model('Cart', cartSchema)

module.exports = cart

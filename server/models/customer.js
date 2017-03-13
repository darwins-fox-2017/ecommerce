'use strict'

const mongoose = require('mongoose')

var customerSchema = mongoose.Schema({
  name: String,
  memberId: String,
  address: String,
  zip: String,
  phone: String
}, {timestamps: true})

var customer = mongoose.model('Customer', customerSchema)

module.exports = customer

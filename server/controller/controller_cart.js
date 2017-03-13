'use strict'
var Cart = require('../models/cart.js');

module.exports = {

    getCarts : function(req, res, next) {
      Cart.find({}, function(err, cart){
        if (err) {
          res.send(err)
        } else {
          res.send(cart)
        }
      })
    },

    createCart : function(req, res, next) {
      var newCart = Cart(
        {
          memberId: req.body.memberId,
          total: req.body.total,
          transaction_date: Date.parse(req.body.transaction_date),
          itemlist: req.body.itemlist
        })

      newCart.save(function(err){
        if (err) {
          res.send(err)
        } else {
          res.send(`Cart: ${req.body.memberId} has been created`)
        }
      })
    }
}

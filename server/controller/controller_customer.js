'use strict'
let Customer      = require('../models/customer.js');
let SEED_CUSTOMER = require('../seeders/customer.js')

module.exports = {
    seedCustomer : (req, res, next) => {
      Customer.insertMany(SEED_CUSTOMER).then((data) => {
        res.send(data)
      }).catch((err) => {
        console.log(err);
      })
    },

    getCustomers : (req, res, next) => {
      Customer.find({}, (err, cust) => {
        if (err) {
          res.send(err)
        } else {
          res.send(cust)
        }
      })
    },

    createCustomer : (req, res, next) => {
      var newCustomer = Customer(
        {
          name: req.body.name,
          memberId: req.body.memberId,
          address: req.body.address,
          zip: req.body.zip,
          phone: req.body.phone
        })

      newCustomer.save(function(err){
        if (err) {
          res.send(err)
        } else {
          res.send(`${req.body.name} has been created`)
        }
      })
    },

    updateCustomer : (req, res, next) => {
      Customer.findOneAndUpdate(
        {
          memberId: req.params.memberId
        }, req.body, {new: true}, (err, cust) => {
          if (err) {
            res.send(err)
          } else {
            res.send(cust)
          }
        })
    },

    deleteCustomer : (req, res, next) => {
      Customer.findOneAndRemove(
        {
          memberId: req.params.memberId
        }, function(err) {
          if(err) {
            res.send(err)
          } else {
            res.send(`Customer: ${req.params.memberId} has been removed`)
          }
        })
    }
}

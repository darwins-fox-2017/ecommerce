const express           = require('express');
const router            = express.Router();
let Item                = require('../models/item');
let Customer            = require('../models/customer');
let Cart                = require('../models/cart');
let controllerItems     = require('../controller/controller_item');
let controllerCustomers = require('../controller/controller_customer');

/* GET home page. */
router.get('/items', controllerItems.seedItem);

router.get('/customers', controllerCustomers.seedCustomer);

router.post('/carts', function(req, res, next) {
  var newcart = new Cart(
    {
      memberId: 'CL0003',
      total: 7000000,
      transaction_date: '2016-04-20 14:56:59',
      itemlist: ["58bfa7bcf26d8e2817c0bdb5", "58bfa7bcf26d8e2817c0bdb6"]
    }
  )
  newcart.save()
  res.send('Seed Transaction Success!')
});

module.exports = router;

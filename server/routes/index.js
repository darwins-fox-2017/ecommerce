var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// IMPORTANT
mongoose.connect('mongodb://localhost/shopping-cart');
let Item = require("../models/itemsSchema.js");
let Cart = require("../models/cartsSchema.js");

/* GET home page. */
router.get('/', function (req, res, next) {
    Item.find()
        .then(function (result) {
            console.log(result);
            res.send(result)
        });
});

router.get('/cart', function (req, res, next) {
    Cart.find()
        .then(function (result) {
            console.log(result);
            res.send(result)
        });
});

router.post('/cart', function (req, res, next) {
    Cart.find()
        .then(function (result) {
            let newCart = new Cart({
                dataId: result.length + 1,
                memberId: req.body.memberId,
                total: req.body.total,
                transaction_date: req.body.expired_date,
                itemList: req.body.itemList
            });

            newCart.save(function (err, respond) {
                if (err) return console.error(err);
                res.send(newCart)
            });
        });
});

module.exports = router;

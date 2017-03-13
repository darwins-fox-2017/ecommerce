'use strict'
let Item      = require('../models/item.js');
let SEED_ITEM = require('../seeders/item.js')

module.exports = {
    seedItem : (req, res, next) => {
      Item.insertMany(SEED_ITEM).then((data) => {
        res.send(data)
      }).catch((err) => {
        console.log(err);
      })
    },

    getItems : (req, res, next) => {
      Item.find({}, (err, items) => {
        if (err) {
          res.send(err)
        } else {
          res.send(items)
        }
      })
    },

    createItem : (req, res, next) => {
      var newItem = Item(
        {
          itemCode: req.body.itemCode,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          stock: req.body.stock
        })

      newItem.save(function(err){
        if (err) {
          res.send(err)
        } else {
          res.send(`${req.body.name} has been created`)
        }
      })
    },

    updateItem : (req, res, next) => {
      Item.findOneAndUpdate(
        {
          itemCode: req.params.itemCode
        }, req.body, {new: true}, (err, items) => {
          if (err) {
            res.send(err)
          } else {
            res.send(items)
          }
        })
    },

    deleteItem : (req, res, next) => {
      Item.findOneAndRemove(
        {
          itemCode: req.params.itemCode
        }, function(err) {
          if(err) {
            res.send(err)
          } else {
            res.send(`Item: ${req.params.itemCode} has been removed`)
          }
        })
    }
}

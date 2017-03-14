var Transaction = require('../models/transaction')

module.exports = {
  createTransaction: function(req,res){
    Transaction.create({
      memberid: req.body.id,
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateTransaction: function(req,res){
    Transaction.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteTransaction: function(req,res){
    Transaction.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readTransactions: function(req,res){
    Transaction.find({})
      .populate('itemlist')
      .exec(function(err,data){
        if(err){
          res.send(err)
        }else{
          res.send(data)
        }
      });
  },
  readTransaction: function(req,res){
    Transaction.findOne({_id:req.params.id})
      .populate('itemlist')
      .exec(function(err,data){
        if(err){
          res.send(err)
        }else{
          res.send(data)
        }
      });
  },
  addItemsToCart : function (req, res) {
    Transaction.update(
        {_id: req.params.id},
        {$push: {itemlist:{isbn: req.body.itemid}}},
        {upsert: true}, function(err,data){
          if(err){
            res.send(err)
          }else{
            res.send(data)
          }
        })
    },

  deleteItemsfromCart : function (req, res) {
    Transaction.update(
        {_id: req.params.id},
        {$pull: {itemlist:{isbn: req.body.itemid}}},
        {upsert: true}, function(err,data){
          if(err){
            res.send(err)
          }else{
            res.send(data)
          }
        })
    }
}

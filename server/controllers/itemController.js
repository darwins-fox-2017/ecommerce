var Item = require('../models/book')

module.exports = {
  createItem: function(req,res){
    Item.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      rate: req.body.rate,
      image: req.body.image
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateItem: function(req,res){
    Item.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteItem: function(req,res){
    Item.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readItems: function(req,res){
    Item.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readItem: function(req,res){
    Item.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}

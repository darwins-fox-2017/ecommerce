var Customer = require('../models/customer')
var hash = require('password-hash')

module.exports = {
  createCustomer: function(req,res){
    Customer.create({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone,
      password: hash.generate(req.body.password, 'adadeehhh')
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateCustomer: function(req,res){
    Customer.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteCustomer: function(req,res){
    Customer.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readCustomers: function(req,res){
    Customer.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readCustomer: function(req,res){
    Customer.find({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}

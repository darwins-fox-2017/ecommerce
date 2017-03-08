var express = require('express');
var router = express.Router();
let db = require('../../models')
const crypto = require('crypto');
const shortid = require('shortid');
let faker = require('faker')

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.Item.findAll().then(function(items){
      res.json(items)
    })
});

router.post('/new', function(req, res, next){
  db.Item.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    pictlink: req.body.pictlink
  }).then(result => {
    res.json({
      status: true,
      msg: 'Item inserted'
    })
  })
})

router.get('/generate/:amount', function(req, res, next){
  // console.log(req.body);
  for (var i = 0; i < req.params.amount; i++) {
     db.Item.create({
       name: faker.commerce.productName(),
       price: faker.commerce.price(),
       description: faker.lorem.sentence(),
       pictlink: faker.image.imageUrl()
     })
  }

})

router.get('/edit/:id',function(req, res, next){
  db.Item.findOne({where:{id:req.params.id}})
  .then(function(item){
    res.render('items/edit',{item})
  })
})

router.delete('/:id',function(req, res, next){
   db.Item.destroy({where:{id:req.params.id}})
   .then(function(result){
     if(result){
       res.json({
         status: true,
         msg: 'deleted'
       })
     } else {
       res.json({
         status: false
       })
     }
    //  res.redirect('/items')
   })
})

module.exports = router;

var express             = require('express');
var router              = express.Router();
let controllerItems     = require('../controller/controller_item');
let controllerCustomers = require('../controller/controller_customer');
let controllerCarts     = require('../controller/controller_cart');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Menu URL\nhttp://localhost:3000\n\nFind All Items (GET): /items\n\nCreate Item (POST): /item\n\nUpdate Item (PUT): /item/:itemCode\n\nDelete Item (DELETE): /item/:itemCode\n\nFind All Customers (GET): /customers\n\nCreate Member (POST): /customer\n\nUpdate Member (PUT): /customer/:memberid\n\nDelete Member (DELETE): /customer/:memberid\n\nFind All Cart (GET): /carts\n\nCreate Cart (POST): /cart')
});

router.get('/items', controllerItems.getItems);

router.post('/item', controllerItems.createItem);

router.put('/item/:itemCode', controllerItems.updateItem);

router.delete('/item/:itemCode', controllerItems.deleteItem);

router.get('/customers', controllerCustomers.getCustomers);

router.post('/customer', controllerCustomers.createCustomer);

router.put('/customer/:memberId', controllerCustomers.updateCustomer);

router.delete('/customer/:memberId', controllerCustomers.deleteCustomer);

router.get('/carts', controllerCarts.getCarts);

router.post('/cart', controllerCarts.createCart);

module.exports = router;

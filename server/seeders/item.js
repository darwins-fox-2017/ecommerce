'use strict'
const faker = require('faker');

let itemArray = []
for (let i = 1; i <= 10; i++) {
  itemArray.push({
    'itemCode': 'B-00'+i,
    'name': faker.commerce.productName(),
    'description':faker.commerce.productMaterial(),
    'price': faker.commerce.price(),
    'stock': faker.random.number()
  })
}

module.exports = itemArray

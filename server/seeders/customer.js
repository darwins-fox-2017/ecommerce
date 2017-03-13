'use strict'
const faker = require('faker');

let customerArray = []
for (let i = 1; i <= 10; i++) {
  customerArray.push({
    'name': faker.name.firstName(),
    'memberId': 'CL00'+i,
    'address': faker.address.streetAddress(),
    'zip': faker.address.zipCode(),
    'phone': faker.phone.phoneNumber()
  })
}

module.exports = customerArray

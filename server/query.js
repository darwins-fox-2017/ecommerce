var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/shopping-cart');

let Cart = require("./models/cartsSchema.js");
let Costumer = require("./models/costumerSchema.js");
let Item = require("./models/itemsSchema.js");

// function insertItem() {
//     let item1 = new Item({
//         dataId: 1,
//         image: `http://www.arsitekcenterpoint.com/wp-content/uploads/2017/01/Cara-Membersihkan-Lemari-Es-300x200.jpg`,
//         itemCode: "B-0001",
//         name: "Kulkas LG",
//         description: "Good items",
//         price: 1500000,
//         stock: 3
//     });
//
//     let item2 = new Item({
//         dataId: 2,
//         image: `http://i.ebayimg.com/00/s/MzMzWDUwMA==/z/wwMAAMXQyY1TVigm/$_35.JPG?set_id=2`,
//         itemCode: "B-0002",
//         name: "TV Samsung 42 Inch",
//         description: "Best Seller",
//         price: 3000000,
//         stock: 5
//     });
//
//     item1.save(function (err, res) {
//         if (err) return console.error(err);
//         console.log(`item 1 berhasil dimasukkan`);
//     });
//
//     item2.save(function (err, res) {
//         if (err) return console.error(err);
//         console.log(`item 2 sberhasil dimasukkan`);
//     });
// }
//
// insertItem()

function insertCart() {
    let cart1 = new Cart({
        dataId: 1,
        memberId: "CL0001",
        total: 6000000,
        transaction_date: new Date(),
        itemList: [{
                itemCode: "58bf93d89e2ca16479ba1a5b",
                qty: 2,
                price: 3000000
            },
            {
                itemCode: "58bf93d89e2ca16479ba1a5c",
                qty: 1,
                price: 3000000
            }
        ]
    });

    cart1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`cart 1 berhasil dimasukkan`);
    });
}

insertCart()

// function insertCostumer() {
//     let costumer1 = new Costumer({
//         dataId: 1,
//         name: "Rubi henjaya",
//         memberid: "CL0001",
//         address: "Ujung Berung Bandung",
//         zipcode: "40294",
//         phone: "08112237788"
//     })
//
//     let costumer2 = new Costumer({
//         dataId: 1,
//         name: "Riza Fahmi",
//         memberid: "CL0001",
//         address: "Something in Jakarta",
//         zipcode: "50022",
//         phone: "081122336655"
//     })
//
//     costumer1.save(function (err, res) {
//         if (err) return console.error(err);
//         console.log(`costumer 1 berhasil dimasukkan`);
//     });
//
//     costumer2.save(function (err, res) {
//         if (err) return console.error(err);
//         console.log(`costumer 2 berhasil dimasukkan`);
//     });
// }

// insertCostumer()

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionsSchema = new Schema({
  memberid : { type: Schema.Types.ObjectId, ref: 'Customer' },
  booklist: [{id: {type: Schema.Types.ObjectId, ref: 'Book'}}]
},{
  timestamps:true
})

var Transaction = mongoose.model('Transaction', transactionsSchema);

module.exports = Transaction;

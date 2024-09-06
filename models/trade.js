const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  buyer: String,
  seller: String,
  item: String,
  quantity: Number,
  price: Number,
  status: { type: String, default: 'pending' }, // pending, completed, canceled
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trade', tradeSchema);

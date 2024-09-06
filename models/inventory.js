const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  stationId: String,
  item: String,
  quantity: Number,
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', inventorySchema);

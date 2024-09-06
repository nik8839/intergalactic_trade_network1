const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
  id: String,
  status: { type: String, default: 'in-transit' }, // in-transit, delivered, delayed
  destination: String,
  origin: String,
  content: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cargo', cargoSchema);
const express = require('express');
const Trade = require('../models/Trade');
const router = express.Router();

// Create a new trade
router.post('/', async (req, res) => {
  try {
    const trade = new Trade(req.body);
    await trade.save();
    res.status(201).json(trade);
  } catch (error) {
    res.status(400).json({ error: 'Trade creation failed' });
  }
});

// Get all trades
router.get('/', async (req, res) => {
  try {
    const trades = await Trade.find();
    res.status(200).json(trades);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch trades' });
  }
});

module.exports = router;

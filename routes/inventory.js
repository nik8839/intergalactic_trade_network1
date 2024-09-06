const express = require('express');
const Inventory = require('../models/Inventory');
const router = express.Router();

// Update inventory
router.put('/:stationId', async (req, res) => {
  try {
    const inventory = await Inventory.findOneAndUpdate(
      { stationId: req.params.stationId },
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ error: 'Inventory update failed' });
  }
});

// Get inventory for a station
router.get('/:stationId', async (req, res) => {
  try {
    const inventory = await Inventory.find({ stationId: req.params.stationId });
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch inventory' });
  }
});

module.exports = router;

const express = require('express');
const Cargo = require('../models/Cargo');
const router = express.Router();

// Register a new cargo
router.post('/', async (req, res) => {
  try {
    const cargo = new Cargo(req.body);
    await cargo.save();
    res.status(201).json(cargo);
  } catch (error) {
    res.status(400).json({ error: 'Cargo registration failed' });
  }
});

// Get all cargo records
router.get('/', async (req, res) => {
  try {
    const cargo = await Cargo.find();
    res.status(200).json(cargo);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch cargo records' });
  }
});

module.exports = router;
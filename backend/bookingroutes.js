const express = require('express');
const Booking = require('../models/bookingModel');
const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('doctor');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

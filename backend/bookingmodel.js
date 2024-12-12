const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);

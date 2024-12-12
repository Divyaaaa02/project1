const express = require('express');
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

connectDB();

const app = express();
app.use(express.json());

app.use('/api/doctors', doctorRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

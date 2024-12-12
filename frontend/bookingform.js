import React, { useState, useEffect } from 'react';

const BookingForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    fetch('/api/doctors')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => alert('Booking successful!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.patientName}
        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
        required
      />
      <select
        value={formData.doctor}
        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
        required
      >
        <option value="">Select Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor._id} value={doctor._id}>
            {doctor.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookingForm;

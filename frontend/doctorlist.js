import React, { useEffect, useState } from 'react';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/api/doctors')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="doctor-list">
      <h2>Our Doctors</h2>
      {doctors.map((doctor) => (
        <div key={doctor._id} className="card">
          <h3>{doctor.name}</h3>
          <p>{doctor.specialization}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;

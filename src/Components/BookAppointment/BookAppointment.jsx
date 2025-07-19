import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookAppointment.css"; // (Optional) for custom styles

const BookAppointment = () => {
  const location = useLocation();
  const shirtType = location.state?.shirtType || "Shirt";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleBook = (shirtType) => {
    navigate("/book-appointment", { state: { shirtType } });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to backend if needed
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="book-appointment-wrapper">
        <h2>Appointment Booked!</h2>
        <p>
          Thank you, <b>{form.name}</b>!<br />
          Your appointment for <b>{shirtType}</b> has been booked.<br />
          We will contact you soon at <b>{form.phone}</b>.
        </p>
      </div>
    );
  }

  return (
    <div className="book-appointment-wrapper">
      <h2>Book Appointment for {shirtType}</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10,15}"
            autoComplete="off"
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            rows={3}
          />
        </label>
        <button type="submit" className="submit-btn">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
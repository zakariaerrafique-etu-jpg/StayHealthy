import { useState } from "react";
import "../styles/appointmentForm.css";

function AppointmentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validate = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone Number must contain 10 digits";
    }

    if (!formData.date) {
      validationErrors.date = "Date is required";
    }

    if (!formData.time) {
      validationErrors.time = "Time is required";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (typeof onSubmit === "function") {
      onSubmit(formData);
    }

    alert("Appointment booked successfully!");

    setFormData({
      name: "",
      phone: "",
      date: "",
      time: ""
    });
  };

  return (
    <div className="appointment-form-container">
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <label>Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        {errors.time && <p className="error">{errors.time}</p>}

        <button type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;

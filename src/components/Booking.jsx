import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Standard",
    guests: 1,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required";
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = "Check-out must be after check-in";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Booking data:", formData);
      // You can send formData to a backend here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-[30%] mr-6 mb-4 ml-auto mt-4 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Hotel Booking Form</h2>
      {submitted ? (
        <div className="text-green-600">
          Thank you! Your booking is confirmed.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 rounded"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Check-In Date</label>
            <input
              type="date"
              name="checkIn"
              className="w-full border p-2 rounded"
              value={formData.checkIn}
              onChange={handleChange}
            />
            {errors.checkIn && (
              <p className="text-red-500 text-sm">{errors.checkIn}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Check-Out Date</label>
            <input
              type="date"
              name="checkOut"
              className="w-full border p-2 rounded"
              value={formData.checkOut}
              onChange={handleChange}
            />
            {errors.checkOut && (
              <p className="text-red-500 text-sm">{errors.checkOut}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Room Type</label>
            <select
              name="roomType"
              className="w-full border p-2 rounded"
              value={formData.roomType}
              onChange={handleChange}
            >
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Number of Guests</label>
            <input
              type="number"
              name="guests"
              className="w-full border p-2 rounded"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="10"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;

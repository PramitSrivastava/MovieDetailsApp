

import React, { useState } from "react";

const BookingForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    localStorage.removeItem("movieDetails");

    window.location.href = "/";
  };

  return (
    <div className="container mt-5 bg-warning p-4" style={{ maxWidth: "400px" }}>
      <div className="row justify-content-center flex-col flex-end ">
        <div className="col-md-12">
          <h1 className="text-center mb-4 text-white">Booking Form</h1>
          <form onSubmit={handleBookingSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="form-control"
                id="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="form-control"
                id="email"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

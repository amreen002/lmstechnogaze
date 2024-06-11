import React, { useState } from 'react';
import Navbarmenu from './Navbarmenu';
import FooterFrontend from './FooterFrontend';

const CompleteProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Completed:', profile);
    // Handle profile completion, e.g., send data to your backend
  };

  return (
    <div>
        <Navbarmenu />
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Complete Profile</button>
      </form>

      <FooterFrontend />
    </div>
  );
};

export default CompleteProfile;

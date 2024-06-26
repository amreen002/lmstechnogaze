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
        <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-xl-12 col-lg-12 col-md-12'>
            
      <form className="form-control llbl" onSubmit={handleSubmit}>
       
          <div className='cus_head'>
          <h2>Complete Your Profile</h2>
          </div>
          <div className='pb-3'>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div  className='pb-3'>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='pb-3'>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='pb-3'>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <button type="submit" className=' btn btn-primary col-2 mt--20'>Complete Profile</button>
      </form>
            </div>
          </div>
      

        </div>
        </section>
        
   
      <FooterFrontend />
    </div>
  );
};

export default CompleteProfile;

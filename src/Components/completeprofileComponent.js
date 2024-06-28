import React, { useState, useEffect } from 'react';
import Navbarmenu from './Navbarmenu';
import FooterFrontend from './FooterFrontend';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const { REACT_APP_API_ENDPOINT } = process.env;
const CompleteProfile = () => {

  const { usersId } = useParams();
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    userData: '',
    departmentId: '',
    phoneNumber: '',
    message: '',
    image: null,
  });
  useEffect(() => {
    fetchData(usersId);
  }, [usersId]);

  const fetchData = async (usersId) => {
    try {
      if (!usersId) {
        console.log("userId is undefined");
        return;
      }
      const token = localStorage.getItem('token');

      if (token) {
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/users/${usersId}`, {
          headers: {
            Authorization: `Bearer ${token}`

          }
        });
        const userData = response.data.users;
        setUserData(userData)
        setFormData({
          name: userData.name,
          userName: userData.userName,
          email: userData.email,
          departmentId: userData.departmentId,
          phoneNumber: userData.phoneNumber,
          message: userData.message,
          image: null,
        });


      }

    } catch (err) {
      console.log(err.response);
    }
  }


  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: files ? files[0] : value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
        data.append(key, formData[key]);
    }
    try {
      const token = localStorage.getItem('token');

      if (token) {
        await axios.put(`${REACT_APP_API_ENDPOINT}/users/${usersId}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
            Authorization: `Bearer ${token}`
          }
        });

        fetchData(usersId); // Refresh user data after update
        alert("User data updated successfully!");
        window.location.href = '/login'
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('An error occurred while updating user data');
    }


  };


  return (
    <div>
      <Navbarmenu />
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-xl-12 col-lg-12 col-md-12'>

              <form className="form-control llbl" onSubmit={handleUpdate}>

                <div className='cus_head'>
                  <h2>Complete Your Profile</h2>
                </div>
                <div className='pb-3'>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div className='pb-3'>
                  <label>User Name</label>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div className='pb-3'>
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div className='pb-3'>
                  <label>Contact</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div className='pb-3'>
                  <label>Instructor/Student</label>
                  <select id="departmentId" name="departmentId" className="form-select" value={formData.departmentId} onChange={handleChange}>
                    <option value="3">Instructor</option>
                    <option value="4">Student</option>

                  </select>
                </div>
                <div className='pb-3'>
                  <label>Message</label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div className='pb-3'>
                  <label>Profile</label>
                  <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  name="file"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                  value={formData.image}
          
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

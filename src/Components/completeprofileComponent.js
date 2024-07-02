import React, { useState, useEffect } from 'react';
import Navbarmenu from './Navbarmenu';
import FooterFrontend from './FooterFrontend';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const { REACT_APP_API_ENDPOINT } = process.env;
const CompleteProfile = () => {

  const { usersId } = useParams();
  const [userData, setUserData] = useState({});
  const [countryTable, setCountryTable] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    roleName: '',
    phoneNumber: '',
    image: null,
    AddressType: '',
    Address: '',
    StateId: '',
    CountryId: '',
    DistrictId: '',
    City: '',
  });

  useEffect(() => {
    if (usersId) {
      fetchData(usersId);
    }
  }, [usersId]);

  useEffect(() => {
    fetchData1();
  }, []);



  const handleCountryChange = (e) => {
    const selectedCountryId = parseInt(e.target.value, 10);
    const selectedCountry = countryTable.find((country) => country.id === selectedCountryId);
    setFormData({
      ...formData,
      CountryId: selectedCountryId,
      StateId: '',
      DistrictId: '',
    });
    setSelectedCountry(selectedCountry);
    setSelectedState('');
  };

  const handleStateChange = (e) => {
    const selectedStateId = parseInt(e.target.value, 10);
    const selectedState = selectedCountry ? selectedCountry.Staties.find((state) => state.id === selectedStateId) : '';
    setFormData({
      ...formData,
      StateId: selectedStateId,
      DistrictId: '',
    });
    setSelectedState(selectedState);
  };

  const fetchData1 = async () => {
    try {
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/country`);
        const userData = response.data.country;
        setCountryTable(userData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData = async (usersId) => {
    try {
      if (!usersId) {
        console.log("userId is undefined");
        return;
      }
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/signup/${usersId}`);
        const userData = response.data.users;
   
        setUserData(userData);
        setFormData({
          name: userData?.name || '',
          userName: userData?.userName || '',
          email: userData?.email || '',
          departmentId: userData?.departmentId || '',
          phoneNumber: userData?.phoneNumber || '',
          image: null,
          CountryId: userData?.Address?.CountryId || '',
          StateId: userData?.Address?.StateId || '',
          DistrictId: userData?.Address?.DistrictId || '',
          Address: userData?.Address?.Address || '',
          City: userData?.Address?.City || '',
          AddressType: userData?.Address?.AddressType || '',
        });
      } catch (err) {
        console.error('Error fetching user data:', err.response);
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
      await axios.put(`${REACT_APP_API_ENDPOINT}/signup/${usersId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
        },
      });

      fetchData(usersId); // Refresh user data after update
      alert("User data updated successfully!");
       window.location.href = '/login'
    } catch (error) {
      console.error('Error updating user:', error);
      alert('An error occurred while updating user data');
    }
  }
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
                  <select id="departmentId" name="departmentId" disabled="false" className="form-select" value={formData.departmentId} onChange={handleChange}>
                    <option value="">--Select--</option>
                    <option value="3">Instructor</option>
                    <option value="4">Student</option>

                  </select>
                </div>
                <div className='pb-3'>
                  <label htmlFor="exampleFormControlSelect2" className="form-label" > Country</label>
                  <select name="CountryId"  className="select2 form-select" value={formData.CountryId} onChange={handleCountryChange}>
                    <option value="">Select Country</option>
                    {countryTable.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='pb-3'>
                  <label htmlFor="exampleFormControlSelect2" className="form-label"> State</label>
                  <select name="StateId"  className="select2 form-select" value={formData.StateId} onChange={handleStateChange} disabled={!selectedCountry}>
                    <option value="">Select State</option>
                    {selectedCountry &&
                      selectedCountry.Staties.map((state) => (
                        <option key={state.id} value={state.id}>
                          {state.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className='pb-3'>
                  <label htmlFor="exampleFormControlSelect2" className="form-label"> District</label>
                  <select name="DistrictId"  className="select2 form-select" value={formData.DistrictId} onChange={handleChange} disabled={!selectedState}>
                    <option value="">Select District</option>
                    {selectedState && selectedState.Cities.map(city => (
                      <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                  </select>
                </div>
               
                <div className='pb-3'>  
                <label htmlFor="exampleFormControlSelect2" className="form-label"> Address Type</label>
                  <select  className="select2 form-select" name="AddressType" value={formData.AddressType} onChange={handleChange}>
                  <option value="Current Address">Current Address</option>
                  <option value="Permanent Address">Permanent Address</option>
                </select>
                </div>

                <div className='pb-3'>
                  <label class="form-label" for="add-user-email"> City</label>
                  <input type="text" name="City" className='form-control' value={formData.City} onChange={handleChange} placeholder="City" />
                  <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                </div>

                <div className='pb-3'>
                  <label class="form-label" for="add-user-email"> Address</label>
                  <input type="text" className='form-control'  name="Address" value={formData.Address} onChange={handleChange} placeholder="Address" />
                  <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
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

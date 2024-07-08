import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';
const { REACT_APP_API_ENDPOINT } = process.env;
function RegistersP(onLogout) {
    const [error, setError] = useState(null);
    const [roleData, setSaleTeamData] = useState([]);
    const [countryTable, setCountryTable] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [courses, setCourses] = useState([])
    const [batches,setBatches]= useState([])
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        roleName: '',
        phoneNumber: '',
        message: '',
        image: null,
        AddressType: "Current Address",
        Address: '',
        StateId: '',
        CountryId: '',
        DistrictId: '',
        City: '',
    });
    const [StateId, setStateId] = useState('')
    const [CountryId, setCountryId] = useState('')
    const [Address, setAddress] = useState('')
    const [City, setCity] = useState('')
    const [DistrictId, setDistrictId] = useState('')
    const handleCountryChange = (e) => {
        const selectedCountryId = parseInt(e.target.value);
        const selectedCountry = countryTable.find(country => country.id === selectedCountryId);
        setCountryId(selectedCountryId);
        setSelectedCountry(selectedCountry);
        setStateId(''); // Reset state and district selections
        setSelectedState('');
        setDistrictId('');
    };


    const handleStateChange = (e) => {
        const selectedStateId = parseInt(e.target.value);
        const selectedState = selectedCountry ? selectedCountry.Staties.find(state => state.id === selectedStateId) : '';
        setStateId(selectedStateId);
        setSelectedState(selectedState);
        setDistrictId(''); // Reset district selection
    };
    useEffect(() => {
        fetchData1()
        fetchData2()
    }, []);
    const fetchData1 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/listrole`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.role;
                setSaleTeamData(userDatas)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchData2 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/listcountry`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.country;
                setCountryTable(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const handleChange = async (e) => {
        const { name, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0]  // Handle files differently
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }

        if (!validateEmail(formData.email)) {
            setError('Invalid Email', error);
            return;
        }

        if (formData.password.length < 8) {
            setError('Password must be at least 8 chars long', error);
            return;
        }

        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        try {
            const token = localStorage.getItem('token');
            let response
            if (token) {
                response = await axios.post(`${REACT_APP_API_ENDPOINT}/users`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });
                window.location.href = "/userlist";
                alert('Users SuccessFully Create');
            }
        } catch (error) {
            alert('Failed to send message.');
        }
    };

    return (
        /*      <!-- Layout wrapper --> */
        <div class="layout-wrapper layout-content-navbar">
            <div class="layout-container">
                {/*       <!-- Menu -->*/}
                <DashBoardMenus />
                {/*             <!-- / Menu -->
    
            <!-- Layout container --> */}
                <div class="layout-page">
                    {/*         <!-- Navbar --> */}
                    <Navbar />
                    {/*              <!-- / Navbar -->

                    {/*       <!-- Content wrapper --> */}
                    <div class="content-wrapper">
                        {/*     <!-- Content --> */}

                        <div class="container-xxl flex-grow-1 container-p-y">
                            <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Forms/</span>Add User</h4>

                            {/*       <!-- Basic Layout --> */}
                            <div class="row">
                                <div class="col-xl">
                                    <div class="card mb-4">
                                        <div class="card-header d-flex justify-content-between align-items-center">
                                            <h5 class="mb-0">Basic with Information</h5>
                                            <small class="text-muted float-end">Merged input group</small>
                                        </div>
                                        <div class="card-body">
                                            <form onSubmit={handleSubmit}>
                                                <div class="mb-3">
                                                    <label class="form-label" for="basic-icon-default-fullname">Full Name</label>
                                                    <div class="input-group input-group-merge">
                                                        <span id="basic-icon-default-fullname2" class="input-group-text"
                                                        ><i class="bx bx-user"></i
                                                        ></span>
                                                        <input
                                                            type="text"
                                                            name='name'
                                                            onChange={handleChange}
                                                            value={formData.name}
                                                            class="form-control"
                                                            id="basic-icon-default-fullname"
                                                            placeholder="Full Name"
                                                            aria-label="Full Name"
                                                            aria-describedby="basic-icon-default-fullname2"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="basic-icon-default-fullname">User Name</label>
                                                    <div class="input-group input-group-merge">
                                                        <span class="input-group-text" id="basic-addon11">@</span>
                                                        <input
                                                            type="text"
                                                            name='userName'
                                                            onChange={handleChange}
                                                            value={formData.userName}
                                                            class="form-control"
                                                            id="basic-icon-default-fullname"
                                                            placeholder="John Doe"
                                                            aria-label="John Doe"
                                                            aria-describedby="basic-icon-default-fullname2"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label" for="basic-icon-default-email">Email</label>
                                                    <div class="input-group input-group-merge">
                                                        <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                                                        <input
                                                            type="text"
                                                            id="basic-icon-default-email"
                                                            name='email'
                                                            onChange={handleChange}
                                                            value={formData.email}
                                                            class="form-control"
                                                            placeholder="john.doe"
                                                            aria-label="john.doe"
                                                            aria-describedby="basic-icon-default-email2"
                                                        />
                                                        <span id="basic-icon-default-email2" class="input-group-text">@example.com</span>
                                                    </div>
                                                    <div class="form-text">You can use letters, numbers & periods</div>
                                                </div>


                                                <div class="mb-3 row">

                                                    <label class="form-label" for="basic-icon-default-password">Password</label>
                                                    <div class="input-group input-group-merge">
                                                        <span id="basic-default-password2" class="input-group-text cursor-pointer"
                                                        ><i class="bx bx-hide"></i
                                                        ></span>
                                                        <input type="password"
                                                            onChange={handleChange}
                                                            name='password'
                                                            value={formData.password}
                                                            class="form-control password-mask"
                                                            id="basic-default-password12"
                                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                            aria-describedby="basic-default-password2" />
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="basic-icon-default-phone">Phone No</label>
                                                    <div class="input-group input-group-merge">
                                                        <span id="basic-icon-default-phone2" class="input-group-text"
                                                        ><i class="bx bx-phone"></i
                                                        ></span>
                                                        <input
                                                            type="text"
                                                            id="basic-icon-default-phone"
                                                            onChange={handleChange}
                                                            name='phoneNumber'
                                                            value={formData.phoneNumber}
                                                            class="form-control phone-mask"
                                                            placeholder="658 799 8941"
                                                            aria-label="658 799 8941"
                                                            aria-describedby="basic-icon-default-phone2"
                                                        />
                                                    </div>
                                                </div>


                                                <div class="mb-3">
                                                    <label class="form-label" for="modalEditUserStatus"></label>
                                                    <select
                                                        id="modalEditUserStatus"
                                                        className="form-select"
                                                        name="departmentId"
                                                        onChange={handleChange}
                                                        value={formData.departmentId}


                                                    >
                                                        {roleData.map((option) => (
                                                            <option key={option.id} value={option.id}>{option.Name}</option>
                                                        ))}
                                                    </select>

                                                </div>
                                                <div class="mb-3">
                                                    <label htmlFor="exampleFormControlSelect2" className="form-label"> Address Type</label>
                                                    <select className="select2 form-select" name="AddressType" value={formData.AddressType} onChange={handleChange}>
                                                        <option value=" ">---Select---</option>
                                                        <option value="Current Address">Current Address</option>
                                                        <option value="Permanent Address">Permanent Address</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label htmlFor="exampleFormControlSelect2" className="form-label"> Country</label>
                                                    <select
                                                        id="exampleFormControlSelect2"
                                                        className="select2 form-select"
                                                        name="CountryId"
                                                        value={CountryId}
                                                        onChange={handleCountryChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {countryTable.map(option => (
                                                            <option key={option.id} value={option.id}>{option.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label htmlFor="exampleFormControlSelect2" className="form-label"> State</label>
                                                    <select
                                                        id="exampleFormControlSelect2"
                                                        className="select2 form-select"
                                                        name="StateId"
                                                        value={StateId}
                                                        onChange={handleStateChange}
                                                    >
                                                        <option value="">Select</option>
                                                        {selectedCountry && selectedCountry.Staties.map(state => (
                                                            <option key={state.id} value={state.id}>{state.name}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div class="mb-3">
                                                    <label htmlFor="exampleFormControlSelect2" className="form-label"> District</label>
                                                    <select
                                                        id="exampleFormControlSelect2"
                                                        className="select2 form-select"
                                                        name="DistrictId"
                                                        value={DistrictId}
                                                        onChange={(e) => setDistrictId(e.target.value)}
                                                    >
                                                        <option value="">Select</option>
                                                        {selectedState && selectedState.Cities.map(city => (
                                                            <option key={city.id} value={city.id}>{city.name}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label" for="add-user-email"> City</label>
                                                    <input type="text" id="add-user-email" class="form-control" placeholder="City" name='City'
                                                        onChange={(e) => setCity(e.target.value)}
                                                        value={City} />
                                                    <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label" for="add-user-email"> Address</label>
                                                    <input type="text" id="add-user-email" class="form-control" placeholder="Address" name='Address'
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        value={Address} />
                                                    <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="basic-icon-default-message">Message</label>
                                                    <div class="input-group input-group-merge">
                                                        <span id="basic-icon-default-message2" class="input-group-text"
                                                        ><i class="bx bx-comment"></i></span>
                                                        <textarea
                                                            id="basic-icon-default-message"
                                                            class="form-control"
                                                            placeholder="Hi, Do you have a moment to talk Joe?"
                                                            aria-label="Hi, Do you have a moment to talk Joe?"
                                                            aria-describedby="basic-icon-default-message2"
                                                            name="message" value={formData.message} onChange={handleChange}></textarea>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="input-group">
                                                        <input
                                                            type="file"
                                                            class="form-control"
                                                            id="inputGroupFile04"
                                                            aria-describedby="inputGroupFileAddon04"
                                                            aria-label="Upload"
                                                            name="file"
                                                            accept="image/png, image/jpeg"
                                                            value={formData.image} onChange={handleChange}
                                                        />
                                                        <button class="btn btn-outline-primary" type="button" id="inputGroupFileAddon04">Button</button>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Send</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*         <!-- / Content -->
    
                         <!-- Footer --> */}
                        <Footer />
                        {/*       <!-- / Footer --> */}

                        <div class="content-backdrop fade"></div>
                    </div>
                    {/*      <!-- Content wrapper --> */}
                </div>
                {/*           <!-- / Layout page --> */}
            </div >

            {/*   <!-- Overlay --> */}
            < div class="layout-overlay layout-menu-toggle" ></div >
        </div >

    )
}
export default RegistersP;
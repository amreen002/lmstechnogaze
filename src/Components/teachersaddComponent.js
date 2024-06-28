import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';
const { REACT_APP_API_ENDPOINT ,REACT_APP_API_IMG} = process.env;
function ListUse() {
    const [countryTable, setCountryTable] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [Name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [DOB, setDOB] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Password, setPassword] = useState("Abc@123");
    const [StateId, setStateId] = useState('')
    const [CountryId, setCountryId] = useState('')
    const [Address, setAddress] = useState('')
    const [City, setCity] = useState('')
    const [DistrictId, setDistrictId] = useState('')
    const [TeacherType, setTeacherType] = useState('')
    const [Username, setUsername] = useState('')
    const [YourIntroducationAndSkills, setYourIntroducationAndSkills] = useState('')
    const { REACT_APP_API_ENDPOINT } = process.env;
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
        fetchData2()
    }, []);




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






    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let formData = {
                Name,
                LastName,
                Email,
                Password,
                DOB,
                TeacherType,
                Username,
                PhoneNumber,
                YourIntroducationAndSkills,
                AddressType: 'Current Address',
                Address,
                StateId,
                CountryId,
                DistrictId,
                City,
            }
            const token = localStorage.getItem('token');

            if (token) {

                await axios.post(`${REACT_APP_API_ENDPOINT}/addteachers`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                window.location.href = "/teachers";
                alert('Teachers SuccessFully Create');
            }
        } catch (error) {
            alert('Failed to send message.');
        }
    };



    //Dropdown Navigation

    return (
        <>
            {/*     <!-- Layout wrapper --> */}
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    {/*      <!-- Menu --> */}
                    <DashBoardMenus />
                    {/*         <!-- / Menu --> */}

                    {/*     <!-- Layout container --> */}
                    <div class="layout-page">

                        <Navbar />

                        <div class="content-wrapper">



                            <div class="container-xxl flex-grow-1 container-p-y">



                                <div class="row g-4 mb-4">
                                    <div class="col-sm-6 col-xl-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="d-flex align-items-start justify-content-between">
                                                    <div class="content-left">
                                                        <span>Session</span>
                                                        <div class="d-flex align-items-end mt-2">
                                                            <h4 class="mb-0 me-2">21,459</h4>
                                                            <small class="text-success">(+29%)</small>
                                                        </div>
                                                        <p class="mb-0">Total Users</p>
                                                    </div>
                                                    <div class="avatar">
                                                        <span class="avatar-initial rounded bg-label-primary">
                                                            <i class="bx bx-user bx-sm"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xl-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="d-flex align-items-start justify-content-between">
                                                    <div class="content-left">
                                                        <span>Paid Users</span>
                                                        <div class="d-flex align-items-end mt-2">
                                                            <h4 class="mb-0 me-2">4,567</h4>
                                                            <small class="text-success">(+18%)</small>
                                                        </div>
                                                        <p class="mb-0">Last week analytics </p>
                                                    </div>
                                                    <div class="avatar">
                                                        <span class="avatar-initial rounded bg-label-danger">
                                                            <i class="bx bx-user-check bx-sm"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xl-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="d-flex align-items-start justify-content-between">
                                                    <div class="content-left">
                                                        <span>Active Users</span>
                                                        <div class="d-flex align-items-end mt-2">
                                                            <h4 class="mb-0 me-2">19,860</h4>
                                                            <small class="text-danger">(-14%)</small>
                                                        </div>
                                                        <p class="mb-0">Last week analytics</p>
                                                    </div>
                                                    <div class="avatar">
                                                        <span class="avatar-initial rounded bg-label-success">
                                                            <i class="bx bx-group bx-sm"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xl-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="d-flex align-items-start justify-content-between">
                                                    <div class="content-left">
                                                        <span>Pending Users</span>
                                                        <div class="d-flex align-items-end mt-2">
                                                            <h4 class="mb-0 me-2">237</h4>
                                                            <small class="text-success">(+42%)</small>
                                                        </div>
                                                        <p class="mb-0">Last week analytics</p>
                                                    </div>
                                                    <div class="avatar">
                                                        <span class="avatar-initial rounded bg-label-warning">
                                                            <i class="bx bx-user-voice bx-sm"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header border-bottom">
                                        <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
                                            <div class="offcanvas-header">
                                                <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add Instructor</h5>
                                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div class="offcanvas-body mx-0 flex-grow-0">
                                                <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onSubmit={handleSubmit} novalidate="novalidate">
                                                    <div class="card-body row">

                                                        <div class="col-lg-6 p-t-20">

                                                            <label class="form-label" for="add-user-fullname">Frist Name</label>
                                                            <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='Name'
                                                                onChange={(e) => setName(e.target.value)}
                                                                value={Name} aria-label="John Doe" />
                                                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                                        <div class="col-lg-6 p-t-20">
                                                            <label class="form-label" for="add-user-fullname">Last Name</label>
                                                            <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='LastName'
                                                                onChange={(e) => setLastName(e.target.value)}
                                                                value={LastName} aria-label="John Doe" />
                                                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                                            <div class="col-lg-6 p-t-20">
                                                            <label class="form-label" for="add-user-email">Email</label>
                                                            <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com" name='Email'
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                value={Email} />

                                                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                                            <div class="col-lg-6 p-t-20">
                                                            <label class="form-label" for="add-user-contact">Contact</label>
                                                            <input type="text" id="add-user-contact" class="form-control phone-mask" placeholder="+91 (609) 988-44-11" name="PhoneNumber"
                                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                                value={PhoneNumber} />
                                                        </div>
                                                        <div class="col-lg-6 p-t-20">
                                                            <label class="form-label" for="add-user">User Name</label>
                                                            <input type="text" id="add-user" class="form-control" placeholder="User@123" name="Username"
                                                                onChange={(e) => setUsername(e.target.value)}
                                                                value={Username} />
                                                        </div>
                                                        <div class="col-lg-6 p-t-20">

                                                            <label class="form-label" for="basic-icon-default-password">Password</label>
                                                            <input type="Password"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                name='Password'
                                                                value={Password}
                                                                class="form-control password-mask"
                                                                id="basic-default-password12"
                                                                placeholder="Abc@123"
                                                            />

                                                        </div>
                                                        <div class="col-lg-6 p-t-20">

                                                            <label class="form-label" for="basic-icon-default-password">DOB</label>
                                                            <input type="date"
                                                                onChange={(e) => setDOB(e.target.value)}
                                                                name='DOB'
                                                                value={DOB}
                                                                class="form-control DOB-mask"
                                                                id="basic-default-DOB"
                                                                placeholder="DOB"
                                                                aria-describedby="basic-default-DOB" />

                                                        </div>
                                                        <div class="col-lg-6 p-t-20">
                                                            <label for="exampleFormControlSelect2" class="form-label">Teacher Type</label>
                                                            <select id="exampleFormControlSelect2" class="select2 form-select" name="TeacherType" value={TeacherType} onChange={(e) => setTeacherType(e.target.value)}>
                                                                <option value="">Select</option>
                                                                <option value="Online">Online</option>
                                                                <option value="Offline">Offline</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-4 p-t-20">
                                                            <label htmlFor="exampleFormControlSelect2" className="form-label">Country</label>
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
                                                        <div class="col-lg-4 p-t-20">
                                                            <label htmlFor="exampleFormControlSelect2" className="form-label">State</label>
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

                                                        <div class="col-lg-4 p-t-20">
                                                            <label htmlFor="exampleFormControlSelect2" className="form-label">District</label>
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

                                                        <div class="col-lg-6 p-t-20">
                                                            <label class="form-label" for="add-user-email">Address</label>
                                                            <input type="text" id="add-user-email" class="form-control" placeholder="Address" name='Address'
                                                                onChange={(e) => setAddress(e.target.value)}
                                                                value={Address} />
                                                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                        </div>
                                                        <div class="col-lg-6 p-t-20">
                                                            <label class="form-label" for="add-user-email">City</label>
                                                            <input type="text" id="add-user-email" class="form-control" placeholder="Address" name='City'
                                                                onChange={(e) => setCity(e.target.value)}
                                                                value={City} />
                                                            <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label" for="basic-icon-default-message">Your Introducation & Skills</label>
                                                            <div class="input-group input-group-merge">
                                                                <span id="basic-icon-default-message2" class="input-group-text"
                                                                ><i class="bx bx-comment"></i
                                                                ></span>
                                                                <textarea
                                                                    id="basic-icon-default-message"
                                                                    class="form-control"
                                                                    placeholder="Hi, Do you have a moment to talk Joe?"
                                                                    aria-label="Hi, Do you have a moment to talk Joe?"
                                                                    aria-describedby="basic-icon-default-message2"
                                                                    name="YourIntroducationAndSkills" value={YourIntroducationAndSkills} onChange={(e) => setYourIntroducationAndSkills(e.target.value)}></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3 d-flex">
                                                            <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                            <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                                                            <input type="hidden" />
                                                        </div>




                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            {/*                <!-- / Content --> */}




                            {/*  <!-- Footer --> */}

                            <Footer />

                            {/*      <!-- / Footer --> */}

                        </div>
                    </div >
                    {/*     <!-- Overlay --> */}
                    < div class="layout-overlay layout-menu-toggle" ></div >
                </div >
                {/* / Layout wrapper  */}

            </div >

        </>
    )
}

export default ListUse
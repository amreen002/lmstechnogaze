import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';

function ListUse() {
    const [table, setTable] = useState([]);
    const { teachersId } = useParams();
    const [error, setError] = useState(null);
    const [emailerror, setemail] = useState(null);
    const [roleData, setRoleData] = useState([]);
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
    const [FindOneInstructor, setFindOneInstructor] = useState({})
    const [YourIntroducationAndSkills, setYourIntroducationAndSkills] = useState('')
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
        fetchData();
        fetchData1()
        fetchData2()
    }, []);
    const validateEmail = (Email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(Email).toLowerCase());
    }
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get('http://localhost:3000/api/listteachers', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setTable(response.data.teachers);
            }// Updated state variable
        } catch (err) {
            console.log(err.response);
        }
    }

    const fetchData1 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/listrole`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.role;
                setRoleData(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchData2 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/listcountry`, {
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

    useEffect(() => {
        fetchData3(teachersId)
    }, [teachersId]);
    const fetchData3 = async (teachersId) => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/listteachers/${teachersId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.teachers;
                setFindOneInstructor(userData)
                setName(userData.Name)
                setLastName(userData.LastName)
                setEmail(userData.Email)
                setPhoneNumber(userData.PhoneNumber)
                setUsername(userData.Username)
                setDOB(userData.DOB)
                setTeacherType(userData.TeacherType)
                setCountryId(userData.Address.CountryId)
                setStateId(userData.Address.setStateId)
                setDistrictId(userData.Address.DistrictId)
                setAddress(userData.Address.Address)
                setCity(userData.Address.City)
                setYourIntroducationAndSkills(userData.YourIntroducationAndSkills)

            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };





    const handleSubmit = async (e) => {
        e.preventDefault();
        /* 
                let new_pass = e.target.value;
                setPassword(new_pass);
                let newname = e.target.value;
                setPassword(newname);
        
                if (!validateEmail(Email)) {
                    setError('Invalid Email', error);
                    return;
                }
                var lowerCase = /[a-z]/g;
                var upperCase = /[A-Z]/g;
                var numbers = /[0-9]/g;
                if (Password.length < 8 || !new_pass.match(lowerCase) || !new_pass.match(upperCase) || !new_pass.match(numbers)) {
                    setError('Password must be at least 8 chars long Abc.@678', error);
                    return;
                }
                if (Name == null) {
                    setemail('Invalid Form, First Name can not be empty', emailerror)
                    return
                }
                setError(null); */
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
                DistrictId
            }
            const token = localStorage.getItem('token');
            let response
            if (token) {

                response = await axios.post('http://localhost:3000/api/addteachers', formData, {
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

    const handleDelete = async (teachersId) => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                await axios.delete(`http://localhost:3000/api/deleteteachers/${teachersId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData();
                alert('Data successfully deleted');
            }
        } catch (error) {
            console.error('Error deleting data:', error);
            alert('An error occurred while deleting data');
        }
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            let updatedUserData = {
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
                DistrictId
            }
            const token = localStorage.getItem('token');

            if (token) {
                await axios.put(`http://localhost:3000/api/viewsteachers/${teachersId}`, updatedUserData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData3(teachersId);
                window.location.href = "/teachers"
                alert("Instructor Is Updated Successfully!");
            }
        } catch (error) {
            console.error('Error updating:', error);
            alert('An error occurred while updating');
        }

        // Clear input fields after update

    };
    //Dropdown Navigation
    /*  const [activeService, setOpenDropdown] = useState(null);
 
     // Function to toggle a specific dropdown
     const toggleDropdown = (serviceName) => {
         setOpenDropdown(activeService === serviceName ? '' : serviceName);
     }; */

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
                                        <h5 class="card-title">Search Filter</h5>
                                        <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
                                            <div class="col-md-4 user_role"><select id="UserRole" class="form-select text-capitalize"><option value=""> Select Role </option><option value="Admin">Admin</option><option value="Author">Author</option><option value="Editor">Editor</option><option value="Maintainer">Maintainer</option><option value="Subscriber">Subscriber</option></select></div>
                                            <div class="col-md-4 user_plan"><select id="UserPlan" class="form-select text-capitalize"><option value=""> Select Plan </option><option value="Basic">Basic</option><option value="Company">Company</option><option value="Enterprise">Enterprise</option><option value="Team">Team</option></select></div>
                                            <div class="col-md-4 user_status"><select id="FilterTransaction" class="form-select text-capitalize"><option value=""> Select Status </option><option value="Pending" class="text-capitalize">Pending</option><option value="Active" class="text-capitalize">Active</option><option value="Inactive" class="text-capitalize">Inactive</option></select></div>
                                        </div>
                                    </div>
                                    <div class="card-datatable table-responsive">
                                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer"><div class="row mx-2"><div class="col-md-2"><div class="me-3"><div class="dataTables_length" id="DataTables_Table_0_length"><label><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div></div><div class="col-md-10">
                                            <div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"><div id="DataTables_Table_0_filter" class="dataTables_filter"><label>
                                            <input type="search" class="form-control" placeholder="Search.." aria-controls="DataTables_Table_0" /></label></div>
                                            <div class="dt-buttons btn-group flex-wrap">
                                                 <div class="btn-group d-flex flex-row">
                                                    <button class="btn buttons-collection dropdown-toggle btn-label-secondary mx-3 d-flex" 
                                                    tabindex="0" aria-controls="DataTables_Table_0" type="button" aria-haspopup="dialog" 
                                                    aria-expanded="false">
                                                    <span><i class="bx bx-export me-1"></i>Export</span>
                                                    </button>
                                                  
                                                    <button class="btn btn-secondary add-new btn-primary d-flex cus_Add" tabindex="0" aria-controls="DataTables_Table_0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddUser">
                                                   
                                                    <span><i class="bx bx-plus me-0 me-sm-1"></i>Instructor</span>
                                                    </button>
                                                 </div>
                                              
                                                     </div>
                                                     </div>
                                                     </div >
                                                     </div>
                                                     <table class="datatables-users table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" width="1390px;">
                                                <thead>
                                                    <tr>
                                                        <th class="control sorting_disabled dtr-hidden" rowspan="1" colspan="1" aria-label=""></th>
                                                        <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="100px;" aria-label="User: activate to sort column ascending" aria-sort="descending">So.Id</th>
                                                        <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="User: activate to sort column ascending" aria-sort="descending">Name</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="350px;" aria-label="Role: activate to sort column ascending">Address</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="100px;" aria-label="Plan: activate to sort column ascending">Type </th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="150px;" aria-label="Billing: activate to sort column ascending">City</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="170px;" aria-label="Status: activate to sort column ascending">MOBILE</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="Status: activate to sort column ascending">Email</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="Status: activate to sort column ascending">DOB</th>
                                                        <th class="sorting_disabled" rowspan="1" colspan="1" width="145px;" aria-label="Actions">Actions</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {table.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td class="sorting_1">

                                                            </td>
                                                            <td>{index + 1}</td>
                                                            <td>{item.Name + " " + item.LastName}</td>
                                                            <td>{item.Address && item.Address.Address}</td>
                                                            <td>{item.TeacherType}</td>
                                                            <td>{item.Address && item.Address.City}</td>
                                                            <td>{item.PhoneNumber}</td>
                                                            <td>{item.Email}</td>
                                                            <td>{item.DOB}</td>
                                                            <td><div class="d-inline-block text-nowrap">
                                                                <Link to={`/teachers/${item.id}`} className="navbar-brand" >  <button className="btn btn-sm btn-icon" data-bs-target="#editInstructor" data-bs-toggle="modal">
                                                                    <i class="bx bx-edit"></i>
                                                                </button>
                                                                </Link>
                                                                <button class="btn btn-sm btn-icon delete-record" onClick={() => handleDelete(item.id)}>
                                                                    <i class="bx bx-trash"></i>
                                                                </button></div></td>

                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <div class="row mx-2"><div class="col-sm-12 col-md-6"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 50 entries</div></div><div class="col-sm-12 col-md-6"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="1" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="2" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="3" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="4" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="next" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                                    </div>

                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddUser" aria-labelledby="offcanvasAddUserLabel" style={{ width: "28%" }}>
                                        <div class="offcanvas-header">
                                            <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add Instructor</h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body mx-0 flex-grow-0">
                                            <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onSubmit={handleSubmit} novalidate="novalidate">
                                                <div class="card-body row">

                                                    <div class="col-lg-6 p-t-20">
                                                        {emailerror && <div style={{ color: 'red' }}>{emailerror}</div>}
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
                                                        <label class="form-label" for="add-user-contact"> Contact</label>
                                                        <input type="text" id="add-user-contact" class="form-control phone-mask" placeholder="+91 (609) 988-44-11" name="PhoneNumber"
                                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                                            value={PhoneNumber} />
                                                    </div>
                                                    <div class="col-lg-6 p-t-20">
                                                        <label class="form-label" for="add-user"> User Name</label>
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
                                                        {error && <div style={{ color: 'red' }}>{error}</div>}
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
                                                        <label for="exampleFormControlSelect2" class="form-label">Type</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="TeacherType" value={TeacherType} onChange={(e) => setTeacherType(e.target.value)}>
                                                            <option value="">Select</option>
                                                            <option value="Online">Online</option>
                                                            <option value="Offline">Offline</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-6 p-t-20">
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
                                                    <div class="col-lg-6 p-t-20">
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

                                                    <div class="col-lg-6 p-t-20">
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

                                                    <div class="col-lg-6 p-t-20">
                                                        <label class="form-label" for="add-user-email">Address</label>
                                                        <input type="text" id="add-user-email" class="form-control" placeholder="Address" name='Address'
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            value={Address} />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user-email">City</label>
                                                        <input type="text" id="add-user-email" class="form-control" placeholder="City" name='City'
                                                            onChange={(e) => setCity(e.target.value)}
                                                            value={City} />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="basic-icon-default-message">Introducation & Skills</label>
                                                        <div class="input-group input-group-merge">
                                                            <span id="basic-icon-default-message2" class="input-group-text"
                                                            ><i class="bx bx-comment"></i
                                                            ></span>
                                                            <textarea
                                                                id="basic-icon-default-message"
                                                                class="form-control"
                                                                rows="8"
                                                                placeholder="Hi, Your Introducation And Skills?"
                                                                aria-label="Hi, Your Introducation And Skills?"
                                                                aria-describedby="basic-icon-default-message2"
                                                                name="YourIntroducationAndSkills" value={YourIntroducationAndSkills} onChange={(e) => setYourIntroducationAndSkills(e.target.value)}></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 d-flex flex-row">

                                                        <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit d-flex">Submit</button>
                                                        <button type="reset" class="btn btn-label-secondary d-flex" data-bs-dismiss="offcanvas">Cancel</button>
                                                        <input type="hidden" />
                                                    </div>




                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/*  /*   <!--  Modal table --> */}
                                <div class="modal fade" id="editInstructor" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-lg modal-simple modal-edit-user">
                                        <div class="modal-content p-3 p-md-5">
                                            <div className='modal-header d-flex'>
                                                <div className='d-flex'>
                                                <h5 class="modal-title">Instructor Information</h5>
                                                </div>
                                                <div className='d-flex'>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" 
                                            aria-label="Close"></button>
                                                </div>
                                            
                                             
                                            </div>
                                            <div class="modal-body">
                                               
                                                <form id="editUserForm" class="row g-3 fv-plugins-bootstrap5 fv-plugins-framework" onSubmit={handleUpdate} novalidate="novalidate">
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        {emailerror && <div style={{ color: 'red' }}>{emailerror}</div>}
                                                        <label class="form-label" for="add-user-fullname">Instructor Frist Name</label>
                                                        <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='Name'
                                                            onChange={(e) => setName(e.target.value)}
                                                            defaultValue={Name} aria-label="John Doe" />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-fullname">Instructor Last Name</label>
                                                        <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='LastName'
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            defaultValue={LastName} aria-label="John Doe" />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-email">Instructor Email</label>
                                                        <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com" name='Email'
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            value={Email} />

                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-contact">Instructor Contact</label>
                                                        <input type="text" id="add-user-contact" class="form-control phone-mask" placeholder="+91 (609) 988-44-11" name="PhoneNumber"
                                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                                            value={PhoneNumber} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Instructor User Name</label>
                                                        <input type="text" id="add-user" class="form-control" placeholder="User@123" name="Username"
                                                            onChange={(e) => setUsername(e.target.value)}
                                                            value={Username} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">

                                                        <label class="form-label" for="basic-icon-default-password">Instructor DOB</label>
                                                        <input type="date"
                                                            onChange={(e) => setDOB(e.target.value)}
                                                            name='DOB'
                                                            value={DOB}
                                                            class="form-control DOB-mask"
                                                            id="basic-default-DOB"
                                                            placeholder="DOB"
                                                            aria-describedby="basic-default-DOB" />

                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label for="exampleFormControlSelect2" class="form-label">Instructor Type</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="TeacherType" value={TeacherType} onChange={(e) => setTeacherType(e.target.value)}>
                                                            <option value="">Select</option>
                                                            <option value="Online">Online</option>
                                                            <option value="Offline">Offline</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label htmlFor="exampleFormControlSelect2" className="form-label">Instructor Country</label>
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
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label htmlFor="exampleFormControlSelect2" className="form-label">Instructor State</label>
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

                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label htmlFor="exampleFormControlSelect2" className="form-label">Instructor District</label>
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

                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-email">Instructor Address</label>
                                                        <input type="text" id="add-user-email" class="form-control" placeholder="Address" name='Address'
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            value={Address} />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-email">Instructor City</label>
                                                        <input type="text" id="add-user-email" class="form-control" placeholder="Address" name='City'
                                                            onChange={(e) => setCity(e.target.value)}
                                                            value={City} />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="basic-icon-default-message">Instructor Your Introducation & Skills</label>
                                                        <div class="input-group input-group-merge">
                                                            <span id="basic-icon-default-message2" class="input-group-text"
                                                            ><i class="bx bx-comment"></i
                                                            ></span>
                                                            <textarea
                                                                id="basic-icon-default-message"
                                                                class="form-control"
                                                                rows="8"
                                                                placeholder="Hi, Your Introducation And Skills?"
                                                                aria-label="Hi, Your Introducation And Skills?"
                                                                aria-describedby="basic-icon-default-message2"
                                                                name="YourIntroducationAndSkills" value={YourIntroducationAndSkills} onChange={(e) => setYourIntroducationAndSkills(e.target.value)}></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 d-flex">
                                                        <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Update</button>
                                                        <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="modal">Cancel</button>
                                                        <input type="hidden" />
                                                    </div>
                                                    <input type="hidden" /></form>
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
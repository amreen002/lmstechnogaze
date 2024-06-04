import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';
import Select, { StylesConfig } from 'react-select'
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

function BatchesUse() {

    const { quizzeId } = useParams();
    const [quizze, setQuizze] = useState([]);
    const [QuizzName, setQuizzName] = useState('');
    const [QuizzStartTime, setQuizzStartTime] = useState('');
    const [QuizzEndTime, setQuizzEndTime] = useState('');
    const [QuizzTestDuration, setQuizzTestDuration] = useState('')
    const [EasyQuestions, setEasyQuestions] = useState('');
    const [MediumQuestions, setMediumQuestions] = useState('');
    const [HardQuestions, setHardQuestions] = useState('');
    const [TotalQuestions, setTotalQuestions] = useState('');
    const [TotalMarks, setTotalMarks] = useState('');
    const [Instructions, setInstructions] = useState('');
    const [CourseId,setCourseId]= useState('');
    const [FindOneInstructor, setFindOneInstructor] = useState({})
    const [QuizzCategoryId, setQuizzCategoryId] = useState([]);
    const [batch, setBatchs] = useState([]);
    const [category, setCategory] = useState([]);
    const [course, setCourse] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setTotalQuestions(parseInt(EasyQuestions) + parseInt(MediumQuestions) + parseInt(HardQuestions));
        setTotalMarks(parseInt(EasyQuestions) * 1 + parseInt(MediumQuestions) * 2 + parseInt(HardQuestions) * 4);
    }, [EasyQuestions, MediumQuestions, HardQuestions]);

    useEffect(() => {
        fetchData3(quizzeId)
    }, [quizzeId]);

    useEffect(() => {
        fetchData();
        fetchData1()
        fetchData2()
        fetchData4()
    }, []);

    // Format options for react-select
    const [BatchId, setBatchId] = useState([]);

    // Format options for react-select
    const options = batch.map(option => ({
        value: option.id,
        label: option.Title
    }));

    // Handle change event
    const handleChange = (selectedOptions) => {
        const batchIds = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setBatchId(batchIds);
    };

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/quizze`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.quizze;
                setQuizze(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const fetchData1 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/listbatches`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.batchs;
                setBatchs(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const fetchData2 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/questionscategory`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.questionscategory;
                setCategory(userDatas)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData3 = async (quizzeId) => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/quizze/${quizzeId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const userData = response.data.quizze;

                setFindOneInstructor(userData);
                setQuizzName(userData.QuizzName);
                setQuizzStartTime(userData.QuizzStartTime);
                setQuizzEndTime(userData.QuizzEndTime);
                setQuizzTestDuration(userData.QuizzTestDuration);
                setEasyQuestions(userData.EasyQuestions);
                setMediumQuestions(userData.MediumQuestions);
                setHardQuestions(userData.HardQuestions);
                setTotalQuestions(userData.TotalQuestions);
                setTotalMarks(userData.TotalMarks);
                setInstructions(userData.Instructions);
                setQuizzCategoryId(userData.QuizzCategoryId);
                setBatchId(Array.isArray(userData.BatchId) ? userData.BatchId : []);
                setCourseId(userData.CourseId)
            } else {
                console.warn('No token found in localStorage');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    const fetchData4 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/listcourses`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.courses;
                setCourse(userDatas)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let formData = {
                QuizzName,
                QuizzStartTime,
                QuizzEndTime,
                QuizzTestDuration,
                EasyQuestions,
                MediumQuestions,
                HardQuestions,
                TotalQuestions,
                TotalMarks,
                Instructions,
                BatchId,
                QuizzCategoryId,
                CourseId,
            }

            const token = localStorage.getItem('token');
            if (token) {
                const response = await axios.post('http://localhost:3000/api/quizze', formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                window.location.href = "/quizzes";
                alert('Quizze SuccessFully Create');
            }
        } catch (error) {
            alert('Failed to send message.');
        }
    };

    const handleDelete = async (quizzeId) => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                await axios.delete(`http://localhost:3000/api/quizze/${quizzeId}`, {
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
                QuizzName,
                QuizzStartTime,
                QuizzEndTime,
                QuizzTestDuration,
                EasyQuestions,
                MediumQuestions,
                HardQuestions,
                TotalQuestions,
                TotalMarks,
                Instructions,
                BatchId,
                QuizzCategoryId,
                CourseId
            }
            const token = localStorage.getItem('token');

            if (token) {
                await axios.put(`http://localhost:3000/api/quizze/${quizzeId}`, updatedUserData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData3(quizzeId)
                alert("Quizze Is Updated Successfully!");
            }
        } catch (error) {
            console.error('Error updating:', error);
            alert('An error occurred while updating');
        }

        // Clear input fields after update

    };


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
                                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer"><div class="row mx-2"><div class="col-md-2"><div class="me-3"><div class="dataTables_length" id="DataTables_Table_0_length"><label><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div></div><div class="col-md-10"><div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"><div id="DataTables_Table_0_filter" class="dataTables_filter"><label>
                                            <input type="search" class="form-control" placeholder="Search.." aria-controls="DataTables_Table_0" /></label></div><div class="dt-buttons btn-group flex-wrap"> <div class="btn-group"><button class="btn buttons-collection dropdown-toggle btn-label-secondary mx-3" tabindex="0" aria-controls="DataTables_Table_0" type="button" aria-haspopup="dialog" aria-expanded="false"><span><i class="bx bx-export me-1"></i>Export</span></button></div> <button class="btn btn-secondary add-new btn-primary" tabindex="0" aria-controls="DataTables_Table_0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddUser"><span><i class="bx bx-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add New Quizze</span></span></button> </div></div></div></div><table class="datatables-users table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" width="1390px;">
                                                <thead>
                                                    <tr>
                                                        <th class="control sorting_disabled dtr-hidden" rowspan="1" colspan="1" aria-label="">Id</th>

                                                        <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="User: activate to sort column ascending" aria-sort="descending">Name</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="Role: activate to sort column ascending">Start</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="Billing: activate to sort column ascending">End</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="Status: activate to sort column ascending">Duration</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="Status: activate to sort column ascending">Questions</th>

                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="Status: activate to sort column ascending">Marks</th>
                                                        <th class="sorting_disabled" rowspan="1" colspan="1" width="145px;" aria-label="Actions">Actions</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {quizze.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td class="sorting_1">
                                                                <td>{index + 1}</td>
                                                            </td>
                                                            <td>{item.QuizzName}</td>
                                                            <td>{item.QuizzStartTime}</td>
                                                            <td>{item.QuizzEndTime}</td>
                                                            <td>{item.QuizzTestDuration} Minutes</td>
                                                            <td>{item.TotalQuestions}</td>

                                                            <td>{item.TotalMarks}</td>
                                                            <td><div class="d-inline-block text-nowrap">
                                                                <Link to={`/quizzes/${item.id}`} className="navbar-brand" >  <button className="btn btn-sm btn-icon" data-bs-target="#editQuizze" data-bs-toggle="modal">
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
                                            <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add Quizze</h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body mx-0 flex-grow-0">
                                            <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onSubmit={handleSubmit} novalidate="novalidate">
                                                <div class="card-body row">

                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user-fullname">Quizze Name</label>
                                                        <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='QuizzName'
                                                            onChange={(e) => setQuizzName(e.target.value)}
                                                            defaultValue={QuizzName} aria-label="John Doe" />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>



                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user-contact">Quizze Start Time</label>
                                                        <input type="datetime-local" id="add-user-contact" class="form-control phone-mask" placeholder="Quizz Start Time" name="QuizzStartTime"
                                                            onChange={(e) => setQuizzStartTime(e.target.value)}
                                                            value={QuizzStartTime} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user">Quizze End Time</label>
                                                        <input type="datetime-local" id="add-user" class="form-control" placeholder="Quizz End Time" name="QuizzEndTime"
                                                            onChange={(e) => setQuizzEndTime(e.target.value)}
                                                            value={QuizzEndTime} />
                                                    </div>

                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user">Test duration (in Minutes)</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Quizze Test Duration" name="QuizzTestDuration"
                                                            onChange={(e) => setQuizzTestDuration(e.target.value)}
                                                            value={QuizzTestDuration} />
                                                    </div>

                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user">No of Easy Questions (1 Mark)</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Easy Questions" name="EasyQuestions"
                                                            onChange={(e) => setEasyQuestions(e.target.value)}
                                                            value={EasyQuestions} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user">No of Medium Questions (2 Mark)</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Medium Questions" name="MediumQuestions"
                                                            onChange={(e) => setMediumQuestions(e.target.value)}
                                                            value={MediumQuestions} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user"> No of Hard Questions (4 Mark)</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Hard Questions" name="HardQuestions"
                                                            onChange={(e) => setHardQuestions(e.target.value)}
                                                            value={HardQuestions} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user">Total Questions</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Total Questions" name="TotalQuestions"
                                                            value={TotalQuestions} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user">Total Marks</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Total Marks" name="TotalMarks"
                                                            value={TotalMarks} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="add-user">Instructions</label>
                                                        <input type="text" id="add-user" class="form-control" placeholder="Instructions" name="Instructions"
                                                            onChange={(e) => setInstructions(e.target.value)}
                                                            value={Instructions} />
                                                    </div>

                                                    <div className="col-6 fv-plugins-icon-container">
                                                        <label htmlFor="exampleFormControlSelect2" className="form-label">Batch</label>
                                                        <Select
                                                            isMulti
                                                            value={options.filter(option => BatchId.includes(option.value))}
                                                            name="BatchId"
                                                            onChange={handleChange}
                                                            options={options}
                                                            components={animatedComponents}
                                                            inputId="exampleFormControlSelect2"
                                                        />

                                                    </div>
                                                    <div class="col-6 fv-plugins-icon-container">
                                                        <label for="exampleFormControlSelect2" class="form-label">Courses Category</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="QuizzCategoryId" value={QuizzCategoryId} onChange={(e) => setQuizzCategoryId(e.target.value)}>
                                                            <option value="">Select</option>
                                                            {category.map((option) => (
                                                                <option key={option.id} value={option.id}>{option.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div class="col-6 fv-plugins-icon-container">
                                                        <label for="exampleFormControlSelect2" class="form-label">Courses</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="CourseId" value={CourseId} onChange={(e) => setCourseId(e.target.value)}>
                                                            <option value="">Select</option>
                                                            {course.map((option) => (
                                                                <option key={option.id} value={option.id}>{option.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div class="mb-3">
                                                        <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                        <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                                                        <input type="hidden" />
                                                    </div>




                                                </div>
                                                {message && <p style={{ color: 'green' }}>{message}</p>}
                                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/*  /*   <!--  Modal table --> */}
                                <div class="modal fade" id="editQuizze" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-lg modal-simple modal-edit-user">
                                        <div class="modal-content p-3 p-md-5">
                                            <div class="modal-body">
                                                {/*  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div class="text-center mb-4">
                                                    <h3>Batches Information</h3>

                                                </div>
                                                <form id="editUserForm" class="row g-3 fv-plugins-bootstrap5 fv-plugins-framework" onSubmit={handleUpdate} novalidate="novalidate">
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-fullname">Quizze Name</label>
                                                        <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='QuizzName'
                                                            onChange={(e) => setQuizzName(e.target.value)}
                                                            value={QuizzName} aria-label="John Doe" />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>



                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-contact">Quizze Start Time</label>
                                                        <input type="datetime-local" id="add-user-contact" class="form-control phone-mask" placeholder="Quizz Start Time" name="QuizzStartTime"
                                                            onChange={(e) => setQuizzStartTime(e.target.value)}
                                                            value={QuizzStartTime} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Quizze End Time</label>
                                                        <input type="datetime-local" id="add-user" class="form-control" placeholder="Quizz End Time" name="QuizzEndTime"
                                                            onChange={(e) => setQuizzEndTime(e.target.value)}
                                                            value={QuizzEndTime} />
                                                    </div>

                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Quizze Test Duration</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Quizze Test Duration" name="QuizzTestDuration"
                                                            onChange={(e) => setQuizzTestDuration(e.target.value)}
                                                            value={QuizzTestDuration} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Easy Questions</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Easy Questions" name="EasyQuestions"
                                                            onChange={(e) => setEasyQuestions(e.target.value)}
                                                            value={EasyQuestions} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Medium Questions</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Medium Questions" name="MediumQuestions"
                                                            onChange={(e) => setMediumQuestions(e.target.value)}
                                                            value={MediumQuestions} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Hard Questions</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Hard Questions" name="HardQuestions"
                                                            onChange={(e) => setHardQuestions(e.target.value)}
                                                            value={HardQuestions} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Total Questions</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Total Questions" name="TotalQuestions"
                                                            onChange={(e) => setTotalQuestions(e.target.value)}
                                                            value={TotalQuestions} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Total Marks</label>
                                                        <input type="number" id="add-user" class="form-control" placeholder="Total Marks" name="TotalMarks"
                                                            onChange={(e) => setTotalQuestions(e.target.value)}
                                                            value={TotalMarks} />
                                                    </div>
                                                    <div class="col-12 col-md-6 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user">Instructions</label>
                                                        <input type="text" id="add-user" class="form-control" placeholder="Instructions" name="Instructions"
                                                            onChange={(e) => setInstructions(e.target.value)}
                                                            value={Instructions} />
                                                    </div>

                                                    <div className="col-6 fv-plugins-icon-container">
                                                        <label htmlFor="exampleFormControlSelect2" className="form-label">Batch</label>

                                                        <Select
                                                            isMulti
                                                            value={options.filter(option => BatchId.includes(option.value))}
                                                            name="BatchId"
                                                            onChange={handleChange}
                                                            options={options}
                                                            components={animatedComponents}
                                                            inputId="exampleFormControlSelect2"
                                                        />

                                                    </div>
                                                    <div class="col-6 fv-plugins-icon-container">
                                                        <label for="exampleFormControlSelect2" class="form-label">Courses Category</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="QuizzCategoryId" value={QuizzCategoryId} onChange={(e) => setQuizzCategoryId(e.target.value)}>
                                                            <option value="">Select</option>
                                                            {category.map((option) => (
                                                                <option key={option.id} value={option.id}>{option.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div class="col-6 fv-plugins-icon-container">
                                                        <label for="exampleFormControlSelect2" class="form-label">Courses</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="CourseId" value={CourseId} onChange={(e) => setCourseId(e.target.value)}>
                                                            <option value="">Select</option>
                                                            {course.map((option) => (
                                                                <option key={option.id} value={option.id}>{option.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div class="mb-3">
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

export default BatchesUse
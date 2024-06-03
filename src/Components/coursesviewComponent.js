import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';
import { useNavigate, useParams, Link } from 'react-router-dom';
function CoursesP() {
    const { coursecodeId } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [CoursePrice, setCoursePrice] = useState('');
    const [CourseCategoryId, setCourseCategoryId] = useState('');
    const [Couresedata, setCouresedata] = useState([]);
    const [table, setCourse] = useState([]);
    const [category, setCategory] = useState([]);
    const [coursesCount, setCoursesCount] = useState(null);
    const [totalstudent, setTotalstudent] = useState(null);
    const [activeService, setActiveService] = useState(null);
    const [totalBatchesCount, setTotalBatchesCount] = useState(null);
    const toggleDropdown = (id) => {
        setActiveService(prevState => (prevState === id ? null : id));
    };
    useEffect(() => {
        fetchData(coursecodeId);
    }, [coursecodeId]);
    useEffect(() => {
        fetchData2();
    }, []);

    const fetchData = async (coursecodeId) => {
        try {
            if (!coursecodeId) {
                console.log("coursecodeId is undefined");
                return;
            }
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/coursecode/${coursecodeId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.courses;
                setCouresedata(userData);
                setCoursesCount(response.data.coursescount);
                setTotalstudent(response.data.totalStudentCount)
                setTotalBatchesCount(response.data.totalBatchesCount)
                setName(userData.name);
                setCoursePrice(userData.CoursePrice);
                setCourseCategoryId(userData.CourseCategoryId);

            }

        } catch (err) {
            console.log(err.response);
        }
    }

    const fetchData2 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/categories`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.categories;
                setCategory(userDatas)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
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


                            {Couresedata.map((item, index) => (
                                <div class="container-xxl flex-grow-1 container-p-y">



                                    <div class="row g-4 mb-4">
                                        <div class="col-sm-6 col-xl-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex align-items-start justify-content-between">
                                                        <div class="content-left">
                                                            <span>Batches</span>
                                                            <div class="d-flex align-items-end mt-2">

                                                                <h4 class="mb-0 me-2">{totalBatchesCount}</h4>
                                                                <small class="text-success">(+{totalBatchesCount})</small>
                                                            </div>
                                                            <Link to={`/couresbatches/${item.id}`} className="navbar-brand" >
                                                                <button className="btn btn-sm btn-icon rounded-circle" onClick={() => toggleDropdown(item.id)}>
                                                                    <i className="bx bx-plus" ></i>
                                                                </button>
                                                                <p class="mb-0">Total Batche ({totalBatchesCount})</p>
                                                            </Link>
                                                          
                                                        </div>
                                                        <div class="avatar">
                                                            <span class="avatar-initial rounded bg-label-success">
                                                                <i class="bx bx-time-five"></i>
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
                                                            <span>Students</span>
                                                            <div class="d-flex align-items-end mt-2">
                                                                <h4 class="mb-0 me-2">{totalstudent}</h4>
                                                                <small class="text-success">(+{totalstudent})</small>
                                                            </div>
                                                            <Link to={`/couresstudents/${item.id}`} className="navbar-brand" >
                                                                <button className="btn btn-sm btn-icon rounded-circle" onClick={() => toggleDropdown(item.id)}>
                                                                    <i className="bx bx-plus" ></i>
                                                                </button>
                                                                <p class="mb-0">Total Students ({totalstudent})</p>
                                                            </Link>
                                                            
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
                                                            <span>Course</span>
                                                            <div class="d-flex align-items-end mt-2">
                                                                <h4 class="mb-0 me-2">{coursesCount}</h4>
                                                                <small class="text-success">(+{coursesCount})</small>
                                                            </div>
                                                            <Link to="#" className="navbar-brand" >
                                                                <button className="btn btn-sm btn-icon rounded-circle" onClick={() => toggleDropdown(item.id)}>
                                                                    <i className="bx bx-plus" ></i>
                                                                </button>
                                                                <p class="mb-0">Total Course ({coursesCount})</p>
                                                            </Link>
                                                        </div>
                                                        <div class="avatar">
                                                            <span class="avatar-initial rounded bg-label-success">
                                                                <i class="bx bxs-graduation"></i>
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

                                    <div className='col-12 col-xl-12 col-lg-12 col-md-12'>
                                        <div className="card">




                                            <div class="card-header border-bottom" key={item.id}>


                                                <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
                                                    <div class="col-md-6 user_status">
                                                        <img src="../../assets/img/courses.png" alt="Avatar" />
                                                    </div>
                                                    <div class="col-md-5 user_role">

                                                        <div class="card">
                                                            <div class="card-body cus_bdy">
                                                                <div className='flex-column d-flex c_card-title'>
                                                                    <div>
                                                                        <h2 className="c_name">

                                                                            {item.name.toUpperCase()}</h2>
                                                                    </div>
                                                                    <div>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className='c_code'>{item.CourseCode}</h5>
                                                                    </div>
                                                                </div>

                                                                <div class="align-items-start justify-content-between">
                                                                    <div class="content-left">
                                                                        <div class="align-items-end pt-3 pb-3">
                                                                            <div className='row'>
                                                                                <div className='col-md-4'>
                                                                                    <div className='ctype'>
                                                                                        Type:
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-md-8'>
                                                                                    <div className='ctypeanme'>
                                                                                        {item.category && item.category.name}
                                                                                    </div>


                                                                                </div>
                                                                            </div>

                                                                            <div className='row'>
                                                                                <div className='col-md-4'>
                                                                                    <div className='ctype'>
                                                                                        Course Level:
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-md-8'>
                                                                                    <div className='ctypeanme'>


                                                                                        <span class="badge bg-label-success">Online{/* {item.Batches && item.Batches[0].Teacher.TeacherType/* map((item, index) => (item.Teacher.TeacherType)) */}</span>


                                                                                    </div>


                                                                                </div>
                                                                            </div>

                                                                            <div className='row'>
                                                                                <div className='col-md-4'>
                                                                                    <div className='ctype'>
                                                                                        Course Code:
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-md-8'>
                                                                                    <div className='ctypeanme'>


                                                                                        {item.CourseCode}


                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                        </div>







                                                                        <div class="align-items-end pt-3 pb-3">
                                                                            <div className='row'>
                                                                                <div className='col-md-6'>
                                                                                    <div class="content-left cus_btn_std">
                                                                                        <Link to="/students" className="navbar-brand" >
                                                                                            <button className="btn btn-sm btn-icon rounded-circle" onClick={() => toggleDropdown(item.id)}>
                                                                                                <i className="bx bx-plus" ></i>
                                                                                            </button>
                                                                                            Student
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-md-6'>
                                                                                    <div class="content-left cus_btn_std">
                                                                                        <Link to="/batches" className="navbar-brand" >
                                                                                            <button className="btn btn-sm btn-icon" onClick={() => toggleDropdown(item.id)}>
                                                                                                <i className="bx bx-plus"></i>
                                                                                            </button>
                                                                                            Batches
                                                                                        </Link>

                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>



                                        </div>

                                    </div>

                                </div>
                            ))}

                            {/*  <!-- Footer --> */}

                            <Footer />

                            {/*      <!-- / Footer --> */}

                        </div>
                    </div >
                    {/*     <!-- Overlay --> */}
                    <div class="layout-overlay layout-menu-toggle"></div>
                </div >
                {/* / Layout wrapper  */}

            </div >

        </>
    )
}
export default CoursesP

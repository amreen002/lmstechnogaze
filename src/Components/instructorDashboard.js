import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
function InstructorDashboard(token) {
    const [table, setTable] = useState("");
    const [course, setCourse] = useState([]);
    const [coursesCount, setCoursesCount] = useState(null);
    const [totalstudent, setTotalstudent] = useState(null);
    const [totalVideoCount,settotalVideoCount]= useState(null);
    const [activeService, setActiveService] = useState(null);
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get('http://localhost:3000/api/userwisedata', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setTable(response.data);
            }// Updated state variable
        } catch (err) {
            console.log(err.response);
        }
    }
    const fetchData1 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/listcourses`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.courses;
                setCoursesCount(response.data.coursescount);
                setTotalstudent(response.data.totalStudentCount)
                settotalVideoCount(response.data.totalVideoCount)
                setCourse(userDatas)

            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
        fetchData1()
    }, []);

    return(
        <div>
            <section>
                <Navbarmenu />
            </section>

            <div className="dashboard-banner-area-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="dashboard-banner-area-start bg_image">
                        <div className="rating-area-banner-dashboard">
                            <div className="stars">
                                <span>4.5</span>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <p>Digital Marketing Instructor</p>
                            <a href="create-course.html" className="create-btn"><i className="fa-regular fa-circle-plus"></i> Create a New Course</a>
                        </div>
                        <div className="author-profile-image-and-name">
                            <div className="profile-pic">
                                <img src="assets/fontend/images/dashboard/01.png" alt="dashboard" />
                            </div>
                            <div className="name-desig">
                                <h1 className="title">{table.name}</h1>
                                <div className="course-vedio">
                                    <div className="single">
                                        <i className="fa-light fa-users"></i>
                                        <span style={{paddingLeft: "5px"}}>{totalstudent} Students</span>
                                    </div>
                                    <div className="single">
                                        <i className="fa-regular fa-video"></i>
                                        <span style={{paddingLeft: "5px"}}>{totalVideoCount} Course</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="dashboard--area-main pt--100 pt_sm--50">
        <div class="container">
            <div class="row g-5">
            <Sidebar />
                <div class="col-lg-9">
                    <div class="right-sidebar-dashboard">
                        <div class="row g-5">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                             
                                <div class="single-dashboard-card">
                                    <div class="icon">
                                        <i class="fa-light fa-book-open-cover"></i>
                                    </div>
                                    <h5 class="title"><span class="counter">30</span></h5>
                                    <p>Enrolled Courses</p>
                                </div>
                        
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                                <div class="single-dashboard-card">
                                    <div class="icon">
                                        <i class="fa-regular fa-graduation-cap"></i>
                                    </div>
                                    <h5 class="title"><span class="counter">10</span></h5>
                                    <p>Active Courses</p>
                                </div>
                            
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                           
                                <div class="single-dashboard-card">
                                    <div class="icon">
                                        <i class="fa-light fa-trophy"></i>
                                    </div>
                                    <h5 class="title"><span class="counter">36</span></h5>
                                    <p>Completed Courses</p>
                                </div>
                           
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            
                                <div class="single-dashboard-card">
                                    <div class="icon">
                                        <i class="fa-light fa-user"></i>
                                    </div>
                                    <h5 class="title"><span class="counter">{totalstudent}</span></h5>
                                    <p>Total Students</p>
                                </div>
                        
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                             
                                <div class="single-dashboard-card">
                                    <div class="icon">
                                        <i class="fa-light fa-book"></i>
                                    </div>
                                    <h5 class="title"><span class="counter">{coursesCount}</span></h5>
                                    <p>Total Courses</p>
                                </div>
                           
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                           
                                <div class="single-dashboard-card">
                                    <div class="icon">
                                        <i class="fa-sharp fa-solid fa-dollar-sign"></i>
                                    </div>
                                    <h5 class="title">$<span class="counter">2900</span></h5>
                                    <p>Total Earning</p>
                                </div>
                              
                            </div>
                        </div>
                        <div class="row mt--40">
                            <div class="col-lg-12">
                             
                                <div class="in-progress-course-wrapper">
                                    <h5 class="title">In Progress Courses</h5>
                                </div>
                           
                                <div class="single-progress-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/images/dashboard/02.jpg" alt="img" />
                                    </a>
                                    <div class="information-progress-course">
                                        <div class="rating-area">
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <span>(0)</span>
                                        </div>
                                        <a href="single-course.html">
                                            <h5 class="title">User Experience The Ultimate Guide to Usability and UX</h5>
                                        </a>
                                        <span class="comp">Completed Lessons: 0 of 1 lesson</span>
                                        <div class="progress-wrapper-lesson-compleate">
                                            <div class="progress">
                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{width: '0%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                            <div class="end">
                                                <span>0% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                                <div class="single-progress-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/images/dashboard/03.jpg" alt="img" />
                                    </a>
                                    <div class="information-progress-course">
                                        <div class="rating-area">
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <span>(0)</span>
                                        </div>
                                        <a href="single-course.html">
                                            <h5 class="title">Front-End Course With Bootstrap 5</h5>
                                        </a>
                                        <span class="comp">Completed Lessons: 5 of 7 lesson</span>
                                        <div class="progress-wrapper-lesson-compleate">
                                            <div class="progress">
                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                            <div class="end">
                                                <span>80% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                                <div class="single-progress-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/images/dashboard/04.jpg" alt="img" />
                                    </a>
                                    <div class="information-progress-course">
                                        <div class="rating-area">
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <span>(0)</span>
                                        </div>
                                        <a href="single-course.html">
                                            <h5 class="title">PHP Basic to Advance Full Course In English</h5>
                                        </a>
                                        <span class="comp">Completed Lessons: 3 of 6 lesson</span>
                                        <div class="progress-wrapper-lesson-compleate">
                                            <div class="progress">
                                                <div class="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                            <div class="end">
                                                <span>50% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div class="row mt--40">
                            <div class="col-lg-12">
                      
                                <div class="in-progress-course-wrapper  title-between-dashboard mb--10">
                                    <h5 class="title">My Courses</h5>
                                    <a href="#" class="more">View All</a>
                                </div>
                         
                                <div class="my-course-enroll-wrapper-board">
                               
                                    <div class="single-course-inroll-board head">
                                        <div class="name">
                                            <p>My Course</p>
                                        </div>
                                        <div class="enroll">
                                            <p>Enrolled</p>
                                        </div>
                                        <div class="rating">
                                            <p>Rating</p>
                                        </div>
                                    </div>
                                
                                    <div class="single-course-inroll-board">
                                        <div class="name">
                                            <p>New Course</p>
                                        </div>
                                        <div class="enroll">
                                            <p>2</p>
                                        </div>
                                        <div class="rating">
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                        </div>
                                    </div>
                            
                                    <div class="single-course-inroll-board">
                                        <div class="name">
                                            <p>My Course</p>
                                        </div>
                                        <div class="enroll">
                                            <p>0</p>
                                        </div>
                                        <div class="rating">
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                        </div>
                                    </div>
                              
                                    <div class="single-course-inroll-board">
                                        <div class="name">
                                            <p>Test New Course</p>
                                        </div>
                                        <div class="enroll">
                                            <p>2</p>
                                        </div>
                                        <div class="rating">
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                        </div>
                                    </div>
                            
                                    <div class="single-course-inroll-board">
                                        <div class="name">
                                            <p>New Course</p>
                                        </div>
                                        <div class="enroll">
                                            <p>2</p>
                                        </div>
                                        <div class="rating">
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
                                            <i class="fa-light fa-star"></i>
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
    );
}
 
export default InstructorDashboard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
const { REACT_APP_API_ENDPOINT, REACT_APP_API_IMG } = process.env;
function DashboardCard(token) {
    const [table, setTable] = useState("");
    const [course, setCourse] = useState([]);
    const [coursesCount, setCoursesCount] = useState(null);
    const [totalstudent, setTotalstudent] = useState(null);
    const [totalVideoCount, settotalVideoCount] = useState(null);
    const [activeService, setOpenDropdown] = useState(null);
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/userwisedata`, {
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
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/listcourses`, {
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
    // Function to toggle a specific dropdown
    const toggleDropdown = () => {
        setOpenDropdown(!activeService);
    };
    return (


        <div className="dashboard-banner-area-wrapper mt--15">
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
                                <Link to={"/createcourse"} onClick={() => toggleDropdown('create-btn')} className="create-btn"><i className="fa-regular fa-circle-plus"></i> Create a New Class</Link>
                            </div>
                            <div className="author-profile-image-and-name">
                                <div className="profile-pic">
                                    <img src={`${REACT_APP_API_IMG}/uploads/${table.image}`} alt="dashboard" />
                                </div>
                                <div className="name-desig">
                                    <h1 className="title">{table.name}</h1>
                                    <div className="course-vedio">
                                        <div className="single">
                                            <i className="fa-light fa-users"></i>
                                            <span style={{ paddingLeft: "5px" }}>{totalstudent} Students</span>
                                        </div>
                                        <div className="single">
                                            <i className="fa-regular fa-video"></i>
                                            <span style={{ paddingLeft: "5px" }}>{totalVideoCount} Course</span>
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

export default DashboardCard;
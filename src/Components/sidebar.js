import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
const { REACT_APP_API_ENDPOINT, REACT_APP_API_IMG } = process.env;
const Sidebar = () => {
    const handleLogout = async () => {
        try {
            await axios.post(`${REACT_APP_API_ENDPOINT}/logout`); // Send logout request to backend
            localStorage.removeItem('token'); // Remove token from local storage or state
            window.location.href = "/login"
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    const [table, setTable] = useState("");
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
    useEffect(() => {
        fetchData();
    }, []);

    //Dropdown Navigation
    const [activeService, setOpenDropdown] = useState(null);

    // Function to toggle a specific dropdown
    const toggleDropdown = (serviceName) => {
        setOpenDropdown(activeService === serviceName ? '' : serviceName);
    };

    return (

        <div className="col-lg-3 rts-sticky-column-item">

            <div className="left-sindebar-dashboard theiaStickySidebar">
                {table.Role && table.Role.Name === 'Instructor' && (
                    <>
                        <div className="dashboard-left-single-wrapper">

                            <Link to={`/dashboard`} className="single-item active">
                                <i className="fa-light fa-house"></i>
                                <p>Dashboard</p>
                            </Link>


                            {/*           <a href="enroll-course.html" className="single-item">
<i className="fa-light fa-graduation-cap"></i>
<p>Enrolled Courses</p>
</a> */}

                            {/*   <a href="wishlist.html" className="single-item">
<i className="fa-sharp fa-light fa-bookmark"></i>
<p>Wishlist</p>
</a> */}

                            {/*    <a href="reviews.html" className="single-item">
<i className="fa-regular fa-star"></i>
<p>Reviews</p>
</a> */}

                            <Link to={`/instructor/addquize`} className="single-item">
                                <i className="fa-sharp fa-light fa-bullseye-pointer"></i>
                                <p>My Quiz Attempts</p>
                            </Link>
                            {/*   <a href="order-history.html" className="single-item">
<i className="fa-sharp fa-light fa-bag-shopping"></i>
<p>Order History</p>
</a> */}

                            <Link to={`/instructor/viewquize`} className="single-item">
                                <i className="fa-regular fa-circle-question"></i>
                                <p>Question & Answer</p>
                            </Link>

                            <a href="calender.html" className="single-item">
                                <i className="fa-light fa-calendar-days"></i>
                                <p>Calendar</p>
                            </a>

                        </div>

                        <div className="dashboard-left-single-wrapper mt--40">
                            <h4 className="title mb--5">Instructor</h4>

                            <Link to={`/lernerenrollcourse`} className="single-item">
                                <i className="fa-light fa-book"></i>
                                <p>My Class</p>
                            </Link>

                            {/*    <a href="my-bundles.html" className="single-item">
<i className="fa-sharp fa-regular fa-layer-group"></i>
<p>My Bundles</p>
</a> */}

                            {/*  <a href="announcement.html" className="single-item">
<i className="fa-solid fa-megaphone"></i>
<p>Announcements</p>
</a>

<a href="withdrowals.html" className="single-item">
<i className="fa-regular fa-box"></i>
<p>Withdrawals</p>
</a>
*/}
                            <a href="#" className="single-item">
                                <i className="fa-regular fa-page"></i>
                                <p>Assignments</p>
                            </a>

                            {/*   <a href="certificate.html" className="single-item">
<i className="fa-sharp fa-light fa-file-certificate"></i>
<p>Certificate</p>
</a> */}

                        </div>
                        <div className="dashboard-left-single-wrapper bbnone mt--40">
                            <h4 className="title mb--5">User</h4>

                            <a href="#" className="single-item">
                                <i className="fa-sharp fa-regular fa-gear"></i>
                                <p>Settings</p>
                            </a>
                            <a className="single-item" onClick={handleLogout}>
                                <i className="fa-light fa-right-from-bracket"></i>
                                <p>Logout</p>
                            </a>


                        </div>
                    </>
                )}

                {table.Role && table.Role.Name === 'Student' && (
                    <>
                        <div className="dashboard-left-single-wrapper">

                            <Link to={`/dashboard`} className="single-item active">
                                <i className="fa-light fa-house"></i>
                                <p>Dashboard</p>
                            </Link>



                        
                            <Link to={`/student/addquestion`} className="single-item">
                                <i className="fa-sharp fa-light fa-bullseye-pointer"></i>
                                <p>My Quiz Attempts</p>
                            </Link>

                            <Link to={`/student/question`} className="single-item">
                                <i className="fa-regular fa-circle-question"></i>
                                <p>Question & Answer</p>
                            </Link>

                        </div>

                        <div className="dashboard-left-single-wrapper mt--40">
                            <h4 className="title mb--5">Students</h4>

                            <Link to={`/lernerenrollcourse`} className="single-item">
                                <i className="fa-light fa-book"></i>
                                <p>My Class</p>
                            </Link>



                        </div>
                        <div className="dashboard-left-single-wrapper bbnone mt--40">
                            <h4 className="title mb--5">User</h4>

                            <a href="#" className="single-item">
                                <i className="fa-sharp fa-regular fa-gear"></i>
                                <p>Settings</p>
                            </a>
                            <a className="single-item" onClick={handleLogout}>
                                <i className="fa-light fa-right-from-bracket"></i>
                                <p>Logout</p>
                            </a>


                        </div>
                    </>
                )}
            </div>

        </div>

    );
}
export default Sidebar;
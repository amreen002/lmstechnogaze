import React from "react";

const Sidebar = () =>{
return(
   
         <div className="col-lg-3 rts-sticky-column-item">
                    <div className="left-sindebar-dashboard theiaStickySidebar">
                        <div className="dashboard-left-single-wrapper">
                    
                            <a href="dashboard.html" className="single-item active">
                                <i className="fa-light fa-house"></i>
                                <p>Dashboard</p>
                            </a>
                      
                            <a href="my-profile.html" className="single-item">
                                <i className="fa-regular fa-user"></i>
                                <p>My Profile</p>
                            </a>
                     
                            <a href="enroll-course.html" className="single-item">
                                <i className="fa-light fa-graduation-cap"></i>
                                <p>Enrolled Courses</p>
                            </a>
                    
                            <a href="wishlist.html" className="single-item">
                                <i className="fa-sharp fa-light fa-bookmark"></i>
                                <p>Wishlist</p>
                            </a>
                           
                            <a href="reviews.html" className="single-item">
                                <i className="fa-regular fa-star"></i>
                                <p>Reviews</p>
                            </a>
                          
                            <a href="quiz-attempts.html" className="single-item">
                                <i className="fa-sharp fa-light fa-bullseye-pointer"></i>
                                <p>My Quiz Attempts</p>
                            </a>
                     
                            <a href="order-history.html" className="single-item">
                                <i className="fa-sharp fa-light fa-bag-shopping"></i>
                                <p>Order History</p>
                            </a>
                   
                            <a href="question-answer.html" className="single-item">
                                <i className="fa-regular fa-circle-question"></i>
                                <p>Question & Answer</p>
                            </a>
                         
                            <a href="calender.html" className="single-item">
                                <i className="fa-light fa-calendar-days"></i>
                                <p>Calendar</p>
                            </a>
                      
                        </div>
                        <div className="dashboard-left-single-wrapper mt--40">
                            <h4 className="title mb--5">Instructor</h4>
                     
                            <a href="my-course.html" className="single-item">
                                <i className="fa-light fa-book"></i>
                                <p>My Courses</p>
                            </a>
                     
                            <a href="my-bundles.html" className="single-item">
                                <i className="fa-sharp fa-regular fa-layer-group"></i>
                                <p>My Bundles</p>
                            </a>
                       
                            <a href="announcement.html" className="single-item">
                                <i className="fa-solid fa-megaphone"></i>
                                <p>Announcements</p>
                            </a>
                           
                            <a href="withdrowals.html" className="single-item">
                                <i className="fa-regular fa-box"></i>
                                <p>Withdrawals</p>
                            </a>
                     
                            <a href="assignments.html" className="single-item">
                                <i className="fa-regular fa-page"></i>
                                <p>Assignments</p>
                            </a>
                     
                            <a href="certificate.html" className="single-item">
                                <i className="fa-sharp fa-light fa-file-certificate"></i>
                                <p>Certificate</p>
                            </a>
                          
                        </div>
                        <div className="dashboard-left-single-wrapper bbnone mt--40">
                            <h4 className="title mb--5">User</h4>
                       
                            <a href="settings.html" className="single-item">
                                <i className="fa-sharp fa-regular fa-gear"></i>
                                <p>Settings</p>
                            </a>
                       
                            <a href="index-2.html" className="single-item">
                                <i className="fa-light fa-right-from-bracket"></i>
                                <p>Logout</p>
                            </a>
                         
                        </div>
                    </div>
                </div>
    
);
}
export default Sidebar;
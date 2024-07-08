import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashBoardMenu from './dashboardsMenuComponent';

function AddreviewComponent(token) {
 


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
    <DashBoardMenu/>

    <div class="dashboard--area-main pt--100 pt_sm--50">
        <div class="container">
            <div class="row g-5">

            <Sidebar />
             <div class="col-lg-9">
                    <div class="calender-area-wrapper">
                       <h5 className='title'>Review</h5>
                       <table class="table-reviewss">
                            <thead>
                                <tr>
                                    <th style={{width: "30%;"}}>Student</th>
                                    <th style={{width: "30%;"}}>Date</th>
                                    <th>Feedback</th>
                                </tr>
                            </thead>
                            <tbody class="">
                                <tr>
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/01.png" alt="reviews"/>
                                            </div>
                                            <p>Christopher</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">October 29, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: UI/UX Design for Expert</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/02.png" alt="reviews"/>
                                            </div>
                                            <p>Christopher</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">November 28, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: Speaking Korean for Beginners</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/03.png" alt="reviews"/>
                                            </div>
                                            <p>Christopher</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">December 12, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: How to play the Guitar</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/04.png" alt="reviews"/>
                                            </div>
                                            <p>Daniel Jonh</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">January 04, 2024</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: Speaking Korean for Beginners</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/05.png" alt="reviews"/>
                                            </div>
                                            <p>Jennifer Linda</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">October 29, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: UI/UX Design for Expert</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/06.png" alt="reviews"/>
                                            </div>
                                            <p>Jennifer Linda</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">October 29, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: UI/UX Design for Expert</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/07.png" alt="reviews"/>
                                            </div>
                                            <p>Daniel Jonh</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">January 04, 2024</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: UI/UX Design for Expert</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/08.png" alt="reviews"/>
                                            </div>
                                            <p>James Robert</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">October 29, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: UI/UX Design for Expert</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/09.png" alt="reviews"/>
                                            </div>
                                            <p>Daniel Jonh</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">October 29, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: UI/UX Design for Expert</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/10.png" alt="reviews"/>
                                            </div>
                                            <p>James Robert</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">October 29, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: UI/UX Design for Expert</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="author-area">
                                            <div class="profile-picture">
                                                <img src="assets/fontend/images/dashboard/reviews/11.png" alt="reviews"/>
                                            </div>
                                            <p>James Robert</p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="date">October 29, 2023</span>
                                    </td>
                                    <td>
                                        <span class="name">Course: UI/UX Design for Expert</span>
                                        <div class="stars">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp-half"></i>
                                            <span>(10 Review)</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
}
 
export default AddreviewComponent;
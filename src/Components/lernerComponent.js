import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashboardCard from './dashboardcardComponent';
function LernerComponent(token) {

    return(
        <div>
            <section>
                <Navbarmenu />
            </section>

       <DashboardCard/>
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
                                {/* <!-- single dashboard-card end --> */}
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                {/* <!-- single dashboard-card --> */}
                                <div class="single-dashboard-card">
                                    <div class="icon">
                                        <i class="fa-light fa-trophy"></i>
                                    </div>
                                    <h5 class="title"><span class="counter">36</span></h5>
                                    <p>Completed Courses</p>
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
 
export default LernerComponent;
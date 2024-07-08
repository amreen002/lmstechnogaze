
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashboardCard from './dashboardcardComponent';
function AssignmentdetailComponent(token) {



    return (
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
                            <div class="rts-reviewd-area-dashed table-responsive" style={{ backgroundColor: '#fff' }}>
                            <div class="course-top-enroll-area">
                        <div class="single-course-top">
                           <span>Assignment</span>
                        </div>
                        <div class="single-course-top">
                            <span>Assignment Name : <p>New Courses</p></span>
                        </div>
                        <div class="single-course-top">
                        <span>Date / Time
                            <p>November 28, 2023</p>
                            9:20 pm
                            </span>
                        </div>
                    </div>

                    <div class="course-details-btn-wrapper materials full-width pb--50">
                       <h5>Course Details</h5> 
                    </div>
                    <div className='py-5'>
                        <div className='flex-row d-flex' >
                        <div className='flex-row d-flex'>
                       <div className='mt-1'><h6>Course :</h6></div> 
                         <div className='ml--10'>Read(12)</div>

                        </div>
                        <div className='flex-row d-flex ml--40'>
                       <div className='mt-1'><h6>Course :</h6></div> 
                         <div className='ml--10'>Read(12)</div>

                        </div>
                        </div>
                        <div className='mt-4'>
                        <div className='flex-row d-flex'>
                       <div className='mt-1'><h6>Total Marks :</h6></div> 
                         <div className='ml--10'>25</div>

                        </div>
                        </div>
                        <div className='mt-4'>
                        <div className='flex-row d-flex'>
                       <div className='mt-1'><h6>Total Submit :</h6></div> 
                         <div className='ml--10'>25</div>

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

export default AssignmentdetailComponent;
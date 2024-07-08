import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashBoardMenu from './dashboardsMenuComponent';
function AddassignmentComponent(token) {
  

    return (
        <div>
            <section>
                <Navbarmenu />
            </section>

      
            <DashBoardMenu/>

            <div class="dashboard--area-main pt--100 pt_sm--50">
                <div class="container">
                    <div class="row g-5">
                        <Sidebar />
                        <div class="col-lg-9">
                            <div class="exrolled-course-wrapper-dashed" style={{ backgroundColor: '#fff' }}>
                                <h5 class="title">Add Assignment</h5>
                                <hr />
                                <div className='mt-5'>
                                    <div className='row'>
                                        <div className='col-12 col-md-1 col-xl-1 col-lg-1'>

                                        </div>
                                        <div className='col-12 col-md-10 col-xl-10 col-lg-10'>
                                            <div className='text-center'>
                                                <h2>Assignment Title</h2>
                                                <input className='inputts' type='text' />
                                               
                                                <div className='row' style={{justifyContent:'space-between'}}>
                                                <div className='col-12 col-xl-6 col-md-6 col-lg-6'>
                                                <div className='flex-row d-flex mt-4'>
                                                    <span className='mt-1'>Course</span>
                                                    <select class="nice-select inputts ml--10" name="price" >
                                                        <option>Read (12)</option>
                                                        <option value="asc">Stars (30)</option>
                                                        <option value="desc">Comments(42)</option>
                                                        <option value="pop">Popularity (20)</option>
                                                        <option value="low">Questions & Ans (10)</option>
                                                        <option value="high">Stars (52)</option>
                                                    </select>
                                                </div>
                                                </div>
                                                <div className='col-12 col-xl-6 col-md-6 col-lg-6'>
                                                <div className='flex-row d-flex mt-4'>
                                                    <span className='mt-1'>Course</span>
                                                    <select class="nice-select inputts ml--10" name="price" >
                                                        <option>Read (12)</option>
                                                        <option value="asc">Stars (30)</option>
                                                        <option value="desc">Comments(42)</option>
                                                        <option value="pop">Popularity (20)</option>
                                                        <option value="low">Questions & Ans (10)</option>
                                                        <option value="high">Stars (52)</option>
                                                    </select>
                                                </div>
                                                </div> 
                                                </div>
                                                <div className='row'>
                                                <div className='col-12 col-xl-6 col-md-6 col-lg-6'>
                                                        <div className='row mt-4'>
                                                        <div className='col-12 col-xl-3 col-md-3 col-lg-3'>
                                                            <span>Assignments</span>
                                                        </div>
                                                        <div className='col-12 col-xl-9 col-md-9 col-lg-9'>
                                                        <input  type='number' className='inputts'/>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-xl-6 col-md-6 col-lg-6'>
                                                        <div className='row mt-4'>
                                                        <div className='col-12 col-xl-3 col-md-3 col-lg-3'>
                                                            <span>Total Marks</span>
                                                        </div>
                                                        <div className='col-12 col-xl-9 col-md-9 col-lg-9'>
                                                        <input  type='number' className='inputts'/>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div  className='col-12 col-xl-6 col-md-6 col-lg-6'>
                                                    <div className='flex-row d-flex mt-4'>
                                                            <span className='mt-1'>Date </span>
                                                            <input type='date' className='inputts ml--10' />
                                                        </div>
                                                </div>
                                                   
                                                </div>
                                                <div className='row mt-5'>
                                                <div className='col-12 col-md-9 col-xl-9 col-lg-9'>

                                                </div>
                                                <div className='col-12 col-md-3 col-xl-3 col-lg-3'>
                                                <Link to={'/assignment'}><button class="rts-btn btn-border">Submit</button></Link>
                                                </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-1 col-xl-1 col-lg-1'>

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

export default AddassignmentComponent;
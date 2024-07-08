

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import PopupComponent from './popupComponent';
import DashboardCard from './dashboardcardComponent';
function AssignmentComponent(token) {


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
            <div class="announcements-wrapper-dashed rts-reviewd-area-dashed table-responsive" style={{whiteSpace: "nowrap", backgroundColor:'#fff'}}>
                        <h5 class="title">Assignment</h5>
                        <div class="course-short-by-date-wrapper">
                            <div class="single-course-filter">
                                <span>Course</span>
                                <div class="nice-select-wrap"><select class="nice-select" name="price"  style={{display: 'none'}}>
                                    <option>Read (12)</option>
                                    <option value="asc">Stars (30)</option>
                                    <option value="desc">Comments(42)</option>
                                    <option value="pop">Popularity (20)</option>
                                    <option value="low">Questions &amp; Ans (10)</option>
                                    <option value="high">Stars (52)</option>
                                </select><a href="#" class="drop">Read (12)</a><ul id="price"  style={{display: 'none'}}><li><a href="#" id="asc">Stars (30)</a></li><li><a href="#" id="desc">Comments(42)</a></li><li><a href="#" id="pop">Popularity (20)</a></li><li><a href="#" id="low">Questions &amp; Ans (10)</a></li><li><a href="#" id="high">Stars (52)</a></li></ul></div>
                            </div>
                            <div class="single-course-filter short-by">
                                <span>Course</span>
                            <div class="nice-select-wrap"><select class="nice-select" name="price" style={{display: 'none'}}>
                                    <option>Read (12)</option>
                                    <option value="asc">Stars (30)</option>
                                    <option value="desc">Comments(42)</option>
                                    <option value="pop">Popularity (20)</option>
                                    <option value="low">Questions &amp; Ans (10)</option>
                                    <option value="high">Stars (52)</option>
                                </select><a href="#" class="drop">Read (12)</a><ul id="price"  style={{display: 'none'}}><li><a href="#" id="asc">Stars (30)</a></li><li><a href="#" id="desc">Comments(42)</a></li><li><a href="#" id="pop">Popularity (20)</a></li><li><a href="#" id="low">Questions &amp; Ans (10)</a></li><li><a href="#" id="high">Stars (52)</a></li></ul></div>
                            </div>
                            <div class="single-course-filter short-by">
                                <span>Date</span>
                                <div class="date-picker-area">
                                    <input placeholder="Select your date" type="text" name="checkIn" id="datepicker" value="mm/dd/yyyy" class="calendar hasDatepicker"/>
                                    <i class="fa-light fa-calendar-lines-pen"></i>
                                </div>
                            </div>
                        </div>
                        <table class="table-reviews quiz mt--30">
                            <thead>
                                <tr>
                                    <th style={{width: "40%;"}}>Assignment Name</th>
                                    <th style={{width :'20%'}}>Total Marks</th>
                                    <th>Total Submit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">6</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">9</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">3</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">2</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">15</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">8</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">10</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">3</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">20</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">10</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">22</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">6</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">12</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">5</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">8</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">2</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">8</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">5</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="information-quiz">
                                            <p class="quiz">Assignment</p>
                                            <p>Course: <span style={{color:"#553CDF"}}>New Course</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="questions">18</span>
                                    </td>
                                    <td>
                                        <div class="betweena-area-assignment">
                                            <span class="marks">2</span>
                                            <Link to={'/assignmentdetail'}><button class="rts-btn btn-border">Details</button></Link>
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

export default AssignmentComponent;
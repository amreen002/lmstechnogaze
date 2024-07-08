
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashboardCard from './dashboardcardComponent';
function InstructororderhistoryComponent(token) {

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
            <div class="rts-reviewd-area-dashed table-responsive" style={{backgroundColor:'#fff'}}>

<div class="calender-and-tab-btn-between">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="  active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Today</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Monthly</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Yearly</button>
        </li>
    </ul>

    <div class="date-picker-area">
        <input placeholder="Select your date" type="date" name="checkIn" id="datepicker"  class="calendar"/>
    </div>
</div>


<div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <h5 class="title">Order History</h5>
        <table class="table-reviews quiz mb--0">
            <thead>
                <tr>
                <th style={{width: "10%;"}}>Order ID</th>
                    <th style={{width: "35%;"}}>Course Name</th>
                    <th style={{width: "20%;"}}>Date</th>
                    <th style={{width: "10%;"}}>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Character Illustration Guide</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#5644</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Web Design test</span>
                    </td>
                    <td>
                        <span class="marks">November 29, 2023</span>
                    </td>
                    <td>
                        <span >$69.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4487</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Become a Video Editing Pro</span>
                    </td>
                    <td>
                        <span class="marks">November 30, 2023</span>
                    </td>
                    <td>
                        <span >$49.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#2159</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Freelance Content Writing</span>
                    </td>
                    <td>
                        <span class="marks">December 11, 2023</span>
                    </td>
                    <td>
                        <span >$79.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#1473</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Content Writing</span>
                    </td>
                    <td>
                        <span class="marks">December 12, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#6548</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">New Course</span>
                    </td>
                    <td>
                        <span class="marks">November 14, 2023</span>
                    </td>
                    <td>
                        <span >$99.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#6541</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">UI/UX Design</span>
                    </td>
                    <td>
                        <span class="marks">December 15, 2023</span>
                    </td>
                    <td>
                        <span >$29.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#2397</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Web Development</span>
                    </td>
                    <td>
                        <span class="marks">December 17, 2023</span>
                    </td>
                    <td>
                        <span >$39.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#7845</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Business & Finance</span>
                    </td>
                    <td>
                        <span class="marks">December 19, 2023</span>
                    </td>
                    <td>
                        <span >$79.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#9548</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Marketing</span>
                    </td>
                    <td>
                        <span class="marks">December 21, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Art & Dancing</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Graphic Design</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Film & Video Graphic</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="success">Success</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Accounting</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Personal Skill</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Language Skill</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Character Illustration Guide</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <h5 class="title">Order History</h5>
        <table class="table-reviews quiz">
            <thead>
                <tr>
                    <th style={{width: "10%;"}}>Order ID</th>
                    <th style={{width: "35%;"}}>Course Name</th>
                    <th style={{width: "20%;"}}>Date</th>
                    <th style={{width: "10%;"}}>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Character Illustration Guide</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#5644</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Web Design test</span>
                    </td>
                    <td>
                        <span class="marks">November 29, 2023</span>
                    </td>
                    <td>
                        <span >$69.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4487</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Become a Video Editing Pro</span>
                    </td>
                    <td>
                        <span class="marks">November 30, 2023</span>
                    </td>
                    <td>
                        <span >$49.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#2159</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Freelance Content Writing</span>
                    </td>
                    <td>
                        <span class="marks">December 11, 2023</span>
                    </td>
                    <td>
                        <span >$79.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#1473</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Content Writing</span>
                    </td>
                    <td>
                        <span class="marks">December 12, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#6548</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">New Course</span>
                    </td>
                    <td>
                        <span class="marks">November 14, 2023</span>
                    </td>
                    <td>
                        <span >$99.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#6541</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">UI/UX Design</span>
                    </td>
                    <td>
                        <span class="marks">December 15, 2023</span>
                    </td>
                    <td>
                        <span >$29.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#2397</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Web Development</span>
                    </td>
                    <td>
                        <span class="marks">December 17, 2023</span>
                    </td>
                    <td>
                        <span >$39.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#7845</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Business & Finance</span>
                    </td>
                    <td>
                        <span class="marks">December 19, 2023</span>
                    </td>
                    <td>
                        <span >$79.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#9548</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Marketing</span>
                    </td>
                    <td>
                        <span class="marks">December 21, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Art & Dancing</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Graphic Design</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Film & Video Graphic</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="success">Success</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Accounting</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Personal Skill</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Language Skill</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Character Illustration Guide</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <h5 class="title">Order History</h5>
        <table class="table-reviews quiz">
            <thead>
                <tr>
                    <th style={{width: "10%;"}}>Order ID</th>
                    <th style={{width: "35%;"}}>Course Name</th>
                    <th style={{width: "20%;"}}>Date</th>
                    <th style={{width: "10%;"}}>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Character Illustration Guide</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#5644</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Web Design test</span>
                    </td>
                    <td>
                        <span class="marks">November 29, 2023</span>
                    </td>
                    <td>
                        <span >$69.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4487</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Become a Video Editing Pro</span>
                    </td>
                    <td>
                        <span class="marks">November 30, 2023</span>
                    </td>
                    <td>
                        <span >$49.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#2159</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Freelance Content Writing</span>
                    </td>
                    <td>
                        <span class="marks">December 11, 2023</span>
                    </td>
                    <td>
                        <span >$79.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#1473</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Content Writing</span>
                    </td>
                    <td>
                        <span class="marks">December 12, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#6548</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">New Course</span>
                    </td>
                    <td>
                        <span class="marks">November 14, 2023</span>
                    </td>
                    <td>
                        <span >$99.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#6541</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">UI/UX Design</span>
                    </td>
                    <td>
                        <span class="marks">December 15, 2023</span>
                    </td>
                    <td>
                        <span >$29.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#2397</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Web Development</span>
                    </td>
                    <td>
                        <span class="marks">December 17, 2023</span>
                    </td>
                    <td>
                        <span >$39.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#7845</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Business & Finance</span>
                    </td>
                    <td>
                        <span class="marks">December 19, 2023</span>
                    </td>
                    <td>
                        <span >$79.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="processing">Processing</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#9548</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Marketing</span>
                    </td>
                    <td>
                        <span class="marks">December 21, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Art & Dancing</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Graphic Design</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Film & Video Graphic</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="success">Success</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Accounting</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Personal Skill</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Language Skill</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="information-quiz">
                            <p class="quiz">#4601</p>
                        </div>
                    </td>
                    <td>
                        <span class="questions">Character Illustration Guide</span>
                    </td>
                    <td>
                        <span class="marks">November 28, 2023</span>
                    </td>
                    <td>
                        <span >$59.99</span>
                    </td>
                    <td>
                        <div class="hold-area">
                            <span class="hold">On Hold</span>
                            <span class="hold-i"><i class="fa-regular fa-clipboard-list"></i></span>
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
      </div>

    </div>
  );
}

export default InstructororderhistoryComponent;
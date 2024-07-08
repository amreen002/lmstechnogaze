import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashboardCard from './dashboardcardComponent';

function StudentaddsettingComponent() {


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
            <div class="settings-wrapper-dashed" style={{backgroundColor:'#fff'}}>
                        <h5 class="title">Settings</h5>
                        <ul class="nav nav-pills mb-3 tab-buttons" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class=" active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Profile</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class=" " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Password</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div class="social-profile-link-wrapper">
                                    <h5 class="title">Social Profile Link</h5>
                                    <div class="single-profile-wrapper">
                                        <div class="left">
                                            <div class="icon">
                                                <i class="fa-brands fa-facebook-f"></i>
                                                <span>Facebook</span>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <input type="text" placeholder="https://www.facebook.com/username"/>
                                        </div>
                                    </div>
                                    <div class="single-profile-wrapper">
                                        <div class="left">
                                            <div class="icon">
                                                <i class="fa-brands fa-skype"></i>
                                                <span>Skype</span>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <input type="text" placeholder="https://www. skype.com/username"/>
                                        </div>
                                    </div>
                                    <div class="single-profile-wrapper">
                                        <div class="left">
                                            <div class="icon">
                                                <i class="fa-brands fa-linkedin"></i>
                                                <span>LinkedIn </span>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <input type="text" placeholder="https://www.linkedin.com/username"/>
                                        </div>
                                    </div>
                                    <div class="single-profile-wrapper">
                                        <div class="left">
                                            <div class="icon">
                                                <i class="fa-brands fa-pinterest"></i>
                                                <span>Pinterest</span>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <input type="text" placeholder="https://www.pinterest.com/username"/>
                                        </div>
                                    </div>
                                    <div class="single-profile-wrapper">
                                        <div class="left">
                                            <div class="icon">
                                                <i class="fa-brands fa-github"></i>
                                                <span>Github</span>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <input type="text" placeholder="https://www.github.com/username"/>
                                        </div>
                                    </div>
                                    <a href="#" class="rts-btn btn-primary">Save Profile</a>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div class="setting-change-password-area">
                                    <form action="#" class="form-password-area">
                                       
                                        <div class="single-input">
                                            <label for="new">Enter Password</label>
                                            <input id="new" type="password" placeholder="Enter Password" required/>
                                        </div>
                                        <div class="single-input">
                                            <label for="Current-2">Re-type Password</label>
                                            <input id="Current-2" type="password" placeholder="Re-type Password"/>
                                        </div>
                                        <button class="rts-btn btn-primary">Save Password</button>
                                    </form>
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

export default StudentaddsettingComponent;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import DashboardCard from './dashboardcardComponent';
function LernerstudentprofileComponent(token) {
   
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
            <div class="col-lg-9  rts-sticky-column-item" >
                    <div class="right-sidebar-my-profile-dash theiaStickySidebar pt--30" style={{backgroundColor:'#fff'}}>
                        <h5 class="title">My Profile</h5>
                        <hr/>
                        {/* <!-- single My portfolio start--> */}
                        <div class="my-single-portfolio-dashed">
                            <div class="name">Registration Date</div>
                            <div class="value">February 25, 2022 6:01 am</div>
                        </div>
                       
                        <div class="my-single-portfolio-dashed">
                            <div class="name">First Name:</div>
                            <div class="value">Jon Adam</div>
                        </div>
                   
                        <div class="my-single-portfolio-dashed">
                            <div class="name">Last Name:</div>
                            <div class="value">Caster</div>
                        </div>
                     
                        <div class="my-single-portfolio-dashed">
                            <div class="name">Username:</div>
                            <div class="value">jonadam</div>
                        </div>
                      
                 
                        <div class="my-single-portfolio-dashed">
                            <div class="name">Email:</div>
                            <div class="value">studyhub@ino.com</div>
                        </div>
                       
                        <div class="my-single-portfolio-dashed">
                            <div class="name">Phone Number:</div>
                            <div class="value">February 25, 2022 6:01 am</div>
                        </div>
                        {/* <!-- single My portfolio end--> */}
                        {/* <!-- single My portfolio start--> */}
                        <div class="my-single-portfolio-dashed">
                            <div class="name">Skill/Occupation</div>
                            <div class="value">Full Stack Developer</div>
                        </div>
                        {/* <!-- single My portfolio end--> */}
                        {/* <!-- single My portfolio start--> */}
                        <div class="my-single-portfolio-dashed">
                            <div class="name">Biography</div>
                            <div class="value">I have a degree in Journalism with over 15 years of work experience in the field.
                                Throughout the years, I have worked in several well-known institutions and in published several books on Journalism that are available on Amazon.</div>
                        </div>
                        {/* <!-- single My portfolio end--> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
}
 
export default LernerstudentprofileComponent;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Sidebar from "./sidebar";
import PopupComponent from './popupComponent';
import DashboardCard from './dashboardcardComponent';
function StudentwishlistComponent(token) {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };



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
                    <div class="exrolled-course-wrapper-dashed" style={{backgroundColor:'#fff'}}>
                        <h5 class="title">Wishlist</h5>
                        <div class="row g-5">
                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="rts-single-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/fontend/images/course/01.jpg" alt="course"/>
                                    </a>
                                    <div class="save-icon">
                                        <i class="fa-sharp fa-light fa-bookmark" onClick={openPopup} ></i>
                                      
                                        
                                    </div>
                                    <div class="tags-area-wrapper">
                                        <div class="single-tag">
                                            <span>Web Development</span>
                                        </div>
                                    </div>
                                    <div class="lesson-studente">
                                        <div class="lesson">
                                            <i class="fa-light fa-calendar-lines-pen"></i>
                                            <span>25 Lessons</span>
                                        </div>
                                        <div class="lesson">
                                            <i class="fa-light fa-user-group"></i>
                                            <span>54 Students</span>
                                        </div>
                                    </div>
                                    <a href="single-course.html">
                                        <h5 class="title">The Complete Web Developer in
                                            2023: Zero to Mastery</h5>
                                    </a>
                                    <p class="teacher">Dr. Angela Yu</p>
                                    <div class="rating-and-price">
                                        <div class="rating-area">
                                            <span>4.5</span>
                                            <div class="stars">
                                                <ul>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="price-area">
                                            <div class="price">
                                                $79.99
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="rts-single-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/fontend/images/course/02.jpg" alt="course"/>
                                    </a>
                                    <div class="save-icon" >
                                        <i class="fa-sharp fa-light fa-bookmark" onClick={openPopup}></i>
                                    </div>
                                    <div class="tags-area-wrapper">
                                        <div class="single-tag">
                                            <span>Web Development</span>
                                        </div>
                                    </div>
                                    <div class="lesson-studente">
                                        <div class="lesson">
                                            <i class="fa-light fa-calendar-lines-pen"></i>
                                            <span>25 Lessons</span>
                                        </div>
                                        <div class="lesson">
                                            <i class="fa-light fa-user-group"></i>
                                            <span>54 Students</span>
                                        </div>
                                    </div>
                                    <a href="single-course.html">
                                        <h5 class="title">The Complete Web Developer in
                                            2023: Zero to Mastery</h5>
                                    </a>
                                    <p class="teacher">Dr. Angela Yu</p>
                                    <div class="rating-and-price">
                                        <div class="rating-area">
                                            <span>4.5</span>
                                            <div class="stars">
                                                <ul>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="price-area">
                                            <div class="price">
                                                $79.99
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="rts-single-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/fontend/images/course/03.jpg" alt="course"/>
                                    </a>
                                    <div class="save-icon" >
                                        <i class="fa-sharp fa-light fa-bookmark" onClick={openPopup}></i>
                                    </div>
                                    <div class="tags-area-wrapper">
                                        <div class="single-tag">
                                            <span>Web Development</span>
                                        </div>
                                    </div>
                                    <div class="lesson-studente">
                                        <div class="lesson">
                                            <i class="fa-light fa-calendar-lines-pen"></i>
                                            <span>25 Lessons</span>
                                        </div>
                                        <div class="lesson">
                                            <i class="fa-light fa-user-group"></i>
                                            <span>54 Students</span>
                                        </div>
                                    </div>
                                    <a href="single-course.html">
                                        <h5 class="title">The Complete Web Developer in
                                            2023: Zero to Mastery</h5>
                                    </a>
                                    <p class="teacher">Dr. Angela Yu</p>
                                    <div class="rating-and-price">
                                        <div class="rating-area">
                                            <span>4.5</span>
                                            <div class="stars">
                                                <ul>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="price-area">
                                            <div class="price">
                                                $79.99
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="rts-single-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/fontend/images/course/04.jpg" alt="course"/>
                                    </a>
                                    <div class="save-icon">
                                        <i class="fa-sharp fa-light fa-bookmark" onClick={openPopup}></i>
                                    </div>
                                    <div class="tags-area-wrapper">
                                        <div class="single-tag">
                                            <span>Web Development</span>
                                        </div>
                                    </div>
                                    <div class="lesson-studente">
                                        <div class="lesson">
                                            <i class="fa-light fa-calendar-lines-pen" onClick={openPopup}></i>
                                            <span>25 Lessons</span>
                                        </div>
                                        <div class="lesson">
                                            <i class="fa-light fa-user-group"></i>
                                            <span>54 Students</span>
                                        </div>
                                    </div>
                                    <a href="single-course.html">
                                        <h5 class="title">The Complete Web Developer in
                                            2023: Zero to Mastery</h5>
                                    </a>
                                    <p class="teacher">Dr. Angela Yu</p>
                                    <div class="rating-and-price">
                                        <div class="rating-area">
                                            <span>4.5</span>
                                            <div class="stars">
                                                <ul>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="price-area">
                                            <div class="price">
                                                $79.99
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="rts-single-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/fontend/images/course/05.jpg" alt="course"/>
                                    </a>
                                    <div class="save-icon" >
                                        <i class="fa-sharp fa-light fa-bookmark" onClick={openPopup}></i>
                                    </div>
                                    <div class="tags-area-wrapper">
                                        <div class="single-tag">
                                            <span>Web Development</span>
                                        </div>
                                    </div>
                                    <div class="lesson-studente">
                                        <div class="lesson">
                                            <i class="fa-light fa-calendar-lines-pen"></i>
                                            <span>25 Lessons</span>
                                        </div>
                                        <div class="lesson">
                                            <i class="fa-light fa-user-group"></i>
                                            <span>54 Students</span>
                                        </div>
                                    </div>
                                    <a href="single-course.html">
                                        <h5 class="title">The Complete Web Developer in
                                            2023: Zero to Mastery</h5>
                                    </a>
                                    <p class="teacher">Dr. Angela Yu</p>
                                    <div class="rating-and-price">
                                        <div class="rating-area">
                                            <span>4.5</span>
                                            <div class="stars">
                                                <ul>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="price-area">
                                            <div class="price">
                                                $79.99
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="rts-single-course">
                                    <a href="single-course.html" class="thumbnail">
                                        <img src="assets/fontend/images/course/06.jpg" alt="course"/>
                                    </a>
                                    <div class="save-icon">
                                        <i class="fa-sharp fa-light fa-bookmark" onClick={openPopup}></i>
                                    </div>
                                    <div class="tags-area-wrapper">
                                        <div class="single-tag">
                                            <span>Web Development</span>
                                        </div>
                                    </div>
                                    <div class="lesson-studente">
                                        <div class="lesson">
                                            <i class="fa-light fa-calendar-lines-pen"></i>
                                            <span>25 Lessons</span>
                                        </div>
                                        <div class="lesson">
                                            <i class="fa-light fa-user-group"></i>
                                            <span>54 Students</span>
                                        </div>
                                    </div>
                                    <a href="single-course.html">
                                        <h5 class="title">The Complete Web Developer in
                                            2023: Zero to Mastery</h5>
                                    </a>
                                    <p class="teacher">Dr. Angela Yu</p>
                                    <div class="rating-and-price">
                                        <div class="rating-area">
                                            <span>4.5</span>
                                            <div class="stars">
                                                <ul>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-regular fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="price-area">
                                            <div class="price">
                                                $79.99
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
      {isPopupOpen &&   
      <div className=' login-pupup-modal  modal-backdropss  'tabindex="-1" aria-labelledby="exampleModalLabel" style={{display: 'block', paddingRight: '17px'}} aria-modal="true" role="dialog">
      <div className=' modal-dialog modalz'>
                                     <PopupComponent closePopup={closePopup} />

                                        </div></div>
                                        }
    </div>
  );
}

export default StudentwishlistComponent;
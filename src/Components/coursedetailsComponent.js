import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link, } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import Footer from "./FooterFrontend";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const { REACT_APP_API_ENDPOINT ,REACT_APP_API_IMG} = process.env;

function CoursedetailsComponent() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true, // to enable automatic sliding
        autoplaySpeed: 500, // speed of autoplay
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true, // to enable center mode
        centerPadding: "70px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 365,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }
        ] // ad
    };
    const [courses, setCourse] = useState([]);
    const [totalLessionCount, settotalLessionCount] = useState(null);
    const [totalStudentCount, settotalStudentCount] = useState(null);
    const [Lastupdated, setLastupdated] = useState(null);
    const [CoureseFindOne, setCoureseFindOne] = useState({});
    const { coursesId } = useParams();
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        fetchData1(coursesId);
    }, [coursesId]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${REACT_APP_API_ENDPOINT}/courses`);
            const userDatas = response.data.courses;
            settotalLessionCount(response.data.totalLessionCount)
            settotalStudentCount(response.data.totalStudentCount)
            setLastupdated(response.data.Lastupdated)
            setCourse(userDatas)


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchData1 = async (coursesId) => {
        try {
            if (!coursesId) {
                console.log("coursesId is undefined");
                return;
            }

            const response = await axios.get(`${REACT_APP_API_ENDPOINT}/courses/${coursesId}`);
            const userData = response.data.courses;
            setCoureseFindOne(userData);
            settotalLessionCount(response.data.totalLessionCount)
            settotalStudentCount(response.data.totalStudentCount)
            setLastupdated(response.data.Lastupdated)


        } catch (err) {
            console.log(err.response);
        }
    }
    const [isExpanded, setIsExpanded] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const toggleDropdown = (id) => {
        setIsExpanded(isExpanded === id ? null : id);
    };

    const openModal = (video) => {
        setModalContent(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };
    return (
        <>
            <section>
                <Navbarmenu />
            </section>

            <div className="course-details-breadcrumb-1 bg_image rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-course-left-align-wrapper">
                                <div className="meta-area">
                                    <a href="index-2.html">Home</a>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <a className="active" href="#">Course Details</a>
                                </div>
                                <h1 className="title">
                                    {CoureseFindOne.name}  2024: Zero to Mastery
                                </h1>
                                <div className="rating-area">
                                    <div className="stars-area">
                                        <span>4.5</span>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className="students">
                                        <i className="fa-thin fa-users"></i>
                                        <span> {totalStudentCount} Students</span>
                                    </div>
                                    <div className="calender-area-stars">
                                        <i className="fa-light fa-calendar-lines-pen"></i>
                                        <span>Last updated {Lastupdated}</span>
                                    </div>
                                </div>
                                <div className="author-area">
                                    <p> <span>Categories: </span>  {CoureseFindOne.category && CoureseFindOne.category.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- course details area start --> */}
            <div className="rts-course-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8 order-cl-1 order-lg-1 order-md-2 order-sm-2 order-2">
                            <div className="course-details-btn-wrapper pb--50">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Course Information</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Course Content</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Instructor</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contacts-tab" data-bs-toggle="tab" data-bs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Review</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content tabcnt mt--50" id="myTabContent">
                                <div className="tab-pane fade  show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="course-content-wrapper">
                                        <h5 className="title">About Course</h5>
                                        <p className="disc">
                                            {CoureseFindOne.AboutCourse}
                                        </p>
                                        <h5 className="title">Description</h5>
                                        <p className="disc">
                                            {CoureseFindOne.Description}
                                        </p>
                                        <p className="disc">
                                            {CoureseFindOne.Description}
                                        </p>
                                        <p className="disc">
                                            {CoureseFindOne.Description}
                                        </p>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="course-content-wrapper-main">
                                        <h5 className="title">Course Content</h5>

                                        {/* <!-- course content accordion area --> */}
                                        <div className="accordion mt--30" id="accordionExample">


                                            <div className="accordion-item">
                                                {CoureseFindOne.topics && Array.isArray(CoureseFindOne.topics) ? (
                                                    CoureseFindOne.topics.map((topic) => (
                                                        <div key={topic.id}>
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button
                                                                    className="accordion-button"
                                                                    onClick={() => toggleDropdown(`collapse${topic.id}`)}
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target={`#collapse${topic.id}`}
                                                                    aria-expanded={isExpanded === `collapse${topic.id}`}
                                                                    aria-controls={`collapse${topic.id}`}
                                                                >
                                                                    <span>{topic.name}</span>
                                                                    <span>{CoureseFindOne.lessionCount} Lectures . 9 min</span>
                                                                </button>

                                                            </h2>
                                                            {isExpanded === `collapse${topic.id}` && (
                                                                <div
                                                                    id={`collapse${topic.id}`}
                                                                    className="accordion-collapse collapse show"
                                                                    aria-labelledby="headingOne"
                                                                    data-bs-parent="#accordionExample"
                                                                >
                                                                    {topic.videos &&  Array.isArray(topic.videos) && topic.videos.map((video) => (
                                                                        <div className="accordion-body" key={video.id}>
                                                                            <a href="#" className="play-vedio-wrapper" onClick={() => openModal(video)}>
                                                                                <div className="left">
                                                                                    <i className="fa-light fa-circle-play"></i>
                                                                                    <span>{video.Title}</span>
                                                                                </div>
                                                                                <div className="right">
                                                                                    <span className="play">Preview</span>
                                                                                    <span>9 min</span>
                                                                                    
                                                                                </div>
                                                                            </a>

                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))
                                                ) : ''}
                                            </div>
                                            {/* Modal */}
                                            {isModalOpen && modalContent && (
                                                <div className="modal fade show" style={{ display: 'block' }} onClick={closeModal}>
                                                    <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">{modalContent.Title}</h5>
                                                                <button type="button" className="btn-close" onClick={closeModal}></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <video width="100%" controls>
                                                                    <source src={`${REACT_APP_API_IMG}/${modalContent.VideoUplod}`} type="video/mp4" />
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}


                                        </div>
                                        {/* <!-- course content accordion area end --> */}
                                    </div>
                                </div>
                                {/* 
                                <div className="tab-pane fade " disabled="false" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                 
                                    <div className="single-instructor-area-details" disabled="false">
                                        <a href="#" className="thumbnail">
                                            <img src="assets/fontend/images/instructor/10.jpg" alt="instructor" />
                                        </a>
                                        <div className="inner-instrustor-area">
                                            <h5 className="title">William U.</h5>
                                            <span className="deg">Advanced Educator</span>
                                            <div className="stars-area-wrapper">
                                                <div className="stars-area">
                                                    <span>4.5</span>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <div className="users-area">
                                                    <i className="fa-light fa-users"></i>
                                                    <span>1350 Students</span>
                                                </div>
                                                <div className="users-area">
                                                    <i className="fa-light fa-video"></i>
                                                    <span>26 Courses</span>
                                                </div>
                                            </div>
                                            <p className="disc">
                                                William U. Peña, MBA, CISSP No. 349867, is a former college professor and the lead instructor at Dion Training Solutions.
                                            </p>
                                            <div className="follow-us">
                                                <span>Follow</span>
                                                <ul>
                                                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-instructor-area-details">
                                        <a href="#" className="thumbnail">
                                            <img src="assets/fontend/images/instructor/11.jpg" alt="instructor" />
                                        </a>
                                        <div className="inner-instrustor-area">
                                            <h5 className="title">William U.</h5>
                                            <span className="deg">Advanced Educator</span>
                                            <div className="stars-area-wrapper">
                                                <div className="stars-area">
                                                    <span>4.5</span>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <div className="users-area">
                                                    <i className="fa-light fa-users"></i>
                                                    <span>1350 Students</span>
                                                </div>
                                                <div className="users-area">
                                                    <i className="fa-light fa-video"></i>
                                                    <span>26 Courses</span>
                                                </div>
                                            </div>
                                            <p className="disc">
                                                William U. Peña, MBA, CISSP No. 349867, is a former college professor and the lead instructor at Dion Training Solutions.
                                            </p>
                                            <div className="follow-us">
                                                <span>Follow</span>
                                                <ul>
                                                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}

                                {/*   <div className="tab-pane fade " disabled="false" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                                    <div className="rating-main-wrapper" disabled="false">

                                        <div className="rating-top-main-wrapper">

                                            <div className="rating-area-main-wrapper">
                                                <h2 className="title">4.5</h2>
                                                <div className="stars-wrapper">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <span>Total 2 Ratings</span>
                                            </div>

                                            <div className="progress-wrapper-main">
                                                <div className="single-progress-area-h" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                                    <div className="progress-top">
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="parcent">
                                                            5
                                                        </span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="end">
                                                        <span>25 Rating</span>
                                                    </div>
                                                </div>
                                                <div className="single-progress-area-h" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                                    <div className="progress-top">
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="parcent">
                                                            4
                                                        </span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="end">
                                                        <span>20 Rating</span>
                                                    </div>
                                                </div>
                                                <div className="single-progress-area-h" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                                    <div className="progress-top">
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="parcent">
                                                            3
                                                        </span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="end">
                                                        <span>5 Rating</span>
                                                    </div>
                                                </div>
                                                <div className="single-progress-area-h" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                                    <div className="progress-top">
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="parcent">
                                                            2
                                                        </span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft bg--primary" role="progressbar" sstyle={{ width: "40%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="end">
                                                        <span>2 Rating</span>
                                                    </div>
                                                </div>
                                                <div className="single-progress-area-h" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                                    <div className="progress-top">
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="parcent">
                                                            1
                                                        </span>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft bg--primary" role="progressbar" style={{ width: "20%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="end">
                                                        <span>1 Rating</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="indevidual-rating-area">

                                            <div className="author-area">
                                                <img src="assets/images/instructor/12.jpg" alt="instructor" />
                                                <div className="information">
                                                    <span>William U.</span>
                                                    <div className="stars">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="ml--30">a week ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="disc">
                                                I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time.
                                            </p>
                                            <div className="like-love-area">
                                                <a href="#">
                                                    <i className="fa-sharp fa-light fa-thumbs-up"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="indevidual-rating-area">

                                            <div className="author-area">
                                                <img src="assets/fontend/images/instructor/13.jpg" alt="instructor" />
                                                <div className="information">
                                                    <span>William U.</span>
                                                    <div className="stars">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="ml--30">a week ago</span>
                                                    </div>
                                                </div>
                                            </div>
          
                                            <p className="disc">
                                                I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time.
                                            </p>
                                            <div className="like-love-area">
                                                <a href="#">
                                                    <i className="fa-sharp fa-light fa-thumbs-up"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </div>
                                        </div>
        
                                    </div>
                                </div> */}
                            </div>
                            {/*   <div className="wrapper-bottom-course-details-page g-5 row mt--50 pr--60 pr_sm--0 pl_sm--0">
                                <div className="title-between-area pr--150">
                                    <h5 className="title mb-0">More Courses by William U.</h5>
                                    <a href="#" className="rts-btn with-arrow p-0">View All Course <i className="fa-light fa-arrow-right"></i></a>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className="rts-single-course">
                                        <a href="single-course.html" className="thumbnail">
                                            <img src="assets/fontend/images/course/02.jpg" alt="course" />
                                        </a>
                                        <div className="save-icon" data-bs-toggle="modal" data-bs-target="#exampleModal-login">
                                            <i className="fa-sharp fa-light fa-bookmark"></i>
                                        </div>
                                        <div className="tags-area-wrapper">
                                            <div className="single-tag">
                                                <span>Marketing</span>
                                            </div>
                                            <div className="single-tag">
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="lesson-studente">
                                            <div className="lesson">
                                                <i className="fa-light fa-calendar-lines-pen"></i>
                                                <span>22 Lessons</span>
                                            </div>
                                            <div className="lesson">
                                                <i className="fa-light fa-user-group"></i>
                                                <span>60 Students</span>
                                            </div>
                                        </div>
                                        <a href="single-course.html">
                                            <h5 className="title">How to Write the Ultimate 1 Page
                                                Strategic Business Plan</h5>
                                        </a>
                                        <p className="teacher">William U. Peña, MBA</p>
                                        <div className="rating-and-price">
                                            <div className="rating-area">
                                                <span>4.5</span>
                                                <div className="stars">
                                                    <ul>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-regular fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="price-area">
                                                <div className="price">
                                                    $79.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className="rts-single-course">
                                        <a href="single-course.html" className="thumbnail">
                                            <img src="assets/fontend/images/course/03.jpg" alt="course" />
                                        </a>
                                        <div className="save-icon" data-bs-toggle="modal" data-bs-target="#exampleModal-login">
                                            <i className="fa-sharp fa-light fa-bookmark"></i>
                                        </div>
                                        <div className="tags-area-wrapper">
                                            <div className="single-tag">
                                                <span>Marketing</span>
                                            </div>
                                            <div className="single-tag">
                                                <span>Finance</span>
                                            </div>
                                        </div>
                                        <div className="lesson-studente">
                                            <div className="lesson">
                                                <i className="fa-light fa-calendar-lines-pen"></i>
                                                <span>22 Lessons</span>
                                            </div>
                                            <div className="lesson">
                                                <i className="fa-light fa-user-group"></i>
                                                <span>60 Students</span>
                                            </div>
                                        </div>
                                        <a href="single-course.html">
                                            <h5 className="title">How to Write the Ultimate 1 Page
                                                Strategic Business Plan</h5>
                                        </a>
                                        <p className="teacher">William U. Peña, MBA</p>
                                        <div className="rating-and-price">
                                            <div className="rating-area">
                                                <span>4.5</span>
                                                <div className="stars">
                                                    <ul>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-regular fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="price-area">
                                                <div className="price">
                                                    $79.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-4 order-cl-2 order-lg-2 order-md-1 order-sm-1 order-1  rts-sticky-column-item">
                            {/* <!-- right- sticky bar area --> */}
                            <div className="right-course-details">
                                {/* <!-- single course-sidebar --> */}
                                <div className="course-side-bar">

                                    <div className="thumbnail">
                                        <img src={`${REACT_APP_API_IMG}/${CoureseFindOne.CourseUplod}`} alt="course" />
                                    {/*     {CoureseFindOne.topics && Array.isArray(CoureseFindOne.topics) ? (

                                            CoureseFindOne.topics.map((topic) => (
                                                <div className="vedio-icone" key={topic.id}>
                                                    {topic.videos && Array.isArray(topic.videos) && topic.videos.length > 0 ? (
    <a href="#" className="video-play-button play-video popup-video" onClick={() => openModal(topic.videos && topic.videos[0].id)}>
    <div className="left">
        <i className="fa-light fa-circle-play"></i>
        <span>{topic.videos && topic.videos[0].Title}</span>
    </div>
    <div className="right">
        <span className="play">Preview</span>
        <span>9 min</span>
    </div>
</a>

<div className="video-overlay">
<a className="video-overlay-close">×</a>
</div>
                                                    )
                                            

                                            
                                                
                                                 </div>
                                            )): ''}
                                        )} */}
                                    </div>

                                    <div className="price-area">
                                        <h3 className="title">{CoureseFindOne.CoursePrice}
                                        </h3>

                                        <i class="fa-indian-rupee fa-light"></i>
                                    </div>

                                    <a href="#" className="rts-btn btn-primary">Add To Cart</a>
                                    <a href="#" className="rts-btn btn-border">Buy Now</a>

                                    <div className="what-includes">

                                        <h5 className="title">This course includes: </h5>
                                        <div className="single-include">
                                            <div className="left">
                                                <i className="fa-light fa-chart-bar"></i>
                                                <span>Levels</span>
                                            </div>
                                            <div className="right">
                                                <span>Beginner</span>
                                            </div>
                                        </div>
                                        <div className="single-include">
                                            <div className="left">
                                                <i className="fa-light fa-timer"></i>
                                                <span>Duration</span>
                                            </div>
                                            <div className="right">
                                                <span>{CoureseFindOne.CourseDuration} Days</span>
                                            </div>
                                        </div>
                                        <div className="single-include">
                                            <div className="left">
                                                <i className="fa-regular fa-floppy-disk"></i>
                                                <span>Subject</span>
                                            </div>
                                            <div className="right">
                                                <span>{CoureseFindOne.category && CoureseFindOne.category.name}</span>
                                            </div>
                                        </div>
                                        <div className="single-include">
                                            <div className="left">
                                                <i className="fa-regular fa-pen-to-square"></i>
                                                <span>Update</span>
                                            </div>
                                            <div className="right">
                                                <span>{Lastupdated}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- single course-sidebar end --> */}
                            </div>
                            {/* <!-- right- sticky bar area end --> */}
                            {/* <!-- right- sticky bar area --> */}

                            {/* <!-- right- sticky bar area end --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- course details area end --> */}

            <div className="rts-section-gapBottom  rts-feature-course-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-between-area">
                                <div className="title-area-left-style">
                                    <div className="pre-title">

                                        <span>More Similar Courses</span>
                                    </div>
                                    <h2 className="title">Related Courses</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-containerr" id='swiperContainerr'>

                        <div className='swiper-wrappere' >
                            <Slider {...settings} >
                                {courses.map((course) => {
                                    if (course.Status == 1) {
                                        return (
                                            <div class="swiper-slide ">
                                                <div class="single-course-style-three" style={{ marginLeft: '15px' }}>
                                                    <a href="#" class="thumbnail">
                                                        <img src={`${REACT_APP_API_IMG}/${course.CourseUplod}`} alt="course" />
                                                        <div class="tag-thumb">
                                                            <span>{course.Category && course.Category.name}</span>
                                                        </div>
                                                    </a>
                                                    <div class="body-area">
                                                        <div class="course-top">
                                                            <div class="tags">Best Seller</div>
                                                            <div class="price">$49.50</div>
                                                        </div>
                                                        <a href="#">
                                                            <h5 class="title">{course.name}</h5>
                                                        </a>
                                                        <div class="leasson-students">
                                                            <div class="lesson">
                                                                <i class="fa-light fa-calendar-lines-pen"></i>
                                                                <span>{course.lessionCount} Lessons</span>
                                                            </div>
                                                            <div class="students">
                                                                <i class="fa-light fa-users"></i>
                                                                <span>{course.studentCount} Lessons</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    } else {
                                        return null
                                    }
                                })}
                                {/* Add more slides as needed */}
                            </Slider>


                        </div>

                    </div>

                </div>
            </div>

            <section>
                <Footer />
            </section>
        </>
    )

}
export default CoursedetailsComponent
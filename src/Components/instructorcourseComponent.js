import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useParams, } from 'react-router-dom';
import Navbarmenu from "./Navbarmenu";
import { Editor } from '@tinymce/tinymce-react';
const { REACT_APP_API_ENDPOINT } = process.env;
const InstructorCourseadd = () => {
    const { coursesId } = useParams();
    const [userData, setUserData] = useState({});
    const [courses, setCourse] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState('');
    const [selectedvideo, setselectedvideo] = useState('');

    const handleSelectVideo = (e) => {
        const value = e.target.value;
        setselectedvideo(value);
    };

    useEffect(() => {
        fetchData(coursesId);
    }, [coursesId]);

    useEffect(() => {
        fetchData1();
        fetchData2();
    }, []);



    //Dropdown Navigation
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDropdown = (serviceName) => {
        setIsExpanded(isExpanded === serviceName ? '' : serviceName);
    };

    const fetchData = async (coursesId) => {
        try {
            if (!coursesId) {
                console.log("coursesId is undefined");
                return;
            }
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/listcourses/${coursesId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.courses;
                setUserData(userData);
                setFormDataCourse({
                    name:userData.name , 
                    CoursePrice:userData.CoursePrice,
                    CourseCategoryId: userData.CourseCategoryId, 
                    CourseDuration:userData.CourseDuration,
                    CourseUplod:null,
                    AboutCourse:userData.AboutCourse,
                    Description:userData.Description,
                });
            }

        } catch (err) {
            console.log(err.response);
        }
    }
    const fetchData1 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/listcourses`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.courses;
                setCourse(userDatas)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchData2 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/categories`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.categories;
                setCategory(userDatas)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // course add start

    const [formDataCourse, setFormDataCourse] = useState({
        name: '',
        CoursePrice: '',
        CourseDuration: '',
        CourseCategoryId: '',
        CourseUplod: null,
        AboutCourse: '',
        Description: '',
    });

    // topic start add

    const [formDataTopic, setFormDataTopic] = useState({
        name: '',
        CoursesId: ''
    });

    // lession start add

    let [formDataLession, setFormDataLession] = useState({
        LessionTitle: "",
        CoursesId: "",
        TopicId: "",
        LessionUpload: null,
        
    });

    // video start add 

    let [formDataVideo, setFormDataVideo] = useState({
        Title: '',
        CoursesId: '',
        TopicId: '',
        VideoUplod: null,
        VideoIframe: '',
    });


    // end video 

    // course start handleChangeCourse
    const handleChangeCourse = (e) => {
        const { name, files, value } = e.target;
        setFormDataCourse(formDataCourse => ({
            ...formDataCourse,
            [name]: files ? files[0] : value
        }));
    };

    const handleCourseChange = async (e) => {
        const selectedCoursesId = parseInt(e.target.value);
        const selectedCourse = courses.find(course => course.id === selectedCoursesId);
        setFormDataLession({
            ...formDataLession,
            CoursesId: selectedCoursesId,
            TopicId: '' // Reset topic selection
        });
        setFormDataVideo({
            ...formDataVideo,
            CoursesId: selectedCoursesId,
            TopicId: '' // Reset topic selection
        });
        setSelectedCourses(selectedCourse);
        if (selectedCourse) {
            fetchData1(selectedCoursesId);

        }

    };
    

    // topic start handleChangeTopic
    const handleChangeTopic = (e) => {
        const { name, value } = e.target;
        setFormDataTopic({
            ...formDataTopic,
            [name]: value,
        });
    };

    // lession start handleChangeLession
    const handleChangeLession = (e) => {
        const { name, files, value } = e.target;
        setFormDataLession(formDataLession => ({
            ...formDataLession,
            [name]: files ? files[0] : value
        }));
    };
    // video start handleChangeVideo
    const handleChangeVideo = (e) => {
        const { name, files, value } = e.target;
        setFormDataVideo(formDataVideo => ({
            ...formDataVideo,
            [name]: files ? files[0] : value
        }));
    };


    // course start handleSubmitCourse
    const handleSubmitCourse = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formDataCourse) {
            data.append(key, formDataCourse[key]);
        }
        // Assuming you have an API
        try {
            const token = localStorage.getItem('token');

            if (token) {

                await axios.post(`${REACT_APP_API_ENDPOINT}/addcourses`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                 window.location.href = '/createcourse'
                alert('Courses Successfully Create');

            }
        } catch (error) {
            alert('Failed to send message.');
        }
    }
    // end course 

    // topic start handleSubmitTopic
    const handleSubmitTopic = async (e) => {
        e.preventDefault();
        // Assuming you have an API
        try {
            const token = localStorage.getItem('token');

            if (token) {

                await axios.post(`${REACT_APP_API_ENDPOINT}/topic`, formDataTopic, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                window.location.href = '/createcourse'
                alert('Topic Successfully Create');

            }
        } catch (error) {
            alert('Failed to send message.');
        }
    }
    // end topic 


    // lession start handleSubmitLession
    const handleSubmitLession = async (e) => {
        e.preventDefault();
        // Assuming you have an API
        const data = new FormData();
        for (const key in formDataLession) {
            data.append(key, formDataLession[key]);
        }
        try {
            const token = localStorage.getItem('token');
            if (token) {

                let ddd = await axios.post(`${REACT_APP_API_ENDPOINT}/lession`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });
                window.location.href = '/createcourse'
                alert('Lession Successfully Create');
                console.log(ddd)

            }


        } catch (error) {
            alert('Failed to send message.');
        }
    }
    // end lession 


    // video start handleSubmitVideo
    const handleSubmitVideo = async (e) => {
        e.preventDefault();
        // Assuming you have an API
        const data = new FormData();
        for (const key in formDataVideo) {
            data.append(key, formDataVideo[key]);
        }
        try {
            const token = localStorage.getItem('token');
            if (token) {

              await axios.post(`${REACT_APP_API_ENDPOINT}/video`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });
               
                alert('Video Successfully Create');
                  window.location.href = '/createcourse'
            }


        } catch (error) {
            alert('Failed to send message.');
        }
    }
    // end lession 
    return (
        <div>
            <section>
                <Navbarmenu />
            </section>

            <div className="rts-bread-crumbarea-1 rts-section-gap bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-main-wrapper">
                                <h1 className="title">Create Course</h1>

                                <div className="pagination-wrapper">
                                    <a href="index-2.html">Home</a>
                                    <i className="fa-regular fa-chevron-right"></i>
                                    <a className="active" href="create-course.html">Create Course</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="crea-te-course-area-start ptb--100">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="create-course-area-main-wrapper-inner">
                                <div className="accordion" id="accordionExample">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                onClick={() => toggleDropdown('collapseOne')}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded={isExpanded ? false : true}
                                                aria-controls="collapseOne"
                                            >
                                                Course Info
                                            </button>
                                        </h2>

                                        {isExpanded === 'collapseOne' && (<div
                                            id="collapseOne"
                                            className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <div className="accordion-body">
                                                    <div className="course-information-area">
                                                        <form className="top-form-create-course" onSubmit={handleSubmitCourse}>
                                                            <div className="single-input">
                                                                <label htmlFor="name" className="form-label">Course Title</label>
                                                                <input
                                                                    id="name"
                                                                    name="name"
                                                                    value={formDataCourse.name}
                                                                    onChange={handleChangeCourse}
                                                                    type="text"
                                                                    placeholder="New Course"
                                                                />
                                                            </div>
                                                            <div className="single-input">
                                                                <label htmlFor="slug" className="form-label">Course Price</label>
                                                                <input
                                                                    type="number"
                                                                    id="slug"
                                                                    placeholder="Course Price"
                                                                    name="CoursePrice"
                                                                    value={formDataCourse.CoursePrice}
                                                                    onChange={handleChangeCourse}
                                                                />
                                                            </div>
                                                            <div className="single-input">
                                                                <label htmlFor="duration" className="form-label">Course Duration (Days)</label>
                                                                <input
                                                                    type="number"
                                                                    id="duration"
                                                                    placeholder="Course Duration"
                                                                    name="CourseDuration"
                                                                    value={formDataCourse.CourseDuration}
                                                                    onChange={handleChangeCourse}
                                                                />
                                                            </div>
                                                            <div className="single-input">
                                                                <label htmlFor="exampleFormControlSelect2" className="form-label">Courses Category</label>
                                                                <select
                                                                    id="exampleFormControlSelect2"
                                                                    className="select2 form-select"
                                                                    name="CourseCategoryId"
                                                                    value={formDataCourse.CourseCategoryId}
                                                                    onChange={handleChangeCourse}
                                                                >
                                                                    <option value="">Select</option>
                                                                    {category.map((option) => (
                                                                        <option key={option.id} value={option.id}>{option.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="single-input">
                                                                <label class="form-label">Upload Image</label>
                                                                <input
                                                                    type="file"
                                                                    class="form-control"
                                                                    id="inputGroupFile04"
                                                                    aria-describedby="inputGroupFileAddon04"
                                                                    aria-label="Upload"
                                                                    name="file"
                                                                    value={formDataCourse.CourseUplod} onChange={handleChangeCourse}
                                                                /> </div>
                                                                    <div className="single-input">
                                                                <label class="form-label">About Course</label>
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    name="AboutCourse"
                                                                    value={formDataCourse.AboutCourse} onChange={handleChangeCourse}
                                                                /> </div>
                                                               <div className="single-input">
                                                                <label class="form-label">Description</label>
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    name="Description"
                                                                    value={formDataCourse.Description} onChange={handleChangeCourse}
                                                                /> </div>
                                                            <div class="col-3 col-lg-3 single-input d-flex">
                                                                <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                                <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="#collapseOne" aria-label="Close">Cancel</button>  

                                                            </div>
                                                            <input type="hidden" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>)}

                                    </div>
                                    <div className="accordion" id="accordionExampls3">

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button"
                                                    onClick={() => toggleDropdown('collapseTwo')}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    aria-expanded={isExpanded ? false : true}
                                                    data-bs-target="#collapseTwo"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Course Topic
                                                </button>
                                            </h2>
                                            {isExpanded === 'collapseTwo' && (<div id="collapseTwo" className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExampls3">
                                                <div className="accordion-body">
                                                    <div className="course-information-area">
                                                        <form action="#" className="top-form-create-course" onSubmit={handleSubmitTopic} >
                                                            <div className="single-input">
                                                                <label for="name" class="form-label">Topic Name</label>
                                                                <input id="name" name='name' value={formDataTopic.name} onChange={handleChangeTopic} type="text" placeholder="Topic Name" />
                                                            </div>

                                                            <div className="single-input">

                                                                <label for="exampleFormControlSelect2" class="form-label">Select Courses</label>
                                                                <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId" value={formDataTopic.CoursesId} onChange={handleChangeTopic}>
                                                                    <option value="">Select</option>
                                                                    {courses.map((option) => (
                                                                        <option key={option.id} value={option.id}>{option.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div class="col-3 col-lg-3 single-input d-flex">
                                                                <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                                <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="#collapseOne" aria-label="Close">Cancel</button>  
                                                            </div>
                                                            <input type="hidden" /></form>

                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>

                                    </div>
                                    <div className="accordion" id="accordionExampls2">

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button"
                                                    onClick={() => toggleDropdown('collapseThree')}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded={isExpanded ? false : true}
                                                    aria-controls="collapseThree"
                                                >
                                                    Course Lession
                                                </button>
                                            </h2>
                                            {isExpanded === 'collapseThree' && (<div id="collapseThree" className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`} aria-labelledby="headingThree" data-bs-parent="#accordionExampls2">
                                                <div className="accordion-body">
                                                    <div className="course-information-area">
                                                        <form className="top-form-create-course" onSubmit={handleSubmitLession}>
                                                            <div className="single-input">
                                                                <label for="name" class="form-label">Title</label>
                                                                <input type="text" class="form-control" id="name" placeholder="John Doe" name='LessionTitle' value={formDataLession.LessionTitle} aria-label="John Doe" onChange={handleChangeLession} />
                                                            </div>


                                                            <div className="single-input">
                                                                <label for="exampleFormControlSelect2" class="form-label">Select Courses</label>
                                                                <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId" value={formDataLession.CoursesId} onChange={handleCourseChange}>
                                                                    <option value="">Select</option>
                                                                    {courses.map((option) => (
                                                                        <option key={option.id} value={option.id}>{option.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>


                                                            <div className="single-input">
                                                                <label for="exampleFormControlSelect2" class="form-label">Select Topic</label>
                                                                <select id="exampleFormControlSelect2" class="select2 form-select" name="TopicId" value={formDataLession.TopicId} onChange={handleChangeLession} >
                                                                    <option value="">Select</option>
                                                                    {selectedCourses && selectedCourses.Topics.map(topic => (
                                                                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>



                                                            <div className="single-input">
                                                                <label for="exampleFormControlSelect2" class="form-label">Upload Lession PDF | Docx | Doc</label>

                                                                <div class="input-group">
                                                                    <input
                                                                        type="file"
                                                                        class="form-control"
                                                                        id="inputGroupFile04"
                                                                        aria-describedby="inputGroupFileAddon04"
                                                                        aria-label="Upload"
                                                                        name="file"
                                                                        value={formDataLession.LessionUpload} onChange={handleChangeLession}
                                                                    />

                                                                </div>
                                                            </div>
                                                            <div className="single-input">
                                                                <Editor
                                                                    apiKey='exts6nr12i36iql71yx4ho3on1mhmj48cv5o8anbtk8xzn59'
                                                                    init={{
                                                                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                                                                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                                                    }}
                                                                    initialValue="Welcome to TinyMCE!"
                                                                />
                                                            </div>
                                                            <div class="col-3 col-lg-3 single-input d-flex">
                                                                <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                                <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="#collapseOne" aria-label="Close">Cancel</button>  
                                                            </div>
                                                            <input type="hidden" /></form>

                                                    </div>



                                                </div>
                                            </div>)}
                                        </div>

                                    </div>
                                    <div className="accordion" id="accordionExampls2">

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button
                                                    className="accordion-button"
                                                    onClick={() => toggleDropdown('collapseFour')}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour"
                                                    aria-expanded={isExpanded ? false : true}
                                                    aria-controls="collapseFour"
                                                >
                                                    Course Video
                                                </button>
                                            </h2>
                                            {isExpanded === 'collapseFour' && (<div id="collapseFour" className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`} aria-labelledby="headingFour" data-bs-parent="#accordionExampls2">
                                                <div className="accordion-body">
                                                    <div className="course-information-area">
                                                        <form action="#" className="top-form-create-course" onSubmit={handleSubmitVideo}>

                                                            <div className="single-input">
                                                                <label for="name" class="form-label">Title</label>
                                                                <input type="text" class="form-control" id="name" placeholder="John Doe" name='Title' value={formDataVideo.Title} aria-label="John Doe" onChange={handleChangeVideo} />
                                                            </div>


                                                            <div className="single-input">
                                                                <label for="exampleFormControlSelect2" class="form-label">Select Courses</label>
                                                                <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId" value={formDataVideo.CoursesId} onChange={handleCourseChange} >
                                                                    <option value="">Select</option>
                                                                    {courses.map((option) => (
                                                                        <option key={option.id} value={option.id}>{option.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>


                                                            <div className="single-input">
                                                                <label for="exampleFormControlSelect2" class="form-label">Select Topic</label>
                                                                <select id="exampleFormControlSelect2" class="select2 form-select" name="TopicId" value={formDataVideo.TopicId} onChange={handleChangeVideo} >
                                                                    <option value="">Select</option>
                                                                    {selectedCourses && selectedCourses.Topics.map(topic => (<option key={topic.id} value={topic.id}>{topic.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div className="single-input">
                                                                <label for="exampleFormControlSelect2" class="form-label">Select Video</label>
                                                                <select
                                                                    id="exampleFormControlSelect2"
                                                                    className="select2 form-select"
                                                                    name="videoselect"
                                                                    onChange={handleSelectVideo}
                                                                >
                                                                    <option value="">Select Video Source</option>
                                                                    <option value="gallery">Video URL</option>
                                                                    <option value="upload">Choose From Gallery</option>
                                                                </select>

                                                                {selectedvideo === 'upload' ? (
                                                                    <div className="single-input">
                                                                        <label className="form-label">Upload Video</label>
                                                                        <div className="input-group">
                                                                            <input
                                                                                type="file"
                                                                                className="form-control"
                                                                                id="inputGroupFile04"
                                                                                aria-describedby="inputGroupFileAddon04"
                                                                                aria-label="Upload"
                                                                                name="file"
                                                                                value={formDataVideo.VideoUplod} onChange={handleChangeVideo}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                ) : selectedvideo === 'gallery' ? (
                                                                    <div className="single-input" data-quillbot-parent="oopPrLVIHzQ4Ey_EnMuDh">

                                                                        <label className="form-label">Video Url</label>
                                                                        <textarea
                                                                            id="full-featured-non-premium"
                                                                            name="VideoIframe"
                                                                            value={formDataVideo.VideoUplod} onChange={handleChangeVideo}
                                                                            className="form-control w-100"
                                                                            data-gramm="false"
                                                                            wt-ignore-input="true"
                                                                            data-quillbot-element="oopPrLVIHzQ4Ey_EnMuDh"
                                                                        ></textarea>
                                                                    </div>
                                                                ) : null}
                                                            </div>
                                                            <div class="col-3 col-lg-3 single-input d-flex">
                                                                <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                                <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="#collapseOne" aria-label="Close">Cancel</button>  
                                                            </div>
                                                            <input type="hidden" /></form>

                                                    </div>



                                                </div>
                                            </div>)}
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 rts-sticky-column-item">
                            <div className="course-upload-tips-wrapper theiaStickySidebar">
                                <h5 className="title">Course Upload Tips</h5>
                                <div className="single-check-wrapper">
                                    <i className="fa-light fa-circle-check"></i>
                                    <span>Set the Course Price option or make it free.</span>
                                </div>
                                <div className="single-check-wrapper">
                                    <i className="fa-light fa-circle-check"></i>
                                    <span>Standard size for the course thumbnail is
                                        700x430.</span>
                                </div>
                                <div className="single-check-wrapper">
                                    <i className="fa-light fa-circle-check"></i>
                                    <span>Video section controls the course overview video.</span>
                                </div>
                                <div className="single-check-wrapper">
                                    <i className="fa-light fa-circle-check"></i>
                                    <span>Course Builder is where you create & organize
                                        a course.</span>
                                </div>
                                <div className="single-check-wrapper">
                                    <i className="fa-light fa-circle-check"></i>
                                    <span>Add Topics in the Course Builder section to create
                                        lessons, quizzes, and assignments.</span>
                                </div>
                                <div className="single-check-wrapper">
                                    <i className="fa-light fa-circle-check"></i>
                                    <span>Prerequisites refers to the fundamental courses
                                        to complete before taking this particular course.</span>
                                </div>
                                <div className="single-check-wrapper">
                                    <i className="fa-light fa-circle-check"></i>
                                    <span>Information from the Additional Data section
                                        shows up on the course single page.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorCourseadd;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
const { REACT_APP_API_ENDPOINT ,REACT_APP_API_IMG} = process.env;
function Video() {
    const { videoId } = useParams();
    const navigate = useNavigate();
    const [courses, setCourse] = useState([]);
    const [table, setVideo] = useState([]);
    const [Topic, setTopic] = useState([]);
    const [findOnevideo, setfindOnevido] = useState({})
    const [selectedCourses, setSelectedCourses] = useState('');
    useEffect(() => {
        fetchData(videoId);
    }, [videoId]);
    useEffect(() => {
        fetchData1();
        fetchData2();
        fetchData3()
    }, []);

    const [selectedvideo, setselectedvideo] = useState('');

    const handleSelectVideo = (e) => {
        const value = e.target.value;
        setselectedvideo(value);
    };
    const handleCourseChange = async (e) => {
        const selectedCoursesId = parseInt(e.target.value);
        const selectedCourse = courses.find(course => course.id === selectedCoursesId);
        setFormData({
            ...formData,
            CoursesId: selectedCoursesId,
            TopicId: '' // Reset topic selection
        });
        setSelectedCourses(selectedCourse);
        if (selectedCoursesId) {
            fetchData3(selectedCoursesId);
        }
    };
    const fetchData = async (videoId) => {
        try {

            if (!videoId) {
                console.log("lessionId is undefined");
                return;
            }
            const token = localStorage.getItem('token');
            if (token) {
                const lessonResponse = await axios.get(`${REACT_APP_API_ENDPOINT}/video/${videoId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const lessonData = lessonResponse.data.video;
                setfindOnevido(lessonData)
                setFormData({
                    Title: lessonData.Title,
                    CoursesId: lessonData.CoursesId,
                    TopicId: lessonData.TopicId,
                    VideoUplod: null,
                    VideoIframe: lessonData.VideoIframe,
                });

                if (lessonData.CoursesId) {
                    fetchData2(lessonData.CoursesId);
                }

            }
        } catch (error) {
            console.error('Failed to fetch initial data:', error);
        }
    };

    const fetchData1 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/video`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.video;
                setVideo(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData2 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/listcourses`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.courses;
                setCourse(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData3 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/topic`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.topic;
                setTopic(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [formData, setFormData] = useState({
        Title: '',
        CoursesId: '',
        TopicId: '',
        VideoUplod: null,
        VideoIframe: '',
    });


    const handleChange = (e) => {
        const { name, files, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
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

                window.location.href = "/video";
                alert('Video Successfully Create');

            }
        } catch (error) {
            alert('Failed to send message.');
        }
    }
    const handleDelete = async (videoId) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                await axios.delete(`${REACT_APP_API_ENDPOINT}/video/${videoId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData(videoId)
                alert('Data successfully deleted');

            }
        } catch (error) {
            console.error('Error deleting data:', error);
            alert('An error occurred while deleting data');
        }
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        try {
            const token = localStorage.getItem('token');
            if (token) {
                await axios.patch(`${REACT_APP_API_ENDPOINT}/video/${videoId}`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData(videoId)
                alert("Video updated successfully!");
                navigate("/video");
            }
        } catch (error) {
            console.error('Error updating video:', error);
            alert('An error occurred while updating the video.');
        }
    };



    return (
        <>
            {/*     <!-- Layout wrapper --> */}
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    {/*      <!-- Menu --> */}
                    <DashBoardMenus />
                    {/*         <!-- / Menu --> */}

                    {/*     <!-- Layout container --> */}
                    <div class="layout-page">

                        <Navbar />

                        <div class="content-wrapper">



                            <div class="container-fluid flex-grow-1 container-p-y">



                                <div class="row g-4 mb-4">
                                    <div className='col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                                        <div class="card">
                                            <div class="card-body">
                                                <div class=" align-items-start justify-content-between">
                                                    <div class="content-left">
                                                        <h3>Add Video</h3>
                                                        <div class="offcanvas-body mx-0">
                                                            <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onSubmit={handleSubmit} novalidate="novalidate">


                                                                <div class="mb-3 fv-plugins-icon-container">
                                                                    <label class="form-label" for="add-user-fullname">Name</label>
                                                                    <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='Title'
                                                                        value={formData.Title} aria-label="John Doe" onChange={handleChange} />
                                                                    <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                                </div>


                                                                <div class="mb-3 fv-plugins-icon-container">
                                                                    <label for="exampleFormControlSelect2" class="form-label">Select Courses</label>
                                                                    <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId" value={formData.CoursesId} onChange={handleCourseChange}>
                                                                        <option value="">Select</option>
                                                                        {courses.map((option) => (
                                                                            <option key={option.id} value={option.id}>{option.name}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>

                                                                <div class="mb-3 fv-plugins-icon-container">
                                                                    <label for="exampleFormControlSelect2" class="form-label">Select Topic</label>
                                                                    <select id="exampleFormControlSelect2" class="select2 form-select" name="TopicId" value={formData.TopicId} onChange={handleChange}>
                                                                        <option value="">Select</option>
                                                                        {selectedCourses && selectedCourses.Topics.map(topic => (
                                                                            <option key={topic.id} value={topic.id}>{topic.name}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                                <div class="mb-3 fv-plugins-icon-container">
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



                                                                    {selectedvideo === 'upload' ? (<div class="mb-3">
                                                                        <label class="form-label">Upload Video</label>
                                                                        <div class="input-group">
                                                                            <input
                                                                                type="file"
                                                                                class="form-control"
                                                                                id="inputGroupFile04"
                                                                                aria-describedby="inputGroupFileAddon04"
                                                                                aria-label="Upload"
                                                                                name="file"
                                                                                value={formData.VideoUplod} onChange={handleChange}
                                                                            />

                                                                        </div>
                                                                    </div>) : selectedvideo === 'gallery' ? (
                                                                        <div class="mb-3" data-quillbot-parent="oopPrLVIHzQ4Ey_EnMuDh">
                                                                            <label class="form-label">Video Url</label>
                                                                            <textarea id="full-featured-non-premium" name="VideoIframe" value={formData.VideoUplod} onChange={handleChange} class="form-control w-100" data-gramm="false" wt-ignore-input="true" data-quillbot-element="oopPrLVIHzQ4Ey_EnMuDh"></textarea>

                                                                        </div>
                                                                    ) : ''
                                                                    }


                                                                </div>
                                                                <div class="mb-3 fv-plugins-icon-container">
                                                                    <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>

                                                                </div>
                                                                <input type="hidden" /></form>

                                                        </div>
                                                    </div>
                                                    {/*     <div class="avatar">
                                                        <span class="avatar-initial rounded bg-label-primary">
                                                            <i class="bx bx-user bx-sm"></i>
                                                        </span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-sm-9 col-xl-9 col-lg-9 col-md-9">
                                        <div class="card">
                                            <div class="card-datatable table-responsive">
                                                <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer"><div class="card-header d-flex flex-wrap py-0"><div class="me-5 ms-n2 pe-5">
                                                    <div id="DataTables_Table_0_filter" class="dataTables_filter"><label>
                                                        <input type="search" class="form-control" placeholder="Search Category" aria-controls="DataTables_Table_0" /></label></div></div>
                                                    <div class="d-flex justify-content-start justify-content-md-end align-items-baseline">
                                                        <div class="dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0 gap-3 pt-0">
                                                            <div class="dataTables_length mt-0 mt-md-3" id="DataTables_Table_0_length">
                                                                <label><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select"><option value="7">7</option><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="70">70</option><option value="100">100</option></select></label></div><div class="dt-buttons btn-group flex-wrap">

                                                            </div></div></div></div><table class="datatables-category-list table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" width="1390px;">
                                                        <thead>
                                                            <tr><th class="control sorting_disabled dtr-hidden" rowspan="1" colspan="1" style={{ width: "0px", display: "none" }} aria-label=""></th>

                                                                <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="678px;" aria-label="Categories: activate to sort column ascending" aria-sort="descending">Course</th>
                                                                <th class="text-nowrap text-sm-end sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="201px;" aria-label="Total Products &amp;nbsp;: activate to sort column ascending">Video Name &nbsp;</th>
                                                                {/*  <th class="text-nowrap text-sm-end sorting_disabled" rowspan="1" colspan="1" width="172px;" aria-label="Duration">Duration</th> */}
                                                                <th class="text-lg-center sorting_disabled" rowspan="1" colspan="1" width="113px;" aria-label="Actions">Actions</th></tr>

                                                        </thead>
                                                        <tbody>
                                                            {table.map((item, index) => (
                                                                <tr class="odd">
                                                                    <td class="  control" tabindex="0" style={{ display: "none" }}></td>

                                                                    <td class="sorting_1">
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="avatar-wrapper  test-demo-class me-6 rounded-2">
                                                                                <div class="avatar" style={{
                                                                                    width: "7.375rem",
                                                                                    height: "4.375rem"
                                                                                }}>
                                                                                    <video src={`http://localhost:3000/${item.VideoUplod}`} width="100%" controls="controls" autoplay muted>
                                                                                    </video>
                                                                                </div>
                                                                            </div>
                                                                            <div class="d-flex flex-column justify-content-center">
                                                                                <span class="text-body text-wrap fw-medium">{item.Course && item.Course.name}</span>
                                                                                <span class="text-muted text-truncate mb-0 d-none d-sm-block">
                                                                                    <small>{item.Course && item.Course.Topics && item.Course.Topics.map((topic, index) => (topic.name))}</small>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div class="fw-medium text-sm-end">{item.Title}</div>
                                                                    </td>

                                                                    {/*   <td>
                                                                        <div class="fw-medium text-sm-end">{item.createdAt}</div>
                                                                    </td> */}
                                                                    <td>
                                                                        <div class="d-inline-block text-nowrap">
                                                                            <Link to={`/video/${item.id}`} className="navbar-brand" >  <button class="btn btn-sm btn-icon" data-bs-target="#editUser" data-bs-toggle="modal">
                                                                                <i class="bx bx-edit"></i>

                                                                            </button>
                                                                            </Link>
                                                                            <button class="btn btn-sm btn-icon delete-record" onClick={() => handleDelete(item.id)}>
                                                                                <i class="bx bx-trash"></i>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>


                                                            ))}

                                                        </tbody>
                                                    </table><div class="row mx-2"><div class="col-sm-12 col-md-6"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 7 of 14 entries</div></div><div class="col-sm-12 col-md-6"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="1" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="next" tabindex="0" class="page-link">Next</a></li></ul></div></div></div><div width="1%;"></div></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                {/*  <!-- Modal -->
                            <!-- Edit User Modal --> */}
                                <div class="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-lg modal-simple modal-edit-user">
                                        <div class="modal-content p-3 p-md-5">
                                            <div class="modal-body">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div class="text-center mb-4">
                                                    <h3>Edit Information</h3>
                                                    <p>Updating  details will receive a privacy audit.</p>
                                                </div>
                                                <form id="editUserForm" className="row g-3 fv-plugins-bootstrap5 fv-plugins-framework" onSubmit={handleUpdate} novalidate="novalidate">

                                                    <div class="mb-3 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-fullname">Full Name</label>
                                                        <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='Title'

                                                            value={formData.Title}
                                                            onChange={handleChange} />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="exampleFormControlSelect2" class="form-label">Select Courses</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId"
                                                            value={formData.CoursesId}
                                                            onChange={handleCourseChange}>
                                                            <option value="">Select</option>
                                                            {courses.map((option) => (
                                                                <option key={option.id} value={option.id}>{option.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlSelect2" class="form-label">Select Topic</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="TopicId"
                                                            value={formData.TopicId} onChange={(e) => setFormData({ ...formData, TopicId: e.target.value })}
                                                        >
                                                            <option value="">Select</option>
                                                            {selectedCourses && selectedCourses.Topics.map(topic => (
                                                                <option key={topic.id} value={topic.id}>{topic.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>



                                                    <div class="mb-3">
                                                        <label class="form-label">Upload Video</label>
                                                        <div class="input-group">
                                                            <video src={`http://localhost:3000/${findOnevideo.VideoUplod}`} width="100%" controls="controls" autoplay muted>
                                                            </video>

                                                            <input
                                                                type="file"
                                                                class="form-control"
                                                                id="inputGroupFile04"
                                                                aria-describedby="inputGroupFileAddon04"
                                                                aria-label="Upload"
                                                                name="file"
                                                                value={formData.VideoUplod} onChange={handleChange}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div class="mb-3" data-quillbot-parent="oopPrLVIHzQ4Ey_EnMuDh">
                                                        <label class="form-label">Video Url</label>
                                                        <textarea id="full-featured-non-premium" name="VideoIframe" value={formData.VideoIframe} onChange={handleChange} class="form-control w-100" data-gramm="false" wt-ignore-input="true" data-quillbot-element="oopPrLVIHzQ4Ey_EnMuDh"></textarea>
                                                    </div>

                                                    <div class="col-12 text-center d-flex">
                                                        <button type="submit" class="btn btn-primary me-sm-3 me-1">Update</button>
                                                        <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                    </div>
                                                    <input type="hidden" /></form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  <!-- Footer --> */}

                            <Footer />

                            {/*      <!-- / Footer --> */}

                        </div>
                    </div >
                    {/*     <!-- Overlay --> */}
                    <div class="layout-overlay layout-menu-toggle"></div>
                </div >
                {/* / Layout wrapper  */}

            </div >

        </>
    )
}
export default Video

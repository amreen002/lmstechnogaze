import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
function Topic() {
    const { lessionId } = useParams();
    const navigate = useNavigate();
    const [courses, setCourse] = useState([]);
    const [table, setLession] = useState([]);
    const [Topic, setTopic] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState('');
    useEffect(() => {
        fetchData(lessionId);
    }, [lessionId]);
    useEffect(() => {
        fetchData1();
        fetchData2();
        fetchData3()
    }, []);
    /*     const handleCourseChange = (e) => {
            const selectedCoursesId = parseInt(e.target.value);
            const selectedCourses = courses.find(course => course.id === selectedCoursesId)
            setCoursesId(selectedCoursesId);
            setSelectedCourses(selectedCourses);
            setTopicId(''); // Reset district selection
        };
     */

    /*     const handleCourseChange = (e) => {
            const selectedCoursesId = parseInt(e.target.value);
            const selectedCourses = courses.find(course => course.id === selectedCoursesId);
            setFormData({
                ...formData,
                CoursesId: selectedCoursesId,
                TopicId: '' // Reset topic selection
            });
            setCoursesId(selectedCoursesId);
            setSelectedCourses(selectedCourses);
            setTopicId(''); // Reset district selection
            // Fetch topics based on selected course
            fetchData2(selectedCoursesId);
        }; */


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
    const fetchData = async (lessionId) => {
        try {

            if (!lessionId) {
                console.log("lessionId is undefined");
                return;
            }
            const token = localStorage.getItem('token');
            if (token) {
                const lessonResponse = await axios.get(`http://localhost:3000/api/lession/${lessionId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const lessonData = lessonResponse.data.lession;
                setFormData({
                    LessionTitle: lessonData.LessionTitle,
                    CoursesId: lessonData.CoursesId,
                    TopicId: lessonData.TopicId,
                    LessionUpload: null,
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
                const response = await axios.get(`http://localhost:3000/api/lession`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.lession;
                setLession(userData)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData2 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`http://localhost:3000/api/listcourses`, {
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
                const response = await axios.get(`http://localhost:3000/api/topic`, {
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
        LessionTitle: "",
        CoursesId: "",
        TopicId: "",
        LessionUpload: null,
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

                await axios.post('http://localhost:3000/api/lession', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                window.location.href = "/lession";
                alert('Lession Successfully Create');

            }
        } catch (error) {
            alert('Failed to send message.');
        }
    }
    const handleDelete = async (lessionId) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                await axios.delete(`http://localhost:3000/api/lession/${lessionId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData(lessionId)
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
                await axios.put(`http://localhost:3000/api/lession/${lessionId}`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData(lessionId)
                alert("Lesson updated successfully!");
                navigate("/lession");
            }
        } catch (error) {
            console.error('Error updating lesson:', error);
            alert('An error occurred while updating the lesson.');
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
                                                        <h3>Add Lession</h3>
                                                        <div class="offcanvas-body mx-0">
                                                            <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onSubmit={handleSubmit} novalidate="novalidate">


                                                                <div class="mb-3 fv-plugins-icon-container">
                                                                    <label class="form-label" for="add-user-fullname">Full Name</label>
                                                                    <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='LessionTitle'
                                                                        value={formData.LessionTitle} aria-label="John Doe" onChange={handleChange} />
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
                                                                <div class="mb-3">
                                                                <label for="exampleFormControlSelect2" class="form-label">Upload Lession PDF | Docx | Doc</label>
                                                                    <div class="input-group">
                                                                        <input
                                                                            type="file"
                                                                            class="form-control"
                                                                            id="inputGroupFile04"
                                                                            aria-describedby="inputGroupFileAddon04"
                                                                            aria-label="Upload"
                                                                            name="file"
                                                                            value={formData.LessionUpload} onChange={handleChange}
                                                                        />

                                                                    </div>
                                                                </div>
                                                                <div class="mb-3">
                                                                    <Editor
                                                                        apiKey='exts6nr12i36iql71yx4ho3on1mhmj48cv5o8anbtk8xzn59'
                                                                        init={{
                                                                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                                                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                                                        }}
                                                                        initialValue="Welcome to TinyMCE!"
                                                                    />
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
                                        <div className="card">
                                            <div class="card-header border-bottom">
                                                <h5 class="card-title">List All Lession</h5>
                                                <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
                                                    <div class="col-md-4 user_role"><select id="UserRole" class="form-select text-capitalize"><option value=""> Select Role </option><option value="Admin">Admin</option><option value="Author">Author</option><option value="Editor">Editor</option><option value="Maintainer">Maintainer</option><option value="Subscriber">Subscriber</option></select></div>
                                                    <div class="col-md-4 user_plan"><select id="UserPlan" class="form-select text-capitalize"><option value=""> Select Plan </option><option value="Basic">Basic</option><option value="Company">Company</option><option value="Enterprise">Enterprise</option><option value="Team">Team</option></select></div>
                                                    <div class="col-md-4 user_status"><select id="FilterTransaction" class="form-select text-capitalize"><option value=""> Select Status </option><option value="Pending" class="text-capitalize">Pending</option><option value="Active" class="text-capitalize">Active</option><option value="Inactive" class="text-capitalize">Inactive</option></select></div>
                                                </div>
                                            </div>
                                            <div class="card-datatable table-responsive">
                                                <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer"><div class="row mx-2"><div class="col-md-2"><div class="me-3"><div class="dataTables_length" id="DataTables_Table_0_length"><label><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div></div><div class="col-md-10"><div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"><div id="DataTables_Table_0_filter" class="dataTables_filter"><label>
                                                    <input type="search" class="form-control" placeholder="Search.." aria-controls="DataTables_Table_0" /></label></div><div class="dt-buttons btn-group flex-wrap"> <div class="btn-group"><button class="btn buttons-collection dropdown-toggle btn-label-secondary mx-3" tabindex="0" aria-controls="DataTables_Table_0" type="button" aria-haspopup="dialog" aria-expanded="false"><span><i class="bx bx-export me-1"></i>Export</span></button></div><i class="bx bx-plus me-0 me-sm-1"></i> </div></div></div></div><table class="datatables-users table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" width="1390px;">
                                                        <thead>
                                                            <tr>
                                                                <th class="control sorting_disabled dtr-hidden" rowspan="1" colspan="1" aria-label="" width="20px;"></th>
                                                                <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="100px;" aria-label="User: activate to sort column ascending" aria-sort="descending">Id</th>
                                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="270px;" aria-label="Role: activate to sort column ascending">Name</th>
                                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="350px;" aria-label="Role: activate to sort column ascending">Courese</th>
                                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="400px;" aria-label="Role: activate to sort column ascending">Topic</th>
                                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="200px;" aria-label="Role: activate to sort column ascending">Level</th>
                                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="50px;" aria-label="Role: activate to sort column ascending">Duration</th>
                                                                <th class="sorting_disabled" rowspan="1" colspan="1" width="100px;" aria-label="Actions">Actions</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {table.map((item, index) => (
                                                                <tr key={item.id}>
                                                                    <td class="sorting_1">

                                                                    </td>
                                                                    <td>{index + 1}</td>
                                                                    <td>{item.LessionTitle}</td>
                                                                    <td>{item.Course && item.Course.name}</td>
                                                                    <td>{item.Course && item.Course.Topics && item.Course.Topics.map((topic, index) => (topic.name))}</td>
                                                                    <td>{item.Course && item.Course.Category && item.Course.Category.name}</td>
                                                                    <td><Link to={'#'}>Course 5 Days</Link></td>
                                                                    <td>
                                                                        <div class="d-inline-block text-nowrap">
                                                                            <Link to={`/lession/${item.id}`} className="navbar-brand" >  <button class="btn btn-sm btn-icon" data-bs-target="#editUser" data-bs-toggle="modal">
                                                                                <i class="bx bx-edit"></i>

                                                                            </button>
                                                                            </Link>
                                                                            <button class="btn btn-sm btn-icon delete-record" onClick={() => handleDelete(item.id)}>
                                                                                <i class="bx bx-trash"></i>
                                                                            </button>
                                                                            <button class="btn btn-sm btn-icon delete-record">
                                                                                <i class="bx bx-eye"></i>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <div class="row mx-2"><div class="col-sm-12 col-md-6"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 50 entries</div></div><div class="col-sm-12 col-md-6"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="1" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="2" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="3" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="4" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="next" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
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
                                                        <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name='LessionTitle'
                                                            disabled="false" aria-label="John Doe"
                                                            value={formData.LessionTitle}
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
                                                        <div class="input-group">
                                                            <input
                                                                type="file"
                                                                class="form-control"
                                                                id="inputGroupFile04"
                                                                aria-describedby="inputGroupFileAddon04"
                                                                aria-label="Upload"
                                                                name="file"
                                                                value={formData.LessionUpload} onChange={handleChange}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <Editor
                                                            apiKey='exts6nr12i36iql71yx4ho3on1mhmj48cv5o8anbtk8xzn59'
                                                            init={{
                                                                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                                                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                                            }}
                                                            initialValue="Welcome to TinyMCE!"
                                                        />
                                                    </div>
                                                    <div class="col-12 text-center">
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
export default Topic

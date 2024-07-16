import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footerComponent';
import Navbar from './navComponemt';
import DashBoardMenus from './dashboardsMenuComponent';
import ValidationTopic from '../validation/topicvalidation';
import { useNavigate, useParams, Link } from 'react-router-dom';
const { REACT_APP_API_ENDPOINT ,REACT_APP_API_IMG} = process.env;
function Topic() {
    const { topicId } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState("");
    const [courses, setCourse] = useState([]);
    const [formData, setFormData] = useState({ name: '', CoursesId: '' });
    const [errors, setErrors] = useState({});
    const token = localStorage.getItem('token');
    const [table, setTopic] = useState([]);

    useEffect(() => {
        fetchData(topicId);
    }, [topicId]);

    useEffect(() => {
        fetchData1();
        fetchData2();
    }, []);

    const fetchData = async (topicId) => {
        try {
            if (!topicId) {
                console.log("SubjectId is undefined");
                return;
            }
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/topic/${topicId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userData = response.data.topic;
                setUserData(userData);
                setFormData({
                    name: userData.name,
                    CoursesId: userData.CoursesId,
                })

            }

        } catch (err) {
            console.log(err.response);
        }
    }
    const fetchData1 = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.get(`${REACT_APP_API_ENDPOINT}/topic`, {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                });
                const userDatas = response.data.topic;
                setTopic(userDatas)
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
                const userDatas = response.data.courses;
                setCourse(userDatas) 
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
    
        // Validate the updated form data
        const validationErrors = ValidationTopic(updatedFormData);
        setErrors(validationErrors);
      };


    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Perform client-side validation
        const validationErrors = ValidationTopic(formData );
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
    
        try {
            if (window.confirm('Subject Successfully Create')) {
          // Make the API request
          await axios.post(`${REACT_APP_API_ENDPOINT}/topic`, formData, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          // Clear the form and errors upon successful submission
          setFormData({ name: '', CoursesId: '' });
          setErrors({});
          window.location.href = "/topic";
        }else{
            alert('Information Cancel it,s Successfully');
        }
        } catch (error) {
          console.error(error);
          setErrors({ api: error.response?.data?.message || 'An error occurred while creating the topic.' });
          
        }
      };
    
    const handleDelete = async (topicId) => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                await axios.delete(`${REACT_APP_API_ENDPOINT}/topic/${topicId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData();
                window.location.href = "/topic";
                alert('Data successfully deleted');
            }
        } catch (error) {
            console.error('Error deleting data:', error);
            alert('An error occurred while deleting data');
        }
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (token) {
              
                await axios.patch(`${REACT_APP_API_ENDPOINT}/topic/${topicId}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchData(topicId)
                alert("Subject updated successfully!");
                window.location.href = "/topic";
            }
        } catch (error) {
            console.error('Error updating user:', error);
            alert('An error occurred while updating user data');
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



                            <div class="container-xxl flex-grow-1 container-p-y">



                                <div class="row g-4 mb-4">
                                    <div class="col-sm-12 col-xl-12 col-lg-12 col-md-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class=" align-items-start justify-content-between">
                                                    <div class="content-left">
                                                        <h3>Add Subject</h3>
                                                        <div class="offcanvas-body mx-0 flex-grow-0">
                                                            <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm" onSubmit={handleFormSubmit} novalidate="novalidate">


                                                                <div class="mb-3 fv-plugins-icon-container">
                                                                    <label class="form-label" for="add-user-fullname">Subject Name</label>
                                                                    <input type="text" class="form-control" id="add-user-fullname" placeholder="Subject" name='name'
                                                                        value={formData.name} aria-label="John Doe"
                                                                        onChange={handleChange}
                                                             />
                                                                      {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                                                                  
                                                                    <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                               
                                                                </div>

                                                                <div class="mb-3 fv-plugins-icon-container">
                                                                    <label for="exampleFormControlSelect2" class="form-label">Select Class</label>
                                                                    <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId"  value={formData.CoursesId}  onChange={handleChange}>
                                                                        <option value="">Select</option>
                                                                        {courses.map((option) => (
                                                                            <option key={option.id} value={option.id}>{option.name}</option>
                                                                        ))}
                                                                    </select>
                                                                    {errors.CoursesId && <span style={{ color: 'red' }}>{errors.CoursesId}</span>}
                                                                </div>
                                                                <div class="mb-3 fv-plugins-icon-container col-lg-3">
                                                                    <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>

                                                                </div>
                                                                <input type="hidden" /></form>
                                                                {errors.api && <span style={{ color: 'red' }}>{errors.api}</span>}

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



                                </div>

                                <div class="card">
                                    <div class="card-header border-bottom">
                                        <h5 class="card-title">List All Subjectes</h5>
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
                                                        <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="100px;" aria-label="User: activate to sort column ascending" aria-sort="descending">S.NO</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="400px;" aria-label="Role: activate to sort column ascending">Subject</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="350px;" aria-label="Role: activate to sort column ascending">Classes</th>
                                                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" width="100px;" aria-label="Role: activate to sort column ascending">Price</th>                                                    
                                                        <th class="sorting_disabled" rowspan="1" colspan="1" width="100px;" aria-label="Actions">Actions</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {table.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td class="sorting_1">

                                                            </td>
                                                            <td>{index + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.Course&&item.Course.name}</td>
                                                            <td>{item.Course&&item.Course.CoursePrice}</td>
                                                            <td>
                                                                <div class="d-inline-block text-nowrap">
                                                                    <Link to={`/topic/${item.id}`} className="navbar-brand" >  <button class="btn btn-sm btn-icon" data-bs-target="#editUser" data-bs-toggle="modal">
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
                                            </table>
                                            <div class="row mx-2"><div class="col-sm-12 col-md-6"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 50 entries</div></div><div class="col-sm-12 col-md-6"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="1" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="2" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="3" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="4" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" role="link" data-dt-idx="next" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                                    </div>
                                </div>
                                {/*  <!-- Modal -->
                            <!-- Edit User Modal --> */}
                                <div class="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-lg modal-simple modal-edit-user">
                                        <div class="modal-content p-3 p-md-5">
                                            <div class="modal-body">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div class="text-center mb-4 cus_infor">
                                                    <h3>Edit Information</h3>
                                                    <p>Updating  details will receive a privacy audit.</p>
                                                </div>
                                                <form id="editUserForm" className="row g-3 fv-plugins-bootstrap5 fv-plugins-framework" onSubmit={handleUpdate} novalidate="novalidate">


                                                    <div class="mb-3 fv-plugins-icon-container">
                                                        <label class="form-label" for="add-user-fullname">Subject Name</label>
                                                        <input type="text" class="form-control" id="add-user-fullname" placeholder="Subject" name='name'
                                                           value={formData.name}onChange={handleChange} />
                                                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                    </div>

                                                    <div class="mb-3 fv-plugins-icon-container">
                                                        <label for="exampleFormControlSelect2" class="form-label">Select Class</label>
                                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId" value={formData.CoursesId} onChange={handleChange}>
                                                            <option value="">Select</option>
                                                            {courses.map((option) => (
                                                                <option key={option.id} value={option.id}>{option.name}</option>
                                                            ))}
                                                        </select>
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
export default Topic

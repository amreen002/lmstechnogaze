import React, { useState ,useEffect} from "react";
import axios from 'axios';
import FooterFrontend from '../Components/FooterFrontend';
import { useNavigate } from 'react-router-dom';
import Navbarmenu from '../Components/Navbarmenu';
const { REACT_APP_API_ENDPOINT } = process.env;
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        roleName: '',
        phoneNumber: '',
        message: '',
        departmentId: '',
    });

    const handleChange = (e) => {
        const { name, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0]  // Handle files differently
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
console.log(formData)
            if (token) {
                const response = await axios.post(`${REACT_APP_API_ENDPOINT}/users`, formData, {
                    headers: {
                         Authorization: `Bearer ${token}`
                    }
                });
                window.location.href = `/complete-profile/${response.data.users.id}`;
                alert('User Successfully Create');
            
            }
        } catch (error) {
            alert('Failed to send message.');
        }
    

    
    };

    return(
        <div>
            <section className='sticy-header logo-size'>
                <Navbarmenu />
            </section>


    <div className="login-registration-wrapper">
        <div className="container">
            <div className="row g-0">
            <div class="col-lg-6">
                    <div className="login-page-form-area">
                        <h4 className="title">Sign Up to Your Account👋</h4>
                        <form action="POST" onSubmit={handleSubmit}>
                                    <div className="half-input-wrapper">
                                        <div className="single-input-wrapper">
                                            <label for="name">Your Name*</label>
                                            <input onChange={handleChange} value={formData.name} name="name" id="name" type="text" placeholder="Enter Your Name" required="" />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <label for="phoneNumber">Contact*</label>
                                            <input onChange={handleChange} value={formData.phoneNumber} name="phoneNumber" id="phoneNumber" type="number" placeholder="Enter Phone Number" required="" />
                                        </div>
                                    </div>
                                    <div className="half-input-wrapper">
                                        <div className="single-input-wrapper">
                                            <label for="username">User Name</label>
                                            <input onChange={handleChange} value={formData.userName} name="userName" id="username" type="text" placeholder="Enter User Name" required="" />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <label for="email">Email*</label>
                                            <input onChange={handleChange} value={formData.email} name="email" id="email" type="email" placeholder="Enter Your Email" required="" />
                                        </div>
                                    </div>
                                    <div className="half-input-wrapper">
                                        <div className="single-input-wrapper">
                                            <label for="password">Your Password</label>
                                            <input onChange={handleChange} value={formData.password} name="password" id="password" type="password" placeholder="Password" required="" />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <label for="passwords">Instructor/Student</label>
                                            <select id="departmentId" name="departmentId" className="form-select" value={formData.departmentId} onChange={handleChange}>
                                                <option value="3">Instructor</option>
                                                <option value="4">Student</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="single-checkbox-filter">
                                        <div className="check-box">
                                            <input type="checkbox" id="type-1" />
                                            <label for="type-1">Accept the Terms and Privacy Policy</label><br />
                                        </div>
                                    </div>
                            <button type="submit"  className="rts-btn btn-primary">Signup</button>
                         
                           
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-thumbnail-login-p mt--100">
                        <img src="assets/fontend/images/banner/login-bg.png" width="600" height="495" alt="login-form" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterFrontend />
        </div>
    );
};

export default SignUp;
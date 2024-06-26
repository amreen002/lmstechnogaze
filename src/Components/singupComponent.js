import React, { useState } from "react";
import axios from 'axios';
import FooterFrontend from '../Components/FooterFrontend';
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
        image: null,
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
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const token = localStorage.getItem('token');

            if (token) {
                const response = await axios.post(`${REACT_APP_API_ENDPOINT}/users`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Important for file upload
                         Authorization: `Bearer ${token}`

                    }
                });
                console.log(response.data);
                window.location.href = "/complete-profile";
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
                    <div class="login-page-form-area">
                        <h4 class="title">Sign Up to Your Account👋</h4>
                        <form action="POST" onSubmit={handleSubmit}>
                            <div class="single-input-wrapper">
                                <label for="name">Your Name*</label>
                                <input  onChange={handleChange} value={formData.name}  name="name" id="name" type="text" placeholder="Enter Your Name" required=""/>
                            </div>
                            <div class="half-input-wrapper">
                                <div class="single-input-wrapper">
                                    <label for="username">User Name</label>
                                    <input  onChange={handleChange} value={formData.userName}  name="userName" id="username" type="text" placeholder="Enter User Name" required=""/>
                                </div>
                                <div class="single-input-wrapper">
                                    <label for="email">Email*</label>
                                    <input  onChange={handleChange} value={formData.email}  name="email" id="email" type="email" placeholder="Enter Your Email" required=""/>
                                </div>
                            </div>
                            <div class="half-input-wrapper">
                                <div class="single-input-wrapper">
                                    <label for="password">Your Password</label>
                                    <input onChange={handleChange} value={formData.password}  name="password" id="password" type="password" placeholder="Password" required=""/>
                                </div>
                                <div class="single-input-wrapper">
                                    <label for="passwords">Instructor/Student</label>
                                    <select id="passwords" name="departmentId"   className="form-select" value={formData.departmentId} onChange={handleChange}>
                                        <option value="3">Instructor</option>
                                        <option value="4">Student</option>
                                                
                                    </select>
                                </div>
                            </div>
                            <div class="single-checkbox-filter">
                                <div class="check-box">
                                    <input type="checkbox" id="type-1"/>
                                    <label for="type-1">Accept the Terms and Privacy Policy</label><br/>
                                </div>
                            </div>
                            <button type="submit"  class="rts-btn btn-primary">Signup</button>
                         
                           
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
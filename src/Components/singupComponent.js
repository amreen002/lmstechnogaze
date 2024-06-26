import React, { useState } from "react";
import axios from 'axios';
import FooterFrontend from '../Components/FooterFrontend';
import Navbarmenu from '../Components/Navbarmenu';

const SignUp = () => {



    const [error, setError] = useState(null);
    const [state, setState] = useState({
        email: '',
        password: '',
    });
/*     const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }; */

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
     
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = state;

     /*    if (!validateEmail(email)) {
            setError('Invalid Email',error);
            return;
        } */

      /*   if (password.length < 8) {
            setError('Password must be at least 8 chars long',error);
            return;
        }
 */
       /*  setError(null); */
             // Assuming onLogin returns a promise
        
    
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
                        <form action="#">
                            <div class="single-input-wrapper">
                                <label for="name">Your Name*</label>
                                <input id="name" type="text" placeholder="Enter Your Name" required=""/>
                            </div>
                            <div class="half-input-wrapper">
                                <div class="single-input-wrapper">
                                    <label for="username">User Name</label>
                                    <input id="username" type="text" placeholder="Enter User Name" required=""/>
                                </div>
                                <div class="single-input-wrapper">
                                    <label for="email">Email*</label>
                                    <input id="email" type="email" placeholder="Enter Your Email" required=""/>
                                </div>
                            </div>
                            <div class="half-input-wrapper">
                                <div class="single-input-wrapper">
                                    <label for="password">Your Password</label>
                                    <input id="password" type="password" placeholder="Password" required=""/>
                                </div>
                                <div class="single-input-wrapper">
                                    <label for="passwords">Re Password</label>
                                    <input id="passwords" type="password" placeholder="Re Password" required=""/>
                                </div>
                            </div>
                            <div class="single-checkbox-filter">
                                <div class="check-box">
                                    <input type="checkbox" id="type-1"/>
                                    <label for="type-1">Accept the Terms and Privacy Policy</label><br/>
                                </div>
                            </div>
                            <button class="rts-btn btn-primary">signup</button>
                         
                           
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
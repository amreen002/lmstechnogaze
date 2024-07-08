import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterFrontend from '../Components/FooterFrontend';
import Navbarmenu from '../Components/Navbarmenu';
import ValidationLogin from "../validation/loginvalidation";
import { GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const [errors,setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    setErrors(ValidationLogin(state))
    try {
      const response = await onLogin(email, password);
      if (!response.success) {
        setError(response.message);
        console.log(response.message)
        toast.error(error)
      } else {
        // Redirect to dashboard page
        navigate('/dashboard');
        console.log(response.message)
      }
    } catch (error) {
      setError(error.response?.data?.message);
   
    }
  };


  const [show, setShow] = useState(false)

  const handleshow=()=>{
    setShow(show ? false : true)
  }


  return (
    <div>
      <section className='sticy-header logo-size'>
        <Navbarmenu />
      </section>

      <div className="login-registration-wrapper">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="login-page-form-area">
                <h4 className="title">Login to Your Account👋</h4>
                <form onSubmit={handleSubmit}>
                  <div className="single-input-wrapper ">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="Enter Your Email" 
                   
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                    />
                     {errors.email && <div className="error">{errors.email}</div>}
                    
                  </div>
                  <div className="single-input-wrapper paswrd">
                    <label htmlFor="password">Your Password</label>
                    <input 
                      id="password" 
                      type={show ? "text" : "password"} 
                      placeholder="Password" 
                    
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                    />
                     <i className={`far ${show ? 'fa-eye' : 'fa-eye-slash'}`} onClick={handleshow}></i>
                     {errors.password && <div className="error">{errors.password}</div>}
                  </div>
                  <button className="rts-btn btn-primary" type="submit">Login</button>
                </form>
                <div className="google-apple-wrapper">
                  {/* <div className="google">
                    <GoogleLogin
                      onSuccess={handleGoogleLoginSuccess}
                      onError={handleGoogleLoginError}
                    />
                  </div> */}
                  {/* Add your other login options here */}
                </div>
                {error && <span style={{ color: 'red' }}>{error}</span>}
                <p>Don't Have an account? <a href="signup">Registration</a></p>
              </div>
            </div>
            <div class="col-lg-6"><div class="contact-thumbnail-login-p mt--100">
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

export default Login;

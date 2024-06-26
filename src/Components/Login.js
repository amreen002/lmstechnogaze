import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterFrontend from '../Components/FooterFrontend';
import Navbarmenu from '../Components/Navbarmenu';
import { GoogleLogin } from '@react-oauth/google';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;

    try {
      const response = await onLogin(email, password);
      if (!response.success) {
        setError(response.message);
      } else {
        // Redirect to dashboard page
        navigate('/dashboard');
      }
    } catch (error) {
      setError('An error occurred while logging in');
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Assuming we have a way to determine if this is a sign-up or sign-in
    const isSignUp = true; // Replace with actual logic to determine this

    if (isSignUp) {
      navigate('/complete-profile');
    } else {
      navigate('/dashboard');
    }
  };

  const handleGoogleLoginError = () => {
    console.log('Login Failed');
  };

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
                  <div className="single-input-wrapper">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="Enter Your Email" 
                      required    
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="single-input-wrapper">
                    <label htmlFor="password">Your Password</label>
                    <input 
                      id="password" 
                      type="password" 
                      placeholder="Password" 
                      required
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                    />
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

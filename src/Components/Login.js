import React, { useState } from "react";
import FooterFrontend from '../Components/FooterFrontend';
import Navbarmenu from '../Components/Navbarmenu';
const Login = ({onLogin}) => {

  


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
             try {
                const response = await onLogin(email, password);
                if (!response.success) {
                    setError(response.message);
                }
            } catch (error) {
                setError('An error occurred while logging in');
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
                <div className="col-lg-6">
                    <div className="login-page-form-area">
                        <h4 className="title">Login to Your Account👋</h4>
                        <form  onSubmit={handleSubmit}>
                            <div className="single-input-wrapper">
                                <label for="email">Your Email</label>
                                <input id="email" type="email" placeholder="Enter Your Email" required    name="email"
                                            value={state.email}
                                            onChange={handleChange}/>
                            </div>
                            <div className="single-input-wrapper">
                                <label for="password">Your Password</label>
                                <input id="password" type="password" placeholder="Password" required
                                 name="password"
                                 value={state.password}
                                 onChange={handleChange}
                                 />
                            </div>
                            <div className="single-checkbox-filter">
                                <div className="check-box">
                                    <input type="checkbox" id="type-1" />
                                    <label for="type-1">Remember Me</label><br />
                                </div>
                            </div>
                            <button className="rts-btn btn-primary" type="submit">Login</button>

                            <div className="google-apple-wrapper">
                                <div className="google">
                                    <img src="assets/fontend/images/contact/06.png" alt="contact" />
                                </div>
                                <div className="google">
                                    <img src="assets/fontend/images/contact/07.png" alt="contact" />
                                </div>
                            </div>
                            <p>Don't Have an account? <a href="registration.html">Registration</a></p>
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

export default Login;
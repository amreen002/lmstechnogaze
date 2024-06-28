import React from 'react';

const Footer = () => {
  return (

    <div>
     
     <div className="footer-callto-action-area bg-light-1">
       
        <div className="container-fluid">
            <div className="row  ptb--50">
                <div className="col-lg-12">
                  
                    <div className="footer-one-main-wrapper">
                      
                        <div className="footer-singl-wized left-logo">
                            <div className="head">
                                <a href="#">
                                    <img src="assets/fontend/images/logo/logotgsc.png" alt="logo" loading="lazy" />
                                </a>
                            </div>
                            <div className="body">
                                <p className="dsic">
                                    We are passionate education dedicated to providing high-quality resources learners
                                    all backgrounds.
                                </p>
                                <ul className="wrapper-list">
                                    <li><i className="fa-regular fa-location-dot"></i>Bhopal, Madhya Pradesh</li>
                                    <li><i className="fa-regular fa-phone"></i><a href="tel:+4733378901">+(91)- 9926602832</a></li>
                                </ul>
                            </div>
                        </div>
                 
                        <div className="footer-singl-wized">
                            <div className="head">
                                <h6 className="title">Quick Links</h6>
                            </div>
                            <div className="body">
                                <ul className="menuu">
                                    <li><a href="course-two.html">Latest Courses</a></li>
                                    <li><a href="about.html">Mission & Vision</a></li>
                                    <li><a href="become-instructor.html">Join a Carrer</a></li>
                                    <li><a href="zoom-meeting.html">Zoom Meeting</a></li>
                                    <li><a href="pricing.html">Pricing Plan</a></li>
                                </ul>
                            </div>
                        </div>
                     
                     
             
                        <div className="footer-singl-wized input-area">
                            <div className="head">
                                <h6 className="title">Newsletter</h6>
                            </div>
                            <div className="body">
                                <p className="disc">Subscribe Our newsletter get update our new course</p>
                                <form action="#">
                                    <div className="input-area-fill">
                                        <input type="email" placeholder="Enter Your Email" required />
                                        <button> Subscribe</button>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <input type="checkbox" id="exampleCheck1" />
                                        <label for="exampleCheck1">I agree to the terms of use and privacy policy.</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                
                    </div>
                
                </div>
            </div>
        </div>
      
    </div>
    <section className='foot_copy'>
    <div className="copyright-area-one-border">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-area-one">
                            <p>Copyright © 2024 All Rights Reserved by The Good Student Co.</p>
                            <div className="social-copyright">
                             <span>Design & Developed By <a href='https://technogaze.com/'>TECHNOGAZE SOLUTIONS PRIVATE LIMITED</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>

  );
};

export default Footer;

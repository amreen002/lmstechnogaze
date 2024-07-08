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
                                  
                                </p>
                                <ul className="wrapper-list">
                                    <li><i className="fa-regular fa-location-dot"></i>Bhopal, Madhya Pradesh</li>
                                 
                                </ul>
                            </div>
                        </div>
                 
                        <div className="footer-singl-wized">
                            <div className="head">
                                <h6 className="title qucik">Quick Links</h6>
                            </div>
                            <div className="body">
                                <ul className="menuu">
                                    <li><a className='company' href="course-two.html"></a></li>
                                    <li><a className='company' href="about.html"></a></li>
                                    
                                    <li><a className='company' href="pricing.html"></a></li>
                                </ul>
                            </div>
                        </div>
                     
                     
             
                        <div className="footer-singl-wized input-area">
                            <div className="head">
                                <h6 className="title new">Newsletter</h6>
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

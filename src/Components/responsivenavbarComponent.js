import React from "react";
import { Link } from "react-router-dom";
function ResponsivenavbarComponent({closebtn}){
    return(
        <>
        <div id="side-bar" class="side-bar header-two show">
        <button class="close-icon-menu" onClick={closebtn}><i class="far fa-times"></i></button>
     
        <div class="mobile-menu-main">
        <Link to="/" className="logo-area">
                    <img src="assets/fontend/images/logo/logotgsc.png" alt="logo" />
                  </Link>
            <nav class="nav-main mainmenu-nav mt--30">
                <ul class="mainmenu metismenu" id="mobile-menu-active">
                    <li>
                    <Link className="nav-link" to="/" >Home</Link>
                      
                    </li>
                    <li>
                    <Link className="nav-link" to="/about">About Us</Link>
                       
                    </li>
                    <li>
                    <Link className="nav-link" to="/learning-style-assessment">Learning Style Assessment</Link>
                     
                    </li>
                    <li>
                    <Link className="nav-link" to="/essay-services">Essay Services</Link>
                       
                    </li>

                </ul>
            </nav>

            <div class="buttons-area">
            <Link to="/login" className="rts-btn btn-border">Log In</Link>
            <Link to="/signup" className="rts-btn btn-primary">Sign Up</Link>
            </div>

            <div class="rts-social-style-one pl--20 mt--50">
                <ul>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        </>
    )
}
export default ResponsivenavbarComponent
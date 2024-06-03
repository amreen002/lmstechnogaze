import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarmenu() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary cus_menu">
    //   <Container>
    //     <Navbar.Brand as={Link} to="/">
    //       <img src="../assets/img/home-img/TGSC-Logo.svg" className='img-fluid' alt="Logo" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} to="/">Home</Nav.Link>
    //         <Nav.Link as={Link} to="/about">About Us</Nav.Link>
    //         <Nav.Link as={Link} to="/learning-style-assessment">Learning Style Assessment</Nav.Link>
    //         <Nav.Link as={Link} to="/essay-services">Essay Services</Nav.Link>
    //         <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
    //         <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <header className="header-one header--sticky">
    <div className="header-top-one-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-top-one">
                        <div className="left-information">
                            <a href="mailto:someone@example.com" className="email"><i className="fa-light fa-envelope"></i>info@studyhub.com</a>
                            <a href="tel:+4733378901" className="email"><i className="fa-light fa-phone"></i>+61 012 012 445</a>
                        </div>
                        <div className="right-information">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="header-one-wrapper">
                    <div className="left-side-header">
                        <a href="index-2.html" className="logo-area">
                            <img src="assets/images/logo/logo-1.svg" alt="logo" />
                        </a>
                     
                    </div>


                    <div className="main-nav-one">
                        <nav>
                            <ul>
                                <li >
                                    <a className="nav-link" href="#">Home</a>

                                </li>
                                <li >
                                    <a className="nav-link" href="#">About Us</a>

                                </li>
                                <li >
                                    <a className="nav-link" href="#">Learning Style Assessent </a>

                                </li>
                                <li >
                                    <a className="nav-link" href="#">Essay Services</a>

                                </li>
                              
                            </ul>
                        </nav>
                    </div>


                    <div className="main-nav-one">
                    </div>
                    <div className="header-right-area-one">
                        <div className="actions-area">
                            <div className="search-btn" id="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M19.9375 18.9652L14.7454 13.7732C15.993 12.2753 16.6152 10.3542 16.4824 8.40936C16.3497 6.46453 15.4722 4.64575 14.0326 3.33139C12.593 2.01702 10.7021 1.30826 8.75326 1.35254C6.8044 1.39683 4.94764 2.19075 3.56924 3.56916C2.19083 4.94756 1.39691 6.80432 1.35263 8.75317C1.30834 10.702 2.0171 12.5929 3.33147 14.0325C4.64584 15.4721 6.46461 16.3496 8.40944 16.4823C10.3543 16.6151 12.2754 15.993 13.7732 14.7453L18.9653 19.9374L19.9375 18.9652ZM2.75 8.93742C2.75 7.71365 3.11289 6.51736 3.79278 5.49983C4.47267 4.4823 5.43903 3.68923 6.56965 3.22091C7.70026 2.7526 8.94436 2.63006 10.1446 2.86881C11.3449 3.10756 12.4474 3.69686 13.3127 4.56219C14.1781 5.42753 14.7674 6.53004 15.0061 7.7303C15.2449 8.93055 15.1223 10.1747 14.654 11.3053C14.1857 12.4359 13.3926 13.4022 12.3751 14.0821C11.3576 14.762 10.1613 15.1249 8.9375 15.1249C7.29703 15.1231 5.72427 14.4706 4.56429 13.3106C3.4043 12.1506 2.75182 10.5779 2.75 8.93742Z" fill="#553CDF" />
                                </svg>
                            </div>
                            <div className="cart cart-icon">
                                <i className="fa-regular fa-cart-shopping"></i>
                            </div>
                        </div>
                        <div className="buttons-area">
                            <a href="log-in.html" className="rts-btn btn-border">Log In</a>
                            <a href="registration.html" className="rts-btn btn-primary">Sign Up</a>
                        </div>
                        <div className="menu-btn" id="menu-btn">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                <rect width="20" height="2" fill="#1F1F25"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  );
}

export default Navbarmenu;

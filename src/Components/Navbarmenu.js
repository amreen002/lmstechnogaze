import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItemComponent from './cartitemComponent';
import SearchComponent from './searchComponent';

function Navbarmenu() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isBoardDropdownOpen, setIsBoardDropdownOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openSearch = () => {
    setIsSearch(true);
  };

  const closeSearch = () => {
    setIsSearch(false);
  };

  const handleServiceMouseEnter = () => {
    setIsServiceDropdownOpen(true);
  };

  const handleServiceMouseLeave = () => {
    setIsServiceDropdownOpen(false);
  };

  const handleResourcesMouseEnter = () => {
    setIsResourcesDropdownOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    setIsResourcesDropdownOpen(false);
  };

  const handleBoardMouseEnter = () => {
    setIsBoardDropdownOpen(true);
  };

  const handleBoardMouseLeave = () => {
    setIsBoardDropdownOpen(false);
  };

  return (
    <>
      <header className="header-one header--sticky">
        <div className="header-top-one-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-top-one">
                  <div className="left-information">
                    <a href="mailto:someone@example.com" className="email">
                      <i className="fa-light fa-envelope"></i>thegoodstudentcompany@gmail.com
                    </a>
                    <a href="tel:+4733378901" className="email">
                      <i className="fa-light fa-phone"></i>+91- 9926602832
                    </a>
                  </div>
                  <div className="right-information"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-one-wrapper">
                <div className="left-side-header">
                  <Link to="/" className="logo-area">
                    <img src="assets/fontend/images/logo/logotgsc.png" alt="logo" />
                  </Link>
                </div>
                <div className="main-nav-one">
                  <nav>
                    <ul>
                      <li>
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/about">About Us</Link>
                      </li>
                      <li className="dropdown"
                        onMouseEnter={handleServiceMouseEnter}
                        onMouseLeave={handleServiceMouseLeave}>
                        <Link className="nav-link">Service</Link>
                        {isServiceDropdownOpen && (
                          <ul className="std-dropdown-menu">
                            <li><Link className="dropdown-item" to="/Lsa">Learning Style Assessment</Link></li>
                            <li><Link className="dropdown-item" to="/essay-services">Essay Services</Link></li>
                          </ul>
                        )}
                      </li>
                      <li className="dropdown"
                        onMouseEnter={handleResourcesMouseEnter}
                        onMouseLeave={handleResourcesMouseLeave}>
                        <Link className="nav-link">Resources</Link>
                        {isResourcesDropdownOpen && (
                          <ul className="std-dropdown-menu">
                            <li><Link className="dropdown-item" to="/blog">Blogs</Link></li>
                            <li><Link className="dropdown-item" to="/events">Events</Link></li>
                            <li><Link className="dropdown-item" to="/downloadusefulllinks">Downloads/ Useful Links</Link></li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <Link className="nav-link" to="/faqs">FAQs</Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                      </li>
                      <li className="dropdown"
                        onMouseEnter={handleBoardMouseEnter}
                        onMouseLeave={handleBoardMouseLeave}>
                        <Link className="nav-link">Board</Link>
                        {isBoardDropdownOpen && (
                          <ul className="std-dropdown-menu">
                            <li><Link className="dropdown-item" to="/cbse">CBSE</Link></li>
                            <li><Link className="dropdown-item" to="/icse">ICSE</Link></li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right-area-one">
                  <div className="actions-area">
                    <div className="search-btn" id="search" onClick={openSearch}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M19.9375 18.9652L14.7454 13.7732C15.993 12.2753 16.6152 10.3542 16.4824 8.40936C16.3497 6.46453 15.4722 4.64575 14.0326 3.33139C12.593 2.01702 10.7021 1.30826 8.75326 1.35254C6.8044 1.39683 4.94764 2.19075 3.56924 3.56916C2.19083 4.94756 1.39691 6.80432 1.35263 8.75317C1.30834 10.702 2.0171 12.5929 3.33147 14.0325C4.64584 15.4721 6.46461 16.3496 8.40944 16.4823C10.3543 16.6151 12.2754 15.993 13.7732 14.7453L18.9653 19.9374L19.9375 18.9652ZM2.75 8.93742C2.75 7.71365 3.11289 6.51736 3.79278 5.49983C4.47267 4.4823 5.43903 3.68923 6.56965 3.22091C7.70026 2.7526 8.94436 2.63006 10.1446 2.86881C11.3449 3.10756 12.4474 3.69686 13.3127 4.56219C14.1781 5.42753 14.7674 6.53004 15.0061 7.7303C15.2449 8.93055 15.1223 10.1747 14.654 11.3053C14.1857 12.4359 13.3926 13.4022 12.3751 14.0821C11.3576 14.762 10.1613 15.1249 8.9375 15.1249C7.29703 15.1231 5.72427 14.4706 4.56429 13.3106C3.4043 12.1506 2.75182 10.5779 2.75 8.93742Z" fill="#553CDF" />
                      </svg>
                    </div>
                    <div className="cart cart-icon">
                      <i className="fa-regular fa-cart-shopping" onClick={openPopup}></i>
                    </div>
                  </div>
                  <div className="buttons-area">
                    <Link to="/login" className="rts-btn btn-border">Log In</Link>
                    <Link to="/signup" className="rts-btn btn-primary">Sign Up</Link>
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
      {isPopupOpen && <CartItemComponent closePopup={closePopup} />}
      {isSearch && <SearchComponent closeSearch={closeSearch} />}
    </>
  );
}

export default Navbarmenu;

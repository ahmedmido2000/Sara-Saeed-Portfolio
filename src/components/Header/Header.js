import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className="pt-4">
        <div className="container-fluid px-md-5">
            <nav className="navbar navbar-expand-lg py-0 py-md-1 navbar-dark custom-navbar px-4">
        <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand d-flex align-items-center" href="#">
            <img
                src="assets/logo.png"
                alt="Sara Saeed Logo"
                width="104"
                height="64"
                className="me-2 logo"
            />
            
            </a>

            {/* Toggle button للموبايل */}
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-3">
                <li className="nav-item">
                <a className="nav-link active text-highlight" href="#home">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                    Testimonials
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#about">
                    About Me
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#services">
                    Services
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#projects">
                    Projects
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#certificates">
                    Certificates
                </a>
                </li>
            </ul>

            {/* CTA Button */}
            <a href="https://www.upwork.com/freelancers/~01f39ce7f40c46b85c?companyReference=1644800527016685569&mp_source=share" target='_blank' className="btn btn-outline-light py-2 custom-btn mb-3 mb-lg-0">
                Let’s Work Together
            </a>
            </div>
        </div>
            </nav>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <div className="d-flex gap-2 align-items-start">
                    <h2 className='hello m-0'>Hello</h2>
                    <img src="assets/Vector-1.png" className='vector-1' alt="vector" />
                </div>
                <h1 className='main-title text-center m-0'>I’m <span className='main-color'>Sara Saeed</span></h1>
                <div className="d-flex flex-wrap justify-content-center flex-md-nowrap gap-1 position-relative">
                    <img src="assets/Vector-2.png" className='vector-2' alt="vector" />
                    <h6 className='sub-title m-0 black-color mt-1 text-nowrap'>AI-Powered Creative</h6>
                    <h6 className='sub-title m-0 black-color'>|</h6>
                    <h6 className='sub-title m-0 main-color mt-1 text-nowrap'>Social Media Strategist</h6>
                    <h6 className='sub-title m-0 black-color'>|</h6>
                    <h6 className='sub-title m-0 black-color mt-1 text-nowrap'>Writer & Virtual Assistant</h6>
                </div>
                <div className="d-flex align-items-center border px-md-5 px-3 py-2 rounded-2 gap-1 mt-xl-5 mt-md-4 mt-3">
                    <img src="assets/users.png" className='users' alt="users" />
                    <h6 className='header-clients m-0 main-color'>Trusted by</h6>
                    <h6 className='header-clients m-0 black-color'>+500 Clients</h6>
                    <h6 className='header-clients m-0 main-color'>Globally</h6>
                </div>
                <div className="row mt-md-5 mt-4 w-100">
                    <div className='col-sm-4'>
                    <i class="fa-solid fa-quote-left quote-icon"></i>
                    <p className='m-0 quote-desc'>Professional, reliable, and endlessly creative. Sara is the kind of person you want on your team.</p>
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-2 mt-3">
                    <div className="d-flex flex-column align-items-end w-100">
                        <div className="d-flex gap-1">
                            <i className='fa-solid fa-star main-color star-icon'></i>
                            <i className='fa-solid fa-star main-color star-icon'></i>
                            <i className='fa-solid fa-star main-color star-icon'></i>
                            <i className='fa-solid fa-star main-color star-icon'></i>
                            <i className='fa-solid fa-star main-color star-icon'></i>
                        </div>
                        <h3 className='years m-0 text-nowrap'>4 Years</h3>
                        <p className='experince m-0'>Experince</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="container-fluid px-md-5 py-5">
            <div className="row">
            <div className="col-md-8 mb-3">
                <h2 className='footer-title'>Got a project idea? I’d be glad to discuss how <span className='main-color'>we can make it a success.</span></h2>
            </div>
            <div className="col-md-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                    <img src="assets/up.png" className='img-fluid' alt="img-up" />
                    <p className='m-0 footer-desc mb-2'>you can hire me on upwork</p>
                </div>
                <a href='https://www.upwork.com/freelancers/~01f39ce7f40c46b85c?companyReference=1644800527016685569&mp_source=share' className="service-link text-white" target='_blank'>
                  Let’s Work Together <i className="fa-solid fa-arrow-right ms-1"></i>
                </a>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
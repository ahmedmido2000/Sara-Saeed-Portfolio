import React from 'react'
import './Tools.css'
const Tools = () => {
  return (
    <section className='tools'>
        <div className="container-fluid px-md-5 py-5">
            <div className="row">
                <div className="col-lg-4">
                    <h2 className='main-section-title mb-3'>Tools</h2>
                    <h5 className='section-subtitle text-white mb-3'>I work with over 10+ Tools To Help clients To Achieve there goals.</h5>
                    <p className='service-desc text-white'>Empowering businesses with the right tools to unlock growth and success</p>
                </div>
                <div className="col-lg-8">
                    <div className="row mt-4">
                        <div className="col-sm-3 col-6">
                            <img src="assets/tool-logo-1.png" className='img-fluid tool-logo mb-4' alt="logo" />
                            <img src="assets/tool-logo-2.png" className='img-fluid tool-logo mb-4' alt="logo" />
                        </div>
                        <div className="col-sm-3 col-6 pt-sm-5">
                            <img src="assets/tool-logo-3.png" className='img-fluid tool-logo mb-4' alt="logo" />
                            <img src="assets/tool-logo-4.png" className='img-fluid tool-logo mb-4' alt="logo" />
                        </div>
                        <div className="col-sm-3 col-6">
                            <img src="assets/tool-logo-5.png" className='img-fluid tool-logo mb-4' alt="logo" />
                            <img src="assets/tool-logo-6.png" className='img-fluid tool-logo mb-4' alt="logo" />
                        </div>
                        <div className="col-sm-3 col-6 pt-sm-5">
                            <img src="assets/tool-logo-7.png" className='img-fluid tool-logo mb-4' alt="logo" />
                            <img src="assets/tool-logo-8.png" className='img-fluid tool-logo mb-4' alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tools
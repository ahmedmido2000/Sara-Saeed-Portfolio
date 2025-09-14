import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className='about my-md-5' id='about'>
        <div className="container-fluid px-md-5 py-5">
            <div className="row">
                <div className="col-md-4 border-right">
                    <img src="assets/about.png" alt="" />
                </div>
                <div className="col-md-8 ps-md-5 px-3">
                    <h2 className='about-title'>About Me</h2>
                    <p className='about-desc'>I help clients by <span className='main-color'>taking the stress out of content and project management.</span> Through clear, engaging writing and reliable virtual assistance, I ensure their ideas turn into results, whether growing an audience, boosting sales, or saving time. </p>
                    <p className='about-desc'>My value lies in blending creativity with research, strategy, and AI-powered tools to deliver work that’s not only polished and professional but also meaningful and effective for their business.</p>
                </div>
            </div>
        </div>
        <div className="animated-row-wrapper mt-5">
  <div className="animated-row-1 p-2">
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Social media content</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Virtual Assistance</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Copywriting</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Content Writing</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">AI-Powered Creative</p>

    {/* 👇 نكرر نفس العناصر مرتين علشان الشريط يبان مستمر */}
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Social media content</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Virtual Assistance</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Copywriting</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Content Writing</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">AI-Powered Creative</p>
  </div>
</div>

    </section>
  )
}

export default About
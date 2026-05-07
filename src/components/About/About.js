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
                    <p className='about-desc'>Great copy doesn’t just sound good; it makes people feel understood enough to take action.</p>
                    <p className='about-desc'>I’m a Direct Response Copywriter helping eCommerce brands turn attention into trust, clicks, and conversions through strategic email and sales copy rooted in real customer psychology.</p>
                    <p className='about-desc'>I focus on creating messaging that feels natural, emotionally engaging, and conversion-driven, because the strongest brands don’t just sell products, they build connections. From retention emails to sales-focused campaigns, my goal is simple: write copy people actually want to read, trust, and buy from.</p>
                </div>
            </div>
        </div>
        <div className="animated-row-wrapper mt-5">
  <div className="animated-row-1 p-2">
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Email Marketing</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Direct Response</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Social Media Content</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Before & After</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">AI-Powered Creative</p>

    {/* 👇 نكرر نفس العناصر مرتين علشان الشريط يبان مستمر */}
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Email Marketing</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Direct Response</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Social Media Content</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">Before & After</p>
    <img src="assets/Star-8.png" alt="" />
    <p className="animated-row-text m-0">AI-Powered Creative</p>
  </div>
</div>

    </section>
  )
}

export default About
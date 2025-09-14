import React from 'react'
import './Why.css'
const Why = () => {
    const why = [
        {
          id: 1,
          imgMain: "assets/why-icon-1.png", // 🔽 مسار الصورة
          title: "Top-Rated Professional ",
          text: "Consistently recognized for quality, professionalism, and results on Upwork and beyond.",
        },
        {
          id: 2,
          imgMain: "assets/why-icon-2.png",
          title: "Writing Excellence",
          text: "I craft clear, engaging, and impactful content that fits perfectly with your brand and audience.",
        },
        {
          id: 3,
          imgMain: "assets/why-icon-3.png",
          title: "Thorough Research",
          text: "I dig deep into reliable sources to provide accurate information that strengthens your message.",
        },
        {
          id: 4,
          imgMain: "assets/why-icon-4.png",
          title: "AI-Powered Creative",
          text: "I use AI tools to enhance creativity and speed, delivering innovative solutions for your projects.",
        },
        {
          id: 5,
          imgMain: "assets/why-icon-5.png",
          title: "Editing Precision",
          text: "I refine every piece with attention to detail, ensuring clarity, flow, and professional quality.",
        },
        {
          id: 6,
          imgMain: "assets/why-icon-6.png",
          title: "Project Management",
          text: "I handle multiple tasks smoothly, always meeting deadlines and keeping communication open.",
        }
      ];
  return (
    <section className="services py-5">
    <div className="container-fluid px-md-5">
          <h2 className="main-section-title mb-4">Why Clients Choose Me</h2>
          <div className="row">
          {why.map((service) => (
            <div className="col-md-6 mb-4">
      <div className="card why-card p-4 h-100 shadow-sm">
              <div className="d-flex gap-2 align-items-center mb-3">
              <div className="">
              <img src={service.imgMain} alt={service.title} className="" />
              </div>

                <h5 className="mb-0 service-title">{service.title}</h5>
              </div>
              <p className="mb-3 service-desc">{service.text}</p>
            </div>
            </div>
            ))}
          </div>
    </div>
  </section>
  )
}

export default Why;
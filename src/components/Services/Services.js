import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      imgMain: "assets/icon-1-main.png", // 🔽 مسار الصورة
      imgSecondary: "assets/icon-1-secondary.png",
      title: "Social media content",
      text: "Creating scroll-stopping posts and stories that spark engagement, build trust, and keep your audience coming back for more.",
      link: "https://www.upwork.com/freelancers/~01f39ce7f40c46b85c?companyReference=1644800527016685569&mp_source=share"
    },
    {
      id: 2,
      imgMain: "assets/icon-2-main.png",
      imgSecondary: "assets/icon-2-secondary.png",
      title: "AI-Powered Creative",
      text: "Using smart AI tools to create faster, sharper, and more impactful digital experiences.",
      link: "https://www.upwork.com/freelancers/~01f39ce7f40c46b85c?companyReference=1644800527016685569&mp_source=share"
    },
    {
      id: 3,
      imgMain: "assets/icon-3-main.png",
      imgSecondary: "assets/icon-3-secondary.png",
      title: "Virtual Assistance",
      text: "Providing reliable support to help you stay organized, save time, and focus on what matters most.",
      link: "https://www.upwork.com/freelancers/~01f39ce7f40c46b85c?companyReference=1644800527016685569&mp_source=share"
    },
    {
      id: 4,
      imgMain: "assets/icon-4-main.png",
      imgSecondary: "assets/icon-4-secondary.png",
      title: "Copy Writing ",
      text: "Delivering persuasive words that capture attention, spark interest, and inspire action.",
      link: "https://www.upwork.com/freelancers/~01f39ce7f40c46b85c?companyReference=1644800527016685569&mp_source=share"
    },
    {
      id: 5,
      imgMain: "assets/icon-5-main.png",
      imgSecondary: "assets/icon-5-secondary.png",
      title: "Content Creation",
      text: "Crafting engaging content that connects with your audience and tells your brand’s story clearly and authentically.",
      link: "https://www.upwork.com/freelancers/~01f39ce7f40c46b85c?companyReference=1644800527016685569&mp_source=share"
    }
  ];

  return (
    <section className="services py-5">
      <div className="container-fluid px-md-5">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap gap-md-5 align-items-center mb-4">
          <div>
            <h2 className="main-section-title">Services</h2>
            <p className="section-subtitle mb-0">
              Providing various digital marketing solutions to help brands grow and stand out.
            </p>
          </div>
          {/* 🔽 أزرار النافيجيشن */}
          <div className="d-flex justify-content-end gap-2 mt-3">
            <button className="services-prev slider-arrow py-2 bg-white btn">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="services-next slider-arrow py-2 bg-white btn">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={{
            nextEl: ".services-next",
            prevEl: ".services-prev"
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="card service-card px-4 py-5 h-100 shadow-sm">
                <div className="d-flex gap-2 align-items-center mb-3">
                <div className="service-img-wrapper">
                <img src={service.imgMain} alt={service.title} className="service-img main p-1 rounded-3" />
                <img src={service.imgSecondary} alt={service.title} className="service-img secondary p-1 rounded-3" />
                </div>

                  <h5 className="mb-0 service-title">{service.title}</h5>
                </div>
                <p className="mb-3 service-desc">{service.text}</p>
                <a href={service.link} className="service-link" target='_blank'>
                  Let’s Work Together <i className="fa-solid fa-arrow-right ms-1"></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;

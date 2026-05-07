import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Highlights.css";

const Highlights = () => {
  const [active, setActive] = useState("email");

  // Email Marketing Images
  const emailImages = [
    "assets/Email marketing/9bc251d3-80c4-4ef4-94d3-549fcb2113fb.jpg",
    "assets/Email marketing/IMG_5321.PNG",
    "assets/Email marketing/IMG_5322.PNG",
    "assets/Email marketing/IMG_5323.PNG",
    "assets/Email marketing/IMG_5324.PNG",
    "assets/Email marketing/IMG_5365.PNG",
    "assets/Email marketing/IMG_5366.WEBP",
    "assets/Email marketing/IMG_5948.PNG",
    "assets/Email marketing/IMG_5949.PNG",
  ];

  // 🎯 Direct Response Images
  const directResponseImages = [
    "assets/Direct Response/1927ba9c-4af1-458a-8f4e-4f82d1cfef4c.jpg",
    "assets/Direct Response/8bf3945f-99ad-41a4-8dba-e3fb8a334da2.jpg",
    "assets/Direct Response/950d8cb0-23f3-4f8c-8a15-6ba3fcfdad42.jpg",
    "assets/Direct Response/9bc251d3-80c4-4ef4-94d3-549fcb2113fb.jpg",
    "assets/Direct Response/IMG_5931.PNG",
  ];

  // 📸 Social Media Content Images
  const socialImages = [
    "assets/social-1.png",
    "assets/social-2.png",
    "assets/social-3.png",
    "assets/social-4.png",
    "assets/social-5.png",
    "assets/social-6.png",
    "assets/social-7.png",
    "assets/social-8.png",
    "assets/social-9.png",
    "assets/social-10.png",
    "assets/social-11.png",
    "assets/social-12.png",
  ];

  // 🔄 Before & After Images
  const beforeAfterImages = [
    "assets/Before & After/18EB999A-06CF-4C48-97F3-20B6DD7B7B9B.png",
    "assets/Before & After/4A35AC32-9220-440C-BBDB-DE892159D38B.png",
    "assets/Before & After/E02C5B25-B41D-451C-8A02-9491F2D4B8BB.png",
    "assets/Before & After/E0F4CDC6-9280-4CC1-B059-9570F22BDB2C.png",
    "assets/Before & After/F5FDF82C-D498-44D1-B86D-E947DAACED98.png",
    "assets/Before & After/F8B7BD53-5176-4CF8-9D7A-DAB4CC778128.png",
    "assets/Before & After/FD9B3242-81D3-4C0B-96B6-C4068388BAF8.png",
  ];

  return (
    <section id="projects">
      <div className="container-fluid px-md-5 pt-5">
        <h2 className="main-section-title mb-4">Portfolio Highlights</h2>
        {/* 🔘 الأزرار */}
        <div className="row mb-4">
          <div className="col-lg-3 col-6 mb-4">
            <div
              onClick={() => setActive("email")}
              className={`btn w-100 py-3 toggle-btn ${
                active === "email" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              Email Marketing
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-4">
            <div
              onClick={() => setActive("direct")}
              className={`btn w-100 py-3 toggle-btn ${
                active === "direct" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              Direct Response
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-4">
            <div
              onClick={() => setActive("social")}
              className={`btn w-100 py-3 toggle-btn ${
                active === "social" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              Social Media Content
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-4">
            <div
              onClick={() => setActive("before_after")}
              className={`btn w-100 py-3 toggle-btn ${
                active === "before_after" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              Before & After
            </div>
          </div>
        </div>

        {/* 📌 Email Marketing */}
        {active === "email" && (
          <>
          <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={{
            nextEl: ".email-next",
            prevEl: ".email-prev"
          }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {emailImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="virtual-img">
                  <img
                    src={img}
                    alt={`Email Marketing ${index + 1}`}
                    className="card-img-top"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <button className="email-prev slider-arrow py-2 btn">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="email-next slider-arrow py-2 btn">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </>
        )}

        {/* 📌 Direct Response */}
        {active === "direct" && (
          <div className="row">
            {directResponseImages.map((img, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="virtual-img">
                  <img
                    src={img}
                    alt={`Direct Response ${index + 1}`}
                    className="card-img-top"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

{/* 📌 Social Media Content */}
{active === "social" && (
  <>
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={{
        nextEl: ".social-next",
        prevEl: ".social-prev",
      }}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {socialImages.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="virtual-img">
            <img
              src={img}
              alt={`Social Media Content ${index + 1}`}
              className="card-img-top"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* 🔽 أزرار النافيجيشن */}
    <div className="d-flex justify-content-center gap-3 mt-3">
      <button className="social-prev slider-arrow py-2 btn">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="social-next slider-arrow py-2 btn">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </>
)}

{/* 📌 Before & After */}
{active === "before_after" && (
  <>
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={{
        nextEl: ".before-next",
        prevEl: ".before-prev",
      }}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {beforeAfterImages.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="virtual-img">
            <img
              src={img}
              alt={`Before & After ${index + 1}`}
              className="card-img-top"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* 🔽 أزرار النافيجيشن */}
    <div className="d-flex justify-content-center gap-3 mt-3">
      <button className="before-prev slider-arrow py-2 btn">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="before-next slider-arrow py-2 btn">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </>
)}

        
      </div>
      <div className="animated-row-wrapper mt-5 mb-5">
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
  );
};

export default Highlights;
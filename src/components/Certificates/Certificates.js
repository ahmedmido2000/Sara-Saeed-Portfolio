import React from "react";
import "./Certificates.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      img: "assets/udemy.png",
      title: "15 Effective Steps for Growing Business in Social Media",
      desc: "This certificate above verifies that Sara Saeed successfully completed the course 15 Effective Steps for Growing Business in Social Media on 09/06/2025 as taught by Julia Wilder, Anton Voroniuk, Anton Voroniuk Support on Udemy.",
      link: "https://www.udemy.com/certificate/UC-b0c699d4-f7aa-4ead-a414-a49e3dfa4128/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    },
    {
      id: 2,
      img: "assets/udemy.png",
      title: "Writing With Flair: How To Become An Exceptional Writer",
      desc: "This certificate above verifies that Sara Saeed successfully completed the course Writing With Flair: How To Become An Exceptional Writer on 07/12/2024 as taught by Shani Raja on Udemy. ",
      link: "https://www.udemy.com/certificate/UC-566a9b56-e317-4ba3-920c-fcdfd21a91b3/",
    },
    {
      id: 3,
      img: "assets/udemy.png",
      title: "The Content Writing Course",
      desc: "This certificate above verifies that Sara Saeed successfully completed the course The Content Writing Course on 09/06/2025 as taught by Paul Jenkins on Udemy.",
      link: "https://www.udemy.com/certificate/UC-51cf9265-5274-4d89-ab64-3bbaa0d6dcbc/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    },
  ];

  return (
    <section className="certificates py-5">
      <div className="container-fluid px-md-5">
        <h2 className="main-section-title">Certificates</h2>
        <p className="section-subtitle mb-4">
          Recognitions that highlight my knowledge and growth in this field.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className='pb-md-5'
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="card certificate-card shadow-sm p-4 h-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <img src={cert.img} alt={cert.title} className="cert-logo" />
                  <span className="cert-number  fw-bold">
                    {cert.id}
                  </span>
                </div>
                <h5 className="mb-3 service-title">{cert.title}</h5>
                <p className="mb-4 service-desc">{cert.desc}</p>
                <div className="d-flex">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn slider-arrow px-4 py-2 view-btn"
                >
                  <i className="fa-solid fa-eye me-1"></i> View
                </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;

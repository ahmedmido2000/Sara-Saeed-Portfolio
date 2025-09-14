import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Highlights.css";

const Highlights = () => {
  const [active, setActive] = useState("content");

  // 📝 Content Writing Data
  const contentWritingProjects = [
    {
      id: 1,
      title: "Beauty Copywriting: Skincare Content Writing for Beauty Brands",
      desc: "The world of beauty, on the consumer side, is characterized by the marked trend towards online purchases. As a result, organizations that have chosen to go online are constantly seeking new ways to attract and inspire customers. This need has become even more apparent in recent times, given the increasing competition.",
      link: "https://www.conceptsnc.com/en/copywriting-beauty-industry/",
    },
    {
      id: 2,
      title: "Ancient Egyptian Clothing",
      desc: "Do you like to shop with your parents for new clothes? Or do you think that shopping is boring? How different do you think your clothing is from that of people who lived 5,000 years ago in ancient Egypt? Let’s journey through time to discover more.",
      link: "https://www.archaeologynow.org/egypt-blog/blog-post-title-two-hz67c",
    },
    {
      id: 3,
      title: "Best Oud Perfumes for Men to Smell SUPER ATTRACTIVE!",
      desc: "Discover the best Oud perfumes for men to smell irresistible with our top 8 recommendations. Achieve a super attractive scent! There is something undeniably alluring about the rich, woody notes…",
      link: "https://www.shama-perfumes.com/blogs/news/best-oud-perfumes-for-men-to-smell-super-attractive?srsltid=AfmBOoofyKECzA885ODFQS4cYBCflcoZWOiwuKaPluBZwYpEhecPY8CH",
    },
    {
      id: 4,
      title: "Engagement rings & wedding rings: How much should you spend?",
      desc: "Deciding to propose to someone is a big deal. It's like saying, 'Hey, I want to spend the rest of my life with you.' And with that big decision often comes another one: picking out the perfect rings for the big moment. But a burning question is, how much should you spend on these rings?",
      link: "https://docs.google.com/document/d/1OZkcdbct6lUu_ihg_1WcqmT_F7mNcavcutrmWjjb16w/edit?tab=t.0#heading=h.nobdrfdypccp",
    },
    {
      id: 5,
      title: " PayPal VS. Credit Card?",
      desc: "Understanding Safety with PayPal Compared to Credit Cards PayPal is a platform that lets people send and receive money electronically and safely. When considering safety, compare PayPal to using a credit card. Here's a deep dive into the safety and tips to keep your money even more secure.",
      link: "https://docs.google.com/document/d/1Al81Fq7iI1CIe24ZMv4zlaEp4rUAAFSp0ULDTyY0jDI/edit?tab=t.0",
    },
  ];

  // 📸 Virtual Assistance Images
  const virtualImages = [
    "assets/virtual-1.png",
    "assets/virtual-2.png",
    "assets/virtual-3.png",
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

  // 🎥 YouTube Script Projects
  const youtubeProjects = [
    {
      id: 1,
      title: "Ancient Mysteries",
      desc: "The pyramids of Giza, blending history, myth, and mystery, remain timeless marvels—built for pharaohs, surrounded by legends, and still inspiring awe, wonder, and endless exploration today.",
      link: "https://docs.google.com/document/d/1_olaKhEWlG0Mvhi-c1VJUFc2V07g1eaB9czJul2w_kA/edit?tab=t.0",
    },
    {
      id: 2,
      title: "Fort Knox script",
      desc: "Fort Knox, America’s legendary vault, hides millions of gold ounces behind impenetrable walls, fierce security, and enduring mysteries that fuel endless speculation and global fascination.",
      link: "https://docs.google.com/document/d/1Arietuq1MechbmSwg0JS_0oLcKRam6h2NxkPzTro7as/edit?tab=t.0",
    },
    {
      id: 3,
      title: "George Pickering",
      desc: "The pyramids of Giza, timeless wonders of ancient Egypt, rise above the desert sands with colossal stones, hidden chambers, and enduring mysteries that inspire awe, theories, and fascination worldwide.",
      link: "https://docs.google.com/document/d/12pJpNEwpgXO5B-5VbrpSzVv7fnKRpCW-XQ4v-hupesk/edit?tab=t.0",
    },
    {
      id: 4,
      title: "M1 Finance vs. Wealthfront.",
      desc: "Wealthfront offers automated portfolios, goal planning, and tax-loss harvesting for investors, while M1 Finance provides customizable portfolios, lower entry, and flexibility for self-directed investors.",
      link: "https://docs.google.com/document/d/1NUwAfEwjC53owEjLuaweeyoLBOCukLbEUWnAU2bZHf8/edit?tab=t.0#heading=h.9dvprj7kzke",
    },
    {
      id: 5,
      title: "Maya Civilization",
      desc: "The Maya thrived in architecture, astronomy, mathematics, agriculture, and rituals, inventing zero, playing ballgames, engaging in warfare, and eventually declining.",
      link: "https://docs.google.com/document/d/1Al81Fq7iI1CIe24ZMv4zlaEp4rUAAFSp0ULDTyY0jDI/edit?tab=t.0",
    },
  ];

  return (
    <section>
      <div className="container-fluid px-md-5 pt-5">
        <h2 className="main-section-title mb-4">Portfolio Highlights</h2>
        {/* 🔘 الأزرار */}
        <div className="row mb-4">
          <div className="col-lg-3 col-6 mb-4">
            <div
              onClick={() => setActive("content")}
              className={`btn text-nowrap w-100 py-3 toggle-btn ${
                active === "content" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              Content writing
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-4">
            <div
              onClick={() => setActive("virtual")}
              className={`btn text-nowrap w-100 py-3 toggle-btn ${
                active === "virtual" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              Virtual Assistance
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-4">
            <div
              onClick={() => setActive("social")}
              className={`btn text-nowrap w-100 py-3 toggle-btn ${
                active === "social" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              Social media content
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-4">
            <div
              onClick={() => setActive("youtube")}
              className={`btn text-nowrap w-100 py-3 toggle-btn ${
                active === "youtube" ? "btn-dark" : "btn-outline-dark"
              }`}
            >
              YouTube script
            </div>
          </div>
        </div>

        {/* 📌 Content Writing */}
        {active === "content" && (
          <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={{
            nextEl: ".content-next",
            prevEl: ".content-prev"
          }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {contentWritingProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="card px-4 py-5 content-card h-100 shadow-sm">
                  <h5 className="mb-4 service-title">
                    {project.id}. {project.title}
                  </h5>
                  <p className="mb-4 service-desc">{project.desc}</p>
                  <a href={project.link} target='_blank' className="service-link">
                    View Project <i className="fa-solid fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </SwiperSlide>
            ))}
                      {/* 🔽 أزرار النافيجيشن */}
          <div className="d-flex justify-content-center gap-3 mt-3">
            <button className="content-prev slider-arrow py-2 btn">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="content-next slider-arrow py-2 btn">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </Swiper>
        )}

        {/* 📌 Virtual Assistance */}
        {active === "virtual" && (
          <div className="row">
            {virtualImages.map((img, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="virtual-img">
                  <img
                    src={img}
                    alt={`Virtual Assistance ${index + 1}`}
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

{/* 📌 YouTube Script */}
{active === "youtube" && (
  <>
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={{
        nextEl: ".youtube-next",
        prevEl: ".youtube-prev",
      }}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {youtubeProjects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="card px-4 py-5 content-card h-100 shadow-sm">
            <h5 className="mb-4 service-title">
              {project.id}. {project.title}
            </h5>
            <p className="mb-4 service-desc">{project.desc}</p>
            <a href={project.link} className="service-link" target='_blank'>
              View Project <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* 🔽 أزرار النافيجيشن */}
    <div className="d-flex justify-content-center gap-3 mt-3">
      <button className="youtube-prev slider-arrow py-2 btn">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="youtube-next slider-arrow py-2 btn">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </>
)}

        
      </div>
      <div className="animated-row-wrapper mt-5 mb-5">
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
  );
};

export default Highlights;
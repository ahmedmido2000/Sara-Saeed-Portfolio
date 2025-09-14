import React, { useState, useRef } from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null); // 👈 المرجع للتحكم في السلايدر

  const cards = [
    { id: 1, title: "Aisha M.", text: "“Sara has this amazing ability to take a rough idea and turn it into content that feels polished, engaging, and totally on-brand. Truly gifted!”" },
    { id: 2, title: "David R.", text: "“Working with Sara feels effortless. She anticipates what needs to be done and delivers beyond expectations every single time.”" },
    { id: 3, title: "Noor H.", text: "“Sara doesn’t just create content; she tells stories that connect with people. That’s rare and powerful.”" },
    { id: 4, title: "James K.", text: "Professional, reliable, and endlessly creative. Sara is the kind of person you want on your team." },
    { id: 5, title: "Mariam A.", text: "“She has an eye for detail and a mind that blends creativity with strategy. Sara’s work speaks for itself.”" },
    { id: 6, title: "Omar S.", text: " “Sara helped us streamline our social media in ways I didn’t think were possible. She’s more than an assistant; she’s a game-changer.”" },
    { id: 7, title: "Emily C.", text: "“Sara’s writing flows naturally, feels human, and always hits the right tone. It’s like she can read the audience’s mind.”" },
    { id: 8, title: "Hassan L.", text: "“Sara is the perfect balance of creativity and organization. She makes complex tasks look easy.”" },
    { id: 9, title: "Sophie J.", text: "“Whenever Sara is involved, I know things will be done right and done with style.”" },
    { id: 10, title: "Ali R.", text: "“What sets Sara apart is how much she cares about delivering value. She’s not just ticking boxes, she’s making an impact.”" },
    { id: 11, title: "Nadine F.", text: "“Sara turns deadlines into opportunities. Even under pressure, she produces work that shines.”" },
    { id: 12, title: "Michael T.", text: "“She doesn’t just create content; she crafts experiences. That’s the magic of working with Sara.”" },
    { id: 13, title: "Layla D.", text: "“Sara’s ability to merge AI tools with human creativity is unmatched. She’s always two steps ahead.”" },
    { id: 14, title: "Chris B.", text: "“I’ve worked with many assistants before, but Sara redefines what it means to be a true partner in success.”" },
    { id: 15, title: "Huda M.", text: "“Sara is the kind of person who makes you feel like your project is her top priority. And she delivers like it is.”" },
    { id: 16, title: "Tom P.", text: "“Sara is reliable, resourceful, and incredibly talented. She’s the hidden strength behind our best campaigns.”" },
    { id: 17, title: "Zara I.", text: "“Her creativity has no limits. Every time Sara sends something, I’m blown away by the freshness of her ideas.”" },
    { id: 18, title: "Daniel W.", text: "“Sara combines technical skill with emotional intelligence. She knows what works and why.”" },
    { id: 19, title: "Amira S.", text: "“Sara brings both energy and structure to projects. She’s a rare mix of visionary and executor.”" },
    { id: 20, title: "Jacob H.", text: "“Sara has completely elevated the way we approach social media. The difference is night and day.”" },
    { id: 21, title: "Fatima A.", text: "“Sara makes working together fun, inspiring, and productive. Her positivity is contagious.”" },
    { id: 22, title: "Leo G.", text: "“Sara gets things done fast, smart, and with a personal touch that makes her work unforgettable.”" },
    { id: 23, title: "Yasmin K.", text: "“Every word Sara writes feels authentic. She gives brands a voice that people trust.”" },
    { id: 24, title: "Rami J.", text: "“Every word Sara writes feels authentic. She gives brands a voice that people trust.”" },
    { id: 25, title: "Holly V.", text: "“Sara is someone you can trust with your ideas and know they’ll come back ten times better.”" },
    { id: 26, title: "Karim B.", text: "“Her mix of professionalism and creativity is unmatched. Sara is in a league of her own.”" },
    { id: 27, title: "Sophia N.", text: "“Sara brings structure to chaos. She keeps everything moving smoothly without losing the creative spark.”" },
    { id: 28, title: "Adel M.", text: "“I’ve seen Sara handle projects that would overwhelm most people—and she made it look easy.”" },
    { id: 29, title: "Clara S.", text: "“Sara is the type of person who makes everyone around her better. She lifts projects and people alike.”" },
    { id: 30, title: "Ibrahim H.", text: "“Sara has this unique ability to merge heart and skill. The result is work that truly resonates.”" },
  ];

  const totalSlides = cards.length;

  return (
    <section className="testimonials position-relative mt-4">
      <div className="container-fluid px-md-5 pt-5">
        <h2 className="ps-md-5 pt-4 main-section-title">Testimonials</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // 👈 خزن الريفرنس
          className="mySwiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="testimonials-card">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <div className="card shadow-lg p-4 pt-5">
                      <div className="card-body">
                        <h5 className="card-title mb-5">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                      </div>
                    </div>

                    {/* 🔽 النافيجيشن + رقم السلايد */}
                    <div className="d-flex justify-content-end align-items-end gap-2 mt-3 mt-md-0">
                      <i className="fa-solid fa-chevron-left swipe-arrows mb-3" onClick={() => swiperRef.current.slidePrev()} // 👈 السهم الشمال
            style={{ cursor: "pointer" }}
></i>
                      <div className="d-flex gap-2 align-items-end">
                        <span className="currentSlide">{currentSlide}</span>
                        <span className="totalSlides mb-3">/</span>
                        <span className="totalSlides mb-3">{totalSlides}</span>
                      </div>
                      <i className="fa-solid fa-chevron-right swipe-arrows mb-3"             onClick={() => swiperRef.current.slideNext()} // 👈 السهم اليمين
            style={{ cursor: "pointer" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import homeFaq from "../../data/homeFaq";

const swiperGroupAnimate = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 24,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next-animate",
    prevEl: ".swiper-button-prev-animate",
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    1199: { slidesPerView: "auto" },
    600: { slidesPerView: "auto" },
    575: { slidesPerView: 1 },
    350: { slidesPerView: 1 },
  },
};

export default function Faq({ faq }) {
  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key) => {
    setIsAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <div>
      <>
        <section className="section-box background-body home-faq">
          <div className="container template_faq my-5">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center neutral-1000">
                  <h1>Frequently Asked Questions</h1>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <section className="section-faqs-2 background-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="accordion">
                          {faq.map((item, index) => (
                            <div key={item.id} className="mb-2 card border">
                              <div className="px-0 card-header border-0 bg-gradient-1 background-body">
                                <a
                                  className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center"
                                  onClick={() => handleAccordion(index)}
                                >
                                  <p className="text-lg-bold neutral-1000 pe-4">
                                    {item.heading}
                                  </p>
                                  <span className="ms-auto arrow me-2">
                                    <svg
                                      className="invert"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={13}
                                      height={8}
                                      viewBox="0 0 13 8"
                                      fill="none"
                                    >
                                      <path
                                        className="stroke-dark"
                                        d="M11.5 1L6.25 6.5L1 1"
                                        stroke="#111827"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </a>
                              </div>
                              <div
                                id={`collapse${index}`}
                                className={`collapse ${
                                  isAccordion === index ? "show" : ""
                                }`}
                                data-bs-parent=".accordion"
                              >
                                <div
                                  className="pt-0 pb-4 card-body background-body"
                                  dangerouslySetInnerHTML={{
                                    __html: item.description,
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "@/util/swiperOptions";
import homeFaq from "../../data/homeFaq";

export default function Faq() {
  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
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
                        <div className="mb-2 card border">
                          <div className="px-0 card-header border-0 bg-gradient-1 background-body">
                            <a
                              className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center"
                              onClick={() => handleAccordion(1)}
                            >
                              <p className="text-lg-bold neutral-1000 pe-4">
                                How do I make a reservation on your website?
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
                            id="collapse01"
                            className={`collapse ${
                              isAccordion == 1 ? "show" : ""
                            } `}
                            data-bs-parent=".accordion"
                          >
                            <p className="pt-0 pb-4 card-body background-body">
                              Provide a step-by-step guide on how users can
                              browse and book travel services on your platform.
                              Include information on searching for destinations,
                              selecting dates, choosing accommodation, and
                              completing the booking process. Mention any
                              special features or tools that can help users find
                              the best deals.
                            </p>
                          </div>
                        </div>
                        <div className="mb-2 card border">
                          <div className="px-0 card-header border-0 bg-gradient-1 background-card">
                            <a
                              className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center"
                              onClick={() => handleAccordion(2)}
                            >
                              <p className="text-lg-bold neutral-1000 pe-4">
                                What documents do I need for my trip, and how do
                                I obtain them?
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
                            id="collapse02"
                            className={`collapse ${
                              isAccordion == 2 ? "show" : ""
                            } `}
                            data-bs-parent=".accordion"
                          >
                            <p className="pt-0 pb-4 card-body background-body">
                              Provide a step-by-step guide on how users can
                              browse and book travel services on your platform.
                              Include information on searching for destinations,
                              selecting dates, choosing accommodation, and
                              completing the booking process. Mention any
                              special features or tools that can help users find
                              the best deals.
                            </p>
                          </div>
                        </div>
                        <div className="mb-2 card border">
                          <div className="px-0 card-header border-0 bg-gradient-1 background-card">
                            <a
                              className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center"
                              onClick={() => handleAccordion(3)}
                            >
                              <p className="text-lg-bold neutral-1000 pe-4">
                                In the event that I need to modify or cancel my
                                reservation, what are the policies in place?
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
                            id="collapse03"
                            className={`collapse ${
                              isAccordion == 3 ? "show" : ""
                            } `}
                            data-bs-parent=".accordion"
                          >
                            <p className="pt-0 pb-4 card-body background-body">
                              Provide a step-by-step guide on how users can
                              browse and book travel services on your platform.
                              Include information on searching for destinations,
                              selecting dates, choosing accommodation, and
                              completing the booking process. Mention any
                              special features or tools that can help users find
                              the best deals.
                            </p>
                          </div>
                        </div>
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
  );
}

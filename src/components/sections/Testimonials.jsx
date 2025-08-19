import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "../../util/swiperOptions";
export default function Testimonials({ testimonials, headerTestimonialRaw }) {
  return (
    <>
      <section className="section-box py-96 background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9 col-sm-9 wow fadeInUp">
              <div className="box-author-testimonials">
                <img
                  src="/assets/imgs/page/homepage1/testimonial.png"
                  alt="Maharashtra-cabs"
                />
                <img
                  src="/assets/imgs/page/homepage1/testimonial2.png"
                  alt="Maharashtra-cabs"
                />
                <img
                  src="/assets/imgs/page/homepage1/testimonial3.png"
                  alt="Maharashtra-cabs"
                />
                {headerTestimonialRaw?.heading ?? "Testimonials"}
              </div>
              <h3 className="mt-8 mb-15 neutral-1000">
                {headerTestimonialRaw?.paragraph ?? "What they say about us?"}
              </h3>
            </div>
          </div>
        </div>
        <div className="block-testimonials wow fadeIn">
          <div className="container-testimonials">
            <div className="container-slider ps-0">
              <div className="box-swiper mt-30">
                <Swiper
                  {...swiperGroupAnimate}
                  className="swiper-container swiper-group-animate swiper-group-journey"
                >
                  <div className="swiper-wrapper">
                    {testimonials.map((item) => (
                      <SwiperSlide key={item.slug}>
                        <div className="card-testimonial background-card">
                          <div className="card-info">
                            <p className="text-xl-bold card-title neutral-1000">
                              {item.title}
                            </p>
                          </div>
                          <div className="card-top pt-40 border-0 mb-0">
                            <div className="card-author">
                              <div className="card-image">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  style={{
                                    maxWidth: "80px",
                                    borderRadius: "50%",
                                  }}
                                />
                              </div>
                              <div className="card-info">
                                <p className="text-lg-bold neutral-1000">
                                  {item.name}
                                </p>
                                <p className="text-md-regular neutral-1000">
                                  {item.role}
                                </p>
                              </div>
                            </div>
                            <div className="card-rate d-flex gap-1">
                              {Array.from({ length: item.rating }).map(
                                (_, i) => (
                                  <img
                                    key={i}
                                    className="background-brand-2 p-1"
                                    src="/assets/imgs/template/icons/star-black.svg"
                                    alt="star"
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhyUs1 = ({ headerEasyBooking, easyBooking }) => {
  return (
    <div>
      <section className="section-box box-why-book-22 background-body">
        <div className="container">
          <div className="text-center wow fadeInUp">
            {headerEasyBooking?.heading && (
              <p className="text-xl-medium neutral-500 wow fadeInUp">
                {headerEasyBooking.heading}
              </p>
            )}
            {headerEasyBooking?.paragraph && (
              <h3 className="neutral-1000 wow fadeInUp">
                {headerEasyBooking.paragraph}
              </h3>
            )}
          </div>

          <div className="row mt-40 overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              slidesPerGroup={1}
              loop={true}
              speed={600} // Smooth transition
              autoplay={{
                delay: 3000, // Swipe every 3 seconds
                disableOnInteraction: false, // Keep autoplay running
                pauseOnMouseEnter: false, // Do not pause on hover
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                1199: {
                  slidesPerView: 4,
                },
                800: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 2,
                },
                350: {
                  slidesPerView: 1,
                },
                250: {
                  slidesPerView: 1,
                },
              }}
            >
              {easyBooking.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="card-why wow fadeIn" data-wow-delay="0.1s">
                    <div className="card-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                        style={{ width: "auto" }}
                      />
                    </div>
                    <div className="card-info">
                      <h6 className="text-xl-bold neutral-1000">
                        {item.title}
                      </h6>
                      <p className="text-md-medium neutral-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs1;

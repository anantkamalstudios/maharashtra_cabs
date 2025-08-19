import React from "react";
// import topOffers from "../../data/topOffers";
import { swiperGroup3 } from "../../util/swiperOptions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
const TopOffers = ({ topOffers }) => {
  return (
    <div>
      <section className="section-box box-flights background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9 wow fadeInUp">
              <h3 className="title-svg neutral-1000 mb-5">Top Offers</h3>
              <p className="text-lg-medium text-bold neutral-500">
                The world's leading car brands
              </p>
            </div>
            <div className="col-md-3 position-relative mb-30 wow fadeInUp">
              <div className="box-button-slider box-button-slider-team justify-content-end">
                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="block-flights wow fadeInUp">
            <div className="box-swiper mt-30">
              <Swiper
                {...swiperGroup3}
                className="swiper-container swiper-group-3 swiper-group-journey"
              >
                <div className="swiper-wrapper">
                  {topOffers.map((offer, index) => (
                    <div className="" key={offer.id}>
                      <SwiperSlide key={offer.id}>
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <Link to={`/top-offers/${offer.slug}`}>
                              <img src={offer.image} alt={offer.title} />
                            </Link>
                          </div>
                          <div className="card-info">
                            <div className="card-title">
                              <Link
                                className="heading-6 neutral-1000"
                                to={`/top-offers/${offer.slug}`}
                              >
                                {offer.title}
                              </Link>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-md-medium neutral-500">
                                  {offer.subtitle}
                                </p>
                              </div>
                            </div>
                            <a
                              href={`https://wa.me/9370098337?text=I'm%20interested%20in%20this%20package:%20${offer.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                className="btn btn-sm rounded-pill"
                                style={{
                                  backgroundColor: "orange",
                                  color: "black",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  className="pr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="#000000"
                                  viewBox="0 0 256 256"
                                >
                                  <path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z"></path>
                                </svg>
                                <span className="p-3">Enquire Now</span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopOffers;

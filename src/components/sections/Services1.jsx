import React from "react";
import { Link } from "react-router-dom";
// import topPlaces from "../../data/topPlaces";
import { swiperGroup4 } from "../../util/swiperOptions";
import { Swiper, SwiperSlide } from "swiper/react";

const Services1 = ({ headerVisits, visits }) => {
  return (
    <div>
      <section className="section-box box-properties-area pb-50 background-body">
        <div className="container">
          <div className="row align-items-end mb-40">
            <div className="col-md-12">
              <h3 className="neutral-1000">
                {headerVisits?.heading ?? "Top place to visit in maharashtra"}
              </h3>
              <p className="text-lg-medium neutral-500">
                {headerVisits?.paragraph ??
                  "Serving You with Quality, Comfort, and Conveniences"}
              </p>
            </div>
          </div>
          <div className="box-list-featured service-under">
            <div className="box-swiper mt-0">
              <Swiper
                {...swiperGroup4}
                className="swiper-container swiper-group-4 swiper-group-journey service-under"
              >
                <div className="swiper-wrapper service-under">
                  {visits.map((tp) => (
                    <SwiperSlide key={tp.id}>
                      <div className="card-spot background-card wow fadeInDown">
                        <div className="card-image">
                          <Link to={`/visits/${tp.slug}`}>
                            <img
                              className="rounded-3"
                              loading="lazy"
                              src={tp.image}
                              alt={tp.title}
                            />
                          </Link>
                        </div>
                        <div className="card-info background-card">
                          <div className="card-left">
                            <div className="card-title">
                              <Link
                                className="text-lg-bold neutral-1000"
                                to={`/visits/${tp.slug}`}
                              >
                                {tp.title}
                              </Link>
                            </div>
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
      </section>
    </div>
  );
};

export default Services1;

import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import topPlaces from "../data/topPlaces";
import PopularRoutes from "../components/sections/PopularRoutes";
import { Link } from "react-router-dom";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    type="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const TopPlacesDetails = () => {
  const { slug } = useParams();
  const [isOpen, setOpen] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [isAccordion, setIsAccordion] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider2, slider1]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const settingsThumbs = {
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    focusOnSelect: true,
    vertical: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 700, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  const offer = topPlaces.find((item) => item.slug === slug);

  if (!offer) {
    return (
      <Layout footerStyle={1}>
        <div className="container py-5">
          <h2>Place not found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <div>
      <Layout footerStyle={1}>
        <div className="container" style={{ marginTop: "7rem" }}>
          <div className="row">
            <div className="col-lg-8" style={{ marginTop: "2.5rem" }}>
              <div className="box-collapse-expand">
                <div className="group-collapse-expand">
                  <button
                    className={
                      isAccordion == 1
                        ? "btn btn-collapse collapsed"
                        : "btn btn-collapse"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOverview"
                    aria-expanded="false"
                    aria-controls="collapseOverview"
                    onClick={() => handleAccordion(1)}
                  >
                    <h6>Overview</h6>
                    <svg
                      width={12}
                      height={7}
                      viewBox="0 0 12 7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke=""
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </button>
                  <div
                    className={isAccordion == 1 ? "collapse" : "collapse show"}
                    id="collapseOverview"
                  >
                    <div className="card card-body">
                      <p>
                        Elevate your Las Vegas experience to new heights with a
                        journey aboard The High Roller at The LINQ. As the
                        tallest observation wheel in the world, standing at an
                        impressive 550 feet tall, The High Roller offers a
                        bird's-eye perspective of the iconic Las Vegas Strip and
                        its surrounding desert landscape. From the moment you
                        step into one of the spacious cabins, you'll be
                        transported on a mesmerizing adventure, where every turn
                        offers a new and breathtaking vista of the vibrant city
                        below.
                      </p>
                      <p>
                        Whether you're a first-time visitor or a seasoned Las
                        Vegas aficionado, The High Roller promises an
                        unparalleled experience that will leave you in awe. With
                        its climate-controlled cabins and immersive audio
                        commentary, this attraction provides a unique
                        opportunity to see Las Vegas from a whole new
                        perspective, while learning about its rich history and
                        famous landmarks along the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center py-4">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="img-fluid d-block mx-auto my-3"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </div>
              <div className="box-search-style-2">
                <form action="#">
                  <input type="text" placeholder="Search" />
                  <input className="btn-search-submit" type="submit" />
                </form>
              </div>
              <div className="box-sidebar-border">
                <div className="box-head-sidebar">
                  <p className="text-xl-bold neutral-1000">Popular Post</p>
                </div>
                <div className="box-content-sidebar">
                  <ul className="list-photo-col-3">
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat2.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat3.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat4.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat5.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat6.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat7.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat8.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img
                          src="/assets/imgs/blog/blog-list/cat.png"
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-banner">
                <Link href="#">
                  <img
                    className="rounded-3 w-100"
                    src="/assets/imgs/blog/blog-list/banner-ads.png"
                    alt="Maharashtra-cabs"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <PopularRoutes />
      </Layout>
    </div>
  );
};

export default TopPlacesDetails;

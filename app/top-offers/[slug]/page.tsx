"use client";
import MyDatePicker from "@/components/elements/MyDatePicker";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import topOffers from "@/data/topOffers";
import PopularRoutes from "@/components/sections/PopularRoutes";

interface Props {
  params: {
    slug: string;
  };
}

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
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
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
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
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
      </path>
    </svg>
  </button>
);

export default function OfferDetails({ params }: Props) {
  const [isOpen, setOpen] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

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
  const [isAccordion, setIsAccordion] = useState(null);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  const offer = topOffers.find((item) => item.slug === params.slug);

  if (!offer) return notFound();

  return (
    <>
      <Layout footerStyle={1}>
        <div className="container">
          {/* <div style={{ padding: "2rem" }}>
              <h1>{offer.title}</h1>
              <h2>{offer.subtitle}</h2>
              <img src={offer.image} alt={offer.title} width={400} />
              <p>Details for: {offer.slug}</p>
            </div> */}
          <div className="row" style={{ marginTop: "6rem" }}>
            <div className="col-lg-4">
              <div className="text-center py-4">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="img-fluid d-block mx-auto my-3"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-lg-8 mt-40">
              <div className="box-feature-car">
                <h4 className="my-3 neutral-1000">{offer.title}</h4>
                <div className="list-feature-car">
                  <div className="item-feature-car w-md-25">
                    <div className="item-feature-car-inner">
                      <div className="feature-image">
                        <img
                          src="/assets/imgs/page/car/km.svg"
                          alt="Maharashtra-cabs"
                        />
                      </div>
                      <div className="feature-info">
                        <p className="text-md-medium neutral-1000">56,500</p>
                      </div>
                    </div>
                  </div>
                  <div className="item-feature-car w-md-25">
                    <div className="item-feature-car-inner">
                      <div className="feature-image">
                        <img
                          src="/assets/imgs/page/car/diesel.svg"
                          alt="Maharashtra-cabs"
                        />
                      </div>
                      <div className="feature-info">
                        <p className="text-md-medium neutral-1000">Diesel</p>
                      </div>
                    </div>
                  </div>
                  <div className="item-feature-car w-md-25">
                    <div className="item-feature-car-inner">
                      <div className="feature-image">
                        <img
                          src="/assets/imgs/page/car/auto.svg"
                          alt="Maharashtra-cabs"
                        />
                      </div>
                      <div className="feature-info">
                        <p className="text-md-medium neutral-1000">Automatic</p>
                      </div>
                    </div>
                  </div>
                  <div className="item-feature-car w-md-25">
                    <div className="item-feature-car-inner">
                      <div className="feature-image">
                        <img
                          src="/assets/imgs/page/car/seat.svg"
                          alt="Maharashtra-cabs"
                        />
                      </div>
                      <div className="feature-info">
                        <p className="text-md-medium neutral-1000">7 seats</p>
                      </div>
                    </div>
                  </div>
                  <div className="item-feature-car w-md-25">
                    <div className="item-feature-car-inner">
                      <div className="feature-image">
                        <img
                          src="/assets/imgs/page/car/bag.svg"
                          alt="Maharashtra-cabs"
                        />
                      </div>
                      <div className="feature-info">
                        <p className="text-md-medium neutral-1000">
                          3 Large bags
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item-feature-car w-md-25">
                    <div className="item-feature-car-inner">
                      <div className="feature-image">
                        <img
                          src="/assets/imgs/page/car/suv.svg"
                          alt="Maharashtra-cabs"
                        />
                      </div>
                      <div className="feature-info">
                        <p className="text-md-medium neutral-1000">SUVs</p>
                      </div>
                    </div>
                  </div>
                  <div className="item-feature-car w-md-25">
                    <div className="item-feature-car-inner">
                      <div className="feature-image">
                        <img
                          src="/assets/imgs/page/car/door.svg"
                          alt="Maharashtra-cabs"
                        />
                      </div>
                      <div className="feature-info">
                        <p className="text-md-medium neutral-1000">4 Doors</p>
                      </div>
                    </div>
                  </div>
                  <div className="item-feature-car w-md-25">
                    <div className="item-feature-car-inner">
                      <div className="feature-image">
                        <img
                          src="/assets/imgs/page/car/lit.svg"
                          alt="Maharashtra-cabs"
                        />
                      </div>
                      <div className="feature-info">
                        <p className="text-md-medium neutral-1000">2.5L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
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
                <div className="group-collapse-expand">
                  <button
                    className={
                      isAccordion == 2
                        ? "btn btn-collapse collapsed"
                        : "btn btn-collapse"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseItinerary"
                    aria-expanded="false"
                    aria-controls="collapseItinerary"
                    onClick={() => handleAccordion(2)}
                  >
                    <h6>Included in the price</h6>
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
                    className={isAccordion == 2 ? "collapse" : "collapse show"}
                    id="collapseItinerary"
                  >
                    <div className="card card-body">
                      <ul className="list-checked-green">
                        <li>Free cancellation up to 48 hours before pick-up</li>
                        <li>Collision Damage Waiver with $700 deductible</li>
                        <li>Theft Protection with ₫66,926,626 excess</li>
                        <li>Unlimited mileage</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="group-collapse-expand">
                  <button
                    className={
                      isAccordion == 3
                        ? "btn btn-collapse collapsed"
                        : "btn btn-collapse"
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestion"
                    aria-expanded="false"
                    aria-controls="collapseQuestion"
                    onClick={() => handleAccordion(3)}
                  >
                    <h6>Frequently Ask Questions</h6>
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
                    className={isAccordion == 3 ? "collapse" : "collapse show"}
                    id="collapseQuestion"
                  >
                    <div className="card card-body">
                      <div className="list-questions">
                        <div className="item-question">
                          <div className="head-question">
                            <p className="text-md-bold neutral-1000">
                              Is The High Roller suitable for all ages?
                            </p>
                          </div>
                          <div className="content-question">
                            <p className="text-sm-medium neutral-800">
                              Absolutely! The High Roller offers a
                              family-friendly experience suitable for visitors
                              of all ages. Children must be accompanied by an
                              adult.
                            </p>
                          </div>
                        </div>
                        <div className="item-question active">
                          <div className="head-question">
                            <p className="text-md-bold neutral-1000">
                              Can I bring food or drinks aboard The High Roller?
                            </p>
                          </div>
                          <div className="content-question">
                            <p className="text-sm-medium neutral-800">
                              Outside food and beverages are not permitted on
                              The High Roller. However, there are nearby dining
                              options at The LINQ Promenade where you can enjoy
                              a meal before or after your ride.
                            </p>
                          </div>
                        </div>
                        <div className="item-question">
                          <div className="head-question">
                            <p className="text-md-bold neutral-1000">
                              Is The High Roller wheelchair accessible?
                            </p>
                          </div>
                          <div className="content-question">
                            <p className="text-sm-medium neutral-800">
                              es, The High Roller cabins are wheelchair
                              accessible, making it possible for everyone to
                              enjoy the breathtaking views of Las Vegas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
                <div className="sidebar-banner">
                  <div className="p-4 background-body border rounded-3">
                    <p className="text-xl-bold neutral-1000 mb-4">
                      Get Started
                    </p>
                    <Link
                      href="#"
                      className="btn btn-primary w-100 rounded-3 py-3 mb-3"
                    >
                      Schedule Test Drive
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <Link href="#" className="btn btn-book bg-2">
                      Make An Offer Price
                      <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="booking-form">
                  <div className="head-booking-form">
                    <p className="text-xl-bold neutral-1000">
                      Rent This Vehicle
                    </p>
                  </div>
                  <div className="content-booking-form">
                    <div className="item-line-booking border-bottom-0 pb-0">
                      <strong className="text-md-bold neutral-1000">
                        Pick-Up
                      </strong>
                      <div className="input-calendar">
                        <MyDatePicker form />
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.5312 1.3828H13.8595V0.703125C13.8595 0.314789 13.5448 0 13.1564 0C12.7681 0 12.4533 0.314789 12.4533 0.703125V1.3828H5.55469V0.703125C5.55469 0.314789 5.2399 0 4.85156 0C4.46323 0 4.14844 0.314789 4.14844 0.703125V1.3828H3.47678C1.55967 1.3828 0 2.94247 0 4.85954V14.5232C0 16.4403 1.55967 18 3.47678 18H14.5313C16.4483 18 18.008 16.4403 18.008 14.5232V4.85954C18.008 2.94247 16.4483 1.3828 14.5312 1.3828ZM3.47678 2.78905H4.14844V4.16014C4.14844 4.54848 4.46323 4.86327 4.85156 4.86327C5.2399 4.86327 5.55469 4.54848 5.55469 4.16014V2.78905H12.4533V4.16014C12.4533 4.54848 12.7681 4.86327 13.1565 4.86327C13.5448 4.86327 13.8596 4.54848 13.8596 4.16014V2.78905H14.5313C15.6729 2.78905 16.6018 3.71788 16.6018 4.85954V5.53124H1.40625V4.85954C1.40625 3.71788 2.33508 2.78905 3.47678 2.78905ZM14.5312 16.5938H3.47678C2.33508 16.5938 1.40625 15.6649 1.40625 14.5232V6.93749H16.6018V14.5232C16.6018 15.6649 15.6729 16.5938 14.5312 16.5938ZM6.24611 9.70312C6.24611 10.0915 5.93132 10.4062 5.54298 10.4062H4.16018C3.77184 10.4062 3.45705 10.0915 3.45705 9.70312C3.45705 9.31479 3.77184 9 4.16018 9H5.54298C5.93128 9 6.24611 9.31479 6.24611 9.70312ZM14.551 9.70312C14.551 10.0915 14.2362 10.4062 13.8479 10.4062H12.4651C12.0767 10.4062 11.7619 10.0915 11.7619 9.70312C11.7619 9.31479 12.0767 9 12.4651 9H13.8479C14.2362 9 14.551 9.31479 14.551 9.70312ZM10.3945 9.70312C10.3945 10.0915 10.0798 10.4062 9.69142 10.4062H8.30862C7.92028 10.4062 7.60549 10.0915 7.60549 9.70312C7.60549 9.31479 7.92028 9 8.30862 9H9.69142C10.0797 9 10.3945 9.31479 10.3945 9.70312ZM6.24611 13.8516C6.24611 14.2399 5.93132 14.5547 5.54298 14.5547H4.16018C3.77184 14.5547 3.45705 14.2399 3.45705 13.8516C3.45705 13.4632 3.77184 13.1484 4.16018 13.1484H5.54298C5.93128 13.1484 6.24611 13.4632 6.24611 13.8516ZM14.551 13.8516C14.551 14.2399 14.2362 14.5547 13.8479 14.5547H12.4651C12.0767 14.5547 11.7619 14.2399 11.7619 13.8516C11.7619 13.4632 12.0767 13.1484 12.4651 13.1484H13.8479C14.2362 13.1484 14.551 13.4632 14.551 13.8516ZM10.3945 13.8516C10.3945 14.2399 10.0798 14.5547 9.69142 14.5547H8.30862C7.92028 14.5547 7.60549 14.2399 7.60549 13.8516C7.60549 13.4632 7.92028 13.1484 8.30862 13.1484H9.69142C10.0797 13.1484 10.3945 13.4632 10.3945 13.8516Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="item-line-booking">
                      <strong className="text-md-bold neutral-1000">
                        Drop-Off
                      </strong>
                      <div className="input-calendar">
                        <MyDatePicker form />
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.5312 1.3828H13.8595V0.703125C13.8595 0.314789 13.5448 0 13.1564 0C12.7681 0 12.4533 0.314789 12.4533 0.703125V1.3828H5.55469V0.703125C5.55469 0.314789 5.2399 0 4.85156 0C4.46323 0 4.14844 0.314789 4.14844 0.703125V1.3828H3.47678C1.55967 1.3828 0 2.94247 0 4.85954V14.5232C0 16.4403 1.55967 18 3.47678 18H14.5313C16.4483 18 18.008 16.4403 18.008 14.5232V4.85954C18.008 2.94247 16.4483 1.3828 14.5312 1.3828ZM3.47678 2.78905H4.14844V4.16014C4.14844 4.54848 4.46323 4.86327 4.85156 4.86327C5.2399 4.86327 5.55469 4.54848 5.55469 4.16014V2.78905H12.4533V4.16014C12.4533 4.54848 12.7681 4.86327 13.1565 4.86327C13.5448 4.86327 13.8596 4.54848 13.8596 4.16014V2.78905H14.5313C15.6729 2.78905 16.6018 3.71788 16.6018 4.85954V5.53124H1.40625V4.85954C1.40625 3.71788 2.33508 2.78905 3.47678 2.78905ZM14.5312 16.5938H3.47678C2.33508 16.5938 1.40625 15.6649 1.40625 14.5232V6.93749H16.6018V14.5232C16.6018 15.6649 15.6729 16.5938 14.5312 16.5938ZM6.24611 9.70312C6.24611 10.0915 5.93132 10.4062 5.54298 10.4062H4.16018C3.77184 10.4062 3.45705 10.0915 3.45705 9.70312C3.45705 9.31479 3.77184 9 4.16018 9H5.54298C5.93128 9 6.24611 9.31479 6.24611 9.70312ZM14.551 9.70312C14.551 10.0915 14.2362 10.4062 13.8479 10.4062H12.4651C12.0767 10.4062 11.7619 10.0915 11.7619 9.70312C11.7619 9.31479 12.0767 9 12.4651 9H13.8479C14.2362 9 14.551 9.31479 14.551 9.70312ZM10.3945 9.70312C10.3945 10.0915 10.0798 10.4062 9.69142 10.4062H8.30862C7.92028 10.4062 7.60549 10.0915 7.60549 9.70312C7.60549 9.31479 7.92028 9 8.30862 9H9.69142C10.0797 9 10.3945 9.31479 10.3945 9.70312ZM6.24611 13.8516C6.24611 14.2399 5.93132 14.5547 5.54298 14.5547H4.16018C3.77184 14.5547 3.45705 14.2399 3.45705 13.8516C3.45705 13.4632 3.77184 13.1484 4.16018 13.1484H5.54298C5.93128 13.1484 6.24611 13.4632 6.24611 13.8516ZM14.551 13.8516C14.551 14.2399 14.2362 14.5547 13.8479 14.5547H12.4651C12.0767 14.5547 11.7619 14.2399 11.7619 13.8516C11.7619 13.4632 12.0767 13.1484 12.4651 13.1484H13.8479C14.2362 13.1484 14.551 13.4632 14.551 13.8516ZM10.3945 13.8516C10.3945 14.2399 10.0798 14.5547 9.69142 14.5547H8.30862C7.92028 14.5547 7.60549 14.2399 7.60549 13.8516C7.60549 13.4632 7.92028 13.1484 8.30862 13.1484H9.69142C10.0797 13.1484 10.3945 13.4632 10.3945 13.8516Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="item-line-booking">
                      <div className="box-tickets">
                        <strong className="text-md-bold neutral-1000">
                          Add Extra:
                        </strong>
                        <div className="line-booking-tickets">
                          <div className="item-ticket">
                            <ul className="list-filter-checkbox">
                              <li>
                                <label className="cb-container">
                                  {" "}
                                  <input type="checkbox" />
                                  <span className="text-md-medium">
                                    GPS Navigation System{" "}
                                  </span>
                                  <span className="checkmark" />{" "}
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="include-price">
                            <p className="text-md-bold neutral-1000">$25.00</p>
                          </div>
                        </div>
                        <div className="line-booking-tickets">
                          <div className="item-ticket">
                            <ul className="list-filter-checkbox">
                              <li>
                                <label className="cb-container">
                                  {" "}
                                  <input type="checkbox" />
                                  <span className="text-md-medium">
                                    Child Seat{" "}
                                  </span>
                                  <span className="checkmark" />{" "}
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="include-price">
                            <p className="text-md-bold neutral-1000">$32.00</p>
                          </div>
                        </div>
                        <div className="line-booking-tickets">
                          <div className="item-ticket">
                            <ul className="list-filter-checkbox">
                              <li>
                                <label className="cb-container">
                                  {" "}
                                  <input type="checkbox" />
                                  <span className="text-md-medium">
                                    Additional Driver{" "}
                                  </span>
                                  <span className="checkmark" />{" "}
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="include-price">
                            <p className="text-md-bold neutral-1000">$25.00</p>
                          </div>
                        </div>
                        <div className="line-booking-tickets">
                          <div className="item-ticket">
                            <ul className="list-filter-checkbox">
                              <li>
                                <label className="cb-container">
                                  {" "}
                                  <input type="checkbox" />
                                  <span className="text-md-medium">
                                    Insurance Coverage{" "}
                                  </span>
                                  <span className="checkmark" />{" "}
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="include-price">
                            <p className="text-md-bold neutral-1000">$52.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-line-booking last-item pb-0">
                      <strong className="text-md-medium neutral-1000">
                        Subtotal
                      </strong>
                      <div className="line-booking-right">
                        <p className="text-xl-bold neutral-1000">$124.00</p>
                      </div>
                    </div>
                    <div className="item-line-booking last-item pb-0">
                      <strong className="text-md-medium neutral-1000">
                        Sale discount
                      </strong>
                      <div className="line-booking-right">
                        <p className="text-xl-bold neutral-1000">$124.00</p>
                      </div>
                    </div>
                    <div className="item-line-booking last-item">
                      <strong className="text-md-bold neutral-1000">
                        Total Payable
                      </strong>
                      <div className="line-booking-right">
                        <p className="text-xl-bold neutral-1000">$124.00</p>
                      </div>
                    </div>
                    <div className="box-button-book">
                      <Link className="btn btn-book" href="#">
                        Book Now
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 15L15 8L8 1M15 8L1 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="box-need-help">
                      <Link href="#">
                        <svg
                          width={12}
                          height={14}
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.83366 3.66667C2.83366 1.92067 4.25433 0.5 6.00033 0.5C7.74633 0.5 9.16699 1.92067 9.16699 3.66667C9.16699 5.41267 7.74633 6.83333 6.00033 6.83333C4.25433 6.83333 2.83366 5.41267 2.83366 3.66667ZM8.00033 7.83333H4.00033C1.88699 7.83333 0.166992 9.55333 0.166992 11.6667C0.166992 12.678 0.988992 13.5 2.00033 13.5H10.0003C11.0117 13.5 11.8337 12.678 11.8337 11.6667C11.8337 9.55333 10.1137 7.83333 8.00033 7.83333Z"
                            fill="currentColor"
                          />
                        </svg>
                        Need some help?
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="sidebar-left border-1 background-card">
                  <h6 className="text-xl-bold neutral-1000">Listed by</h6>
                  <div className="box-sidebar-content">
                    <div className="box-agent-support border-bottom pb-3 mb-3">
                      <div className="card-author">
                        <div className="me-2">
                          <img
                            src="/assets/imgs/template/icons/car-1.png"
                            alt="Maharashtra-cabs"
                          />
                        </div>
                        <div className="card-author-info">
                          <p className="text-lg-bold neutral-1000">
                            Emily Rose
                          </p>
                          <p className="text-sm-medium neutral-500">
                            Las Vegas, USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box-info-contact">
                      <p className="text-md-medium mobile-phone neutral-1000">
                        <span className="text-md-bold">Mobile:</span>{" "}
                        1-222-333-4444
                      </p>
                      <p className="text-md-medium email neutral-1000">
                        <span className="text-md-bold">Email:</span>{" "}
                        emily-rose@gmail.com
                      </p>
                      <p className="text-md-medium whatsapp neutral-1000">
                        <span className="text-md-bold">WhatsApp:</span>{" "}
                        1-222-333-4444
                      </p>
                      <p className="text-md-medium fax neutral-1000">
                        <span className="text-md-bold">Fax:</span>{" "}
                        1-222-333-4444
                      </p>
                    </div>
                    <div className="box-link-bottom">
                      <Link
                        className="btn btn-primary py-3 w-100 rounded-3"
                        href="#"
                      >
                        All items by this dealer
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 15L15 8L8 1M15 8L1 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>

          <PopularRoutes />
        </div>
      </Layout>
    </>
  );
}

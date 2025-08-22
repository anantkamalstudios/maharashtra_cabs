import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PopularRoutes from "../components/sections/PopularRoutes";
import useHome from "../hooks/useHome";
import { RingLoader } from "react-spinners";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

const TaxiPackagesDetails = () => {
  const { slug } = useParams();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [isAccordion, setIsAccordion] = useState(null);
  const { data, loading, error } = useHome();

  const taxiPackagesRaw = data?.taxi_package || [];
  const offer = taxiPackagesRaw.find((item) => item.slug === slug);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  if (loading) {
    return (
      <Layout footerStyle={1}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <RingLoader size={120} color="#3583e8ff" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout footerStyle={1}>
        <div className="container py-5">
          <h2>Failed to load data. Please try again.</h2>
        </div>
      </Layout>
    );
  }

  if (!offer) {
    return (
      <Layout footerStyle={1}>
        <div className="container py-5">
          <h2>Taxi package not found</h2>
        </div>
      </Layout>
    );
  }

  const formatValue = (value) => {
    if (value === null || value === undefined || value === "") return "N/A";
    return value;
  };

  const formatKilometers = (km) => {
    if (!km) return "N/A";
    return `${km} km`;
  };

  const formatEngineCapacity = (capacity) => {
    if (!capacity) return "N/A";
    return `${capacity}L`;
  };

  const formatSeats = (seats) => {
    if (!seats) return "N/A";
    return `${seats} seats`;
  };

  const formatBags = (bags) => {
    if (!bags) return "N/A";
    return `${bags} Large bags`;
  };

  const formatDoors = (doors) => {
    if (!doors) return "N/A";
    return `${doors} Doors`;
  };

  const parseFaqs = (faqsData) => {
    if (!faqsData) return [];

    // If it's already an object/array, return it directly
    if (typeof faqsData === "object") {
      // If it has question/answer structure, convert to array format
      if (faqsData.question && faqsData.answer) {
        return [{ question: faqsData.question, answer: faqsData.answer }];
      }
      // If it's an array, return as is
      if (Array.isArray(faqsData)) {
        return faqsData;
      }
      // If it's an object with numeric keys, convert to array
      if (typeof faqsData === "object" && !Array.isArray(faqsData)) {
        const keys = Object.keys(faqsData);
        if (keys.length > 0 && keys.every((key) => !isNaN(key))) {
          return Object.values(faqsData);
        }
      }
    }

    // If it's a string, try to parse as JSON
    if (typeof faqsData === "string") {
      try {
        const parsed = JSON.parse(faqsData);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    return [];
  };

  const parseIncludedInPrice = (includedData) => {
    if (!includedData) return [];

    // If it's already an object/array, return it directly
    if (typeof includedData === "object") {
      // If it's an array, return as is
      if (Array.isArray(includedData)) {
        return includedData;
      }
      // If it's an object with numeric keys, convert to array
      if (typeof includedData === "object" && !Array.isArray(includedData)) {
        const keys = Object.keys(includedData);
        if (keys.length > 0 && keys.every((key) => !isNaN(key))) {
          return Object.values(includedData);
        }
      }
      // If it's a single object, try to extract meaningful values
      if (typeof includedData === "object") {
        const values = Object.values(includedData);
        if (values.length > 0) {
          return values.filter((val) => val && typeof val === "string");
        }
      }
    }

    // If it's a string, try to parse as JSON
    if (typeof includedData === "string") {
      try {
        const parsed = JSON.parse(includedData);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    return [];
  };

  const faqs = parseFaqs(offer.faqs);
  const includedInPrice = parseIncludedInPrice(offer.included_in_price);

  return (
    <>
      <div className="background-body">
        <div className="container">
          <div className="row" style={{ marginTop: "6rem" }}>
            <div className="col-lg-4">
              <div className="text-center py-4">
                <img
                  src={
                    offer.image
                      ? `https://maharashtracabs.com/maharashtracab_backend/public/${offer.image}`
                      : "/assets/imgs/page/car/default-car.jpg"
                  }
                  alt={offer.title}
                  className="img-fluid d-block mx-auto my-3"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-lg-8 mt-40">
              <div className="box-feature-car">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h4 className="my-0 neutral-1000">
                    {offer.title || offer.heading || "Taxi Package"}
                  </h4>
                  <a
                    href={`https://wa.me/${
                      offer.contact_no || "8208321149"
                    }?text=I'm interested in this taxi package: ${
                      offer.title || offer.heading || "Taxi Package"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-brand-2 text-nowrap px-4 py-2"
                    style={{
                      backgroundColor: "orange",
                      color: "black",
                      border: "none",
                    }}
                  >
                    <FaPersonWalkingLuggage size={20} className="me-2" />
                    Book Now
                  </a>
                </div>
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
                        <p className="text-md-medium neutral-1000">
                          {formatKilometers(offer.kilometers)}
                        </p>
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
                        <p className="text-md-medium neutral-1000">
                          {formatValue(offer.fuel_type)}
                        </p>
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
                        <p className="text-md-medium neutral-1000">
                          {formatValue(offer.transmission)}
                        </p>
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
                        <p className="text-md-medium neutral-1000">
                          {formatSeats(offer.seats)}
                        </p>
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
                          {formatBags(offer.bags)}
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
                        <p className="text-md-medium neutral-1000">
                          {formatValue(offer.car_type)}
                        </p>
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
                        <p className="text-md-medium neutral-1000">
                          {formatDoors(offer.doors)}
                        </p>
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
                        <p className="text-md-medium neutral-1000">
                          {formatEngineCapacity(offer.engine_capacity)}
                        </p>
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
                      {offer.overview ? (
                        <div
                          className="neutral-800"
                          dangerouslySetInnerHTML={{ __html: offer.overview }}
                        />
                      ) : (
                        <p>No overview available for this package.</p>
                      )}
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
                      {includedInPrice.length > 0 ? (
                        <ul className="list-checked-green">
                          {includedInPrice.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>No included items listed for this package.</p>
                      )}
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
                      {faqs.length > 0 ? (
                        <div className="list-questions">
                          {faqs.map((faq, index) => (
                            <div
                              key={index}
                              className={`item-question ${
                                index === 0 ? "active" : ""
                              }`}
                            >
                              <div className="head-question">
                                <p className="text-md-bold neutral-1000">
                                  {faq.question || "Question"}
                                </p>
                              </div>
                              <div className="content-question">
                                <p className="text-sm-medium neutral-800">
                                  {faq.answer || "Answer"}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No FAQs available for this package.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PopularRoutes />
        </div>
      </div>
    </>
  );
};

export default TaxiPackagesDetails;

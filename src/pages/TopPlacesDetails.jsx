import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import PopularRoutes from "../components/sections/PopularRoutes";
import { Link } from "react-router-dom";
import useHome from "../hooks/useHome";
import { RingLoader } from "react-spinners";
import { FiSearch } from "react-icons/fi";

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
  const { data, loading, error } = useHome();

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider2, slider1]);

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

  const placesRaw = data?.top_place || [];
  // Only content rows have title when heading is null
  const place =
    placesRaw.find(
      (item) =>
        item.heading === null &&
        (item.slug ||
          (item.title && item.title.toLowerCase().replace(/\s+/g, "-"))) ===
          slug
    ) || placesRaw.find((item) => item.slug === slug);

  if (!place) {
    return (
      <Layout footerStyle={1}>
        <div className="container py-5">
          <h2>Place not found</h2>
        </div>
      </Layout>
    );
  }

  const imageUrl = place.image
    ? `https://maharashtracabs.com/maharashtracab_backend/public/${place.image}`
    : "/assets/imgs/blog/blog-list/default-blog.jpg";
  const posterUrl = place.poster
    ? `https://maharashtracabs.com/maharashtracab_backend/public/${place.poster}`
    : "/assets/imgs/blog/blog-list/banner-ads.png";

  const bestClicks = Array.isArray(place.best_clicks)
    ? place.best_clicks
    : (() => {
        // try parse JSON if string
        try {
          const parsed = JSON.parse(place.best_clicks || "[]");
          return Array.isArray(parsed) ? parsed : [];
        } catch {
          return [];
        }
      })();

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
                      {place.overview ? (
                        <div
                          className="neutral-800 top-offers-overview"
                          dangerouslySetInnerHTML={{ __html: place.overview }}
                        />
                      ) : (
                        <p>No overview available.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center py-4">
                <img
                  src={imageUrl}
                  alt={place.title}
                  className="img-fluid d-block mx-auto my-3"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </div>
              <div className="box-search-style-2">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group" style={{ margin: "0 auto" }}>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                      aria-label="Search"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      aria-label="Search"
                      style={{ zIndex: 1 }}
                    >
                      <FiSearch size={18} color="#fff" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="box-sidebar-border">
                <div className="box-head-sidebar">
                  <p className="text-xl-bold neutral-1000">Popular Post</p>
                </div>
                <div className="box-content-sidebar">
                  <ul className="list-photo-col-3">
                    {bestClicks.length === 0 && (
                      <li className="text-muted">
                        No popular photos available.
                      </li>
                    )}
                    {bestClicks.map((img, idx) => (
                      <li key={idx}>
                        <Link to="#">
                          <img
                            src={`https://maharashtracabs.com/maharashtracab_backend/public/${img}`}
                            alt={`Popular ${idx + 1}`}
                            loading="lazy"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="sidebar-banner">
                <Link to="#">
                  <img
                    className="rounded-3 w-100"
                    src={posterUrl}
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

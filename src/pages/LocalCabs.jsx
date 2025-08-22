import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa6";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const LocalCabs = () => {
  const { pickup } = useParams();
  const query = useQuery();
  const selectedPackage = query.get("package") || "";
  const selectedDate = query.get("date") || "";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cabs, setCabs] = useState([]);

  const formatCity = (value) =>
    decodeURIComponent((value || "").replace(/-/g, " "))
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const pickupLabel = formatCity(pickup);

  const parseHTMLContent = (htmlString) => {
    if (!htmlString) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const listItems = doc.querySelectorAll("li");
    return Array.from(listItems).map((item) => item.textContent.trim());
  };

  const getContactNumbers = (moreDetails) => {
    if (!moreDetails) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(moreDetails, "text/html");
    const fwMediumDivs = doc.querySelectorAll(".fw-medium");
    const contacts = [];
    fwMediumDivs.forEach((div) => {
      const text = div.textContent.trim();
      if (text.includes("+91") || /^\d{10}$/.test(text)) {
        contacts.push(text);
      }
    });
    return contacts;
  };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);
    const fetchCabs = async () => {
      try {
        const response = await axios.get(
          "https://maharashtracabs.com/maharashtracab_backend/api/cms/home"
        );
        const raw = Array.isArray(response.data?.data?.cabs)
          ? response.data.data.cabs
          : [];
        const normalizedPickup = pickupLabel.toLowerCase();
        const filtered = raw.filter((item) => {
          const p = String(item.pick_location || "").toLowerCase();
          return p.includes(normalizedPickup);
        });
        if (!isMounted) return;
        setCabs(filtered);
      } catch (e) {
        if (!isMounted) return; 
        setError(true);
        setCabs([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchCabs();
    return () => {
      isMounted = false;
    };
  }, [pickupLabel]);

  return (
    <Layout headerStyle={1}>
      <div
        className="bg-primary bg-opacity-10 py-5"
        style={{ marginTop: "4rem" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-3 mt-3">
                <i className="fas fa-map-marker-alt text-primary fs-4 me-2"></i>
                <h1 className="h2 mb-0 text-dark fw-bold neutral-1000">
                  Available Cabs in {pickupLabel}
                </h1>
              </div>

              <div className="d-flex flex-wrap gap-2 mb-3">
                {selectedPackage && (
                  <span className="badge bg-primary bg-opacity-15 text-primary px-3 py-2 rounded-pill fs-6">
                    <i className="fas fa-box me-1"></i>
                    Package: {selectedPackage}
                  </span>
                )}
                {selectedDate && (
                  <span className="badge bg-success bg-opacity-15 text-success px-3 py-2 rounded-pill fs-6">
                    <i className="fas fa-calendar-alt me-1"></i>
                    Date: {selectedDate}
                  </span>
                )}
              </div>

              <p className="text-muted mb-0 fs-5">
                Choose from our premium fleet of vehicles for your journey
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {loading && (
          <div className="text-center py-5">
            <div
              className="spinner-border text-primary mb-3"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <h5 className="text-muted">Finding the best cabs for you...</h5>
          </div>
        )}

        {error && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <i className="fas fa-exclamation-triangle me-2"></i>
            <div>
              <strong>Oops!</strong> Something went wrong while fetching cab
              details. Please try again later.
            </div>
          </div>
        )}

        {!loading && cabs.length === 0 && !error && (
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center py-5">
                <i
                  className="fas fa-car-slash text-muted mb-3"
                  style={{ fontSize: "4rem" }}
                ></i>
                <h4 className="text-dark mb-3 neutral-1000">
                  No Cabs Available
                </h4>
                <p className="text-muted mb-4 neutral-1000">
                  We couldn't find any available cabs for{" "}
                  <strong>{pickupLabel}</strong> at the moment. Please try
                  adjusting your search criteria or check back later.
                </p>
                <Link to="/" className="btn btn-primary">
                  <i className="fas fa-search me-2"></i>
                  Try Different Location
                </Link>
              </div>
            </div>
          </div>
        )}

        {!loading && cabs.length > 0 && (
          <>
            <div className="row mb-4">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <h3 className="mb-0 neutral-1000">
                    <i className="fas fa-car text-primary me-2"></i>
                    {cabs.length} Cab{cabs.length > 1 ? "s" : ""} Available
                  </h3>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {cabs.map((cab) => {
                const image = cab.car_image?.startsWith("http")
                  ? cab.car_image
                  : cab.car_image
                  ? `https://maharashtracabs.com/maharashtracab_backend/public/${cab.car_image}`
                  : "";

                const features = parseHTMLContent(cab.more_details);
                const contactNumbers = getContactNumbers(cab.more_details);

                return (
                  <div className="col-lg-6 col-xl-4" key={cab.id}>
                    <div className="card h-100 border-0 shadow-sm hover-shadow-lg transition-all">
                      <div
                        className="position-relative overflow-hidden"
                        style={{ height: "200px" }}
                      >
                        {image ? (
                          <img
                            src={image}
                            alt={cab.car_name || cab.car_type}
                            className="w-100 h-100 object-fit-cover"
                          />
                        ) : (
                          <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                            <i
                              className="fas fa-car text-muted"
                              style={{ fontSize: "3rem" }}
                            ></i>
                          </div>
                        )}

                        {/* Luxury Badge */}
                        {cab.car_luxury && (
                          <div className="position-absolute top-0 end-0 m-2">
                            <span className="badge bg-warning text-dark">
                              <i className="fas fa-crown me-1"></i>Luxury
                            </span>
                          </div>
                        )}

                        {/* Availability Badge */}
                        <div className="position-absolute top-0 start-0 m-2">
                          <span
                            className={`badge ${
                              cab.available ? "bg-success" : "bg-danger"
                            }`}
                          >
                            <i
                              className={`fas ${
                                cab.available
                                  ? "fa-check-circle"
                                  : "fa-times-circle"
                              } me-1`}
                            ></i>
                            {cab.available ? "Available" : "Not Available"}
                          </span>
                        </div>
                      </div>

                      <div className="card-body p-4">
                        {/* Car Details */}
                        <div className="mb-3">
                          <h5 className="card-title fw-bold mb-1 text-primary">
                            {cab.car_name || "Premium Cab"}
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="fas fa-car me-1"></i>
                            {(cab.car_type || "Vehicle").toUpperCase()}
                          </p>
                        </div>

                        {/* Route Information */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center text-muted mb-2">
                            <i className="fas fa-route text-primary me-2"></i>
                            <small className="fw-medium">Route</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="badge bg-light text-dark me-2">
                              {cab.pick_location}
                            </span>
                            <i className="fas fa-arrow-right text-muted mx-1"></i>
                            <span className="badge bg-light text-dark ms-2">
                              {cab.drop_location}
                            </span>
                          </div>
                        </div>

                        {/* Features */}
                        {features.length > 0 && (
                          <div className="mb-3">
                            <div className="d-flex align-items-center text-muted mb-2">
                              <i className="fas fa-star text-primary me-2"></i>
                              <small className="fw-medium">Features</small>
                            </div>
                            <div className="row g-1">
                              {features.slice(0, 4).map((feature, index) => (
                                <div className="col-6" key={index}>
                                  <small className="d-flex align-items-center text-success">
                                    <i className="fas fa-check me-1"></i>
                                    {feature}
                                  </small>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Contact Information */}
                        <div className="mb-4">
                          <div className="d-flex align-items-center text-muted mb-2">
                            <i className="fas fa-phone text-primary me-2"></i>
                            <small className="fw-medium">Contact</small>
                          </div>
                          <div className="d-flex flex-wrap gap-1">
                            {contactNumbers
                              .slice(0, 2)
                              .map((contact, index) => (
                                <small
                                  key={index}
                                  className="badge bg-light text-dark"
                                >
                                  {contact}
                                </small>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="card-footer bg-transparent border-top-0 p-4 pt-0">
                        <div className="d-flex justify-content-center">
                          <a
                            className="btn btn-primary btn-lg w-full"
                            href={
                              cab.whatsapp_no
                                ? `https://wa.me/91${cab.whatsapp_no}`
                                : `https://wa.me/91${cab.contact_no || ""}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaWhatsapp size={20} />
                            Book via WhatsApp
                          </a>
                        </div>

                        {cab.cancellation && (
                          <div className="text-center mt-2">
                            <small className="text-success">
                              <i className="fas fa-shield-alt me-1"></i>
                              Free Cancellation Available
                            </small>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Custom CSS Styles */}
      <style jsx>{`
        .hover-shadow-lg:hover {
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        }

        .transition-all {
          transition: all 0.3s ease;
        }

        .object-fit-cover {
          object-fit: cover;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .badge {
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .card-body {
            padding: 1rem !important;
          }

          .py-5 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default LocalCabs;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {
  FaCar,
  FaPhone,
  FaShieldAlt,
  FaTimes,
  FaInfoCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HeroSearch from "../components/elements/HeroSearch";
import axios from "axios";

const BookRideDetails = () => {
  const [selectedCabType, setSelectedCabType] = useState("ALL");
  const [showMoreInfo, setShowMoreInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cabs, setCabs] = useState([]);
  const { "from-to": fromTo } = useParams();
  const [pickup, drop] = fromTo?.split("-to-") || [];

  const formatCity = (value) =>
    decodeURIComponent((value || "").replace(/-/g, " "))
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const pickupLabel = formatCity(pickup);
  const dropLabel = formatCity(drop);

  const cabTypes = [{ id: "ALL", label: "ALL" }].concat(
    Array.from(new Set(cabs.map((c) => (c.car_type || "").toUpperCase())))
      .filter(Boolean)
      .map((type) => ({ id: type, label: type.replace(/_/g, " ") }))
  );

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
        const normalizedDrop = dropLabel.toLowerCase();

        const filtered = raw.filter((item) => {
          const p = String(item.pick_location || "").toLowerCase();
          const d = String(item.drop_location || "").toLowerCase();
          return p.includes(normalizedPickup) && d.includes(normalizedDrop);
        });

        if (!isMounted) return;
        setCabs(filtered);
      } catch (err) {
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
  }, [pickupLabel, dropLabel]);

  const mappedCabs = cabs.map((c) => ({
    id: c.id,
    image: c.car_image?.startsWith("http")
      ? c.car_image
      : c.car_image
      ? `https://maharashtracabs.com/maharashtracab_backend/public/${c.car_image}`
      : "",
    type: (c.car_type || "").toUpperCase(),
    name: c.car_name || "Cab",
    models: typeof c.car_luxury === "string" ? c.car_luxury : "",
    cancellation:
      typeof c.cancellation === "string"
        ? c.cancellation
        : c.cancellation
        ? "Free cancellation available"
        : "",
    contactNumbers: [c.contact_no].filter(Boolean),
    whatsapp: c.whatsapp_no,
    available: c.available,
    shortDetails: c.short_details,
    moreDetails: c.more_details,
  }));

  const filteredCabs =
    selectedCabType === "ALL"
      ? mappedCabs
      : mappedCabs.filter((cab) => cab.type === selectedCabType);

  return (
    <Layout headerStyle={1}>
      <div className="bg-shape mt-115 book-ride-details">
        <div className="min-vh-100">
          <Container className="py-4">
            <Row className="mb-4">
              <Col>
                <div className="box-search-advance background-card wow fadeIn">
                  <HeroSearch />
                </div>

                <Row className="align-items-center">
                  <Col md={6}>
                    <div className="d-flex">
                      <div className="d-flex align-items-center me-4">
                        <FaMapMarkerAlt
                          className="me-2 text-success"
                          size={18}
                        />
                        <div>
                          <small className="text-muted">Pickup</small>
                          <div className="fw-medium">{pickupLabel}</div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center">
                        <FaMapMarkerAlt
                          className="me-2 text-danger"
                          size={18}
                        />
                        <div>
                          <small className="text-muted">Drop</small>
                          <div className="fw-medium">{dropLabel}</div>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="text-md-end mt-3 mt-md-0">
                    <div className="d-flex align-items-center justify-content-md-end mb-2">
                      <FaPhone className="me-2 text-primary" size={18} />
                      <div>
                        <div className="fw-medium">+91 84-84-84-6395</div>
                      </div>
                    </div>
                    <div className="badge bg-info text-dark px-3 py-2">
                      Available: 24x7
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <div className="d-flex flex-wrap gap-2">
                  {cabTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={
                        selectedCabType === type.id
                          ? "primary"
                          : "outline-secondary"
                      }
                      className="px-4 rounded-pill"
                      onClick={() => setSelectedCabType(type.id)}
                    >
                      {type.label}
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>

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

            {!loading && filteredCabs.length === 0 && (
              <Row className="mt-4">
                <Col>
                  <div className="background-card p-4 rounded-3 text-center">
                    <h5 className="neutral-1000 mb-2">No cars available</h5>
                    <p className="neutral-500 mb-0">
                      We couldn't find cars for {pickupLabel} to {dropLabel}.
                      Try adjusting locations or dates.
                    </p>
                  </div>
                </Col>
              </Row>
            )}

            <Row>
              {filteredCabs.map((cab) => (
                <Col md={6} key={cab.id} className="mb-4">
                  <div className="border rounded-3 overflow-hidden shadow-sm">
                    <div className="p-3 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <h5 className="fw-bold mb-0">{cab.type}</h5>
                          {cab.models && (
                            <small className="text-muted">{cab.models}</small>
                          )}
                        </div>
                      </div>

                      <div>
                        <img
                          src={cab.image}
                          alt={cab.type}
                          className="me-3 rounded"
                          style={{
                            width: "100px",
                            height: "85px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <h6 className="fw-bold">{cab.name}</h6>
                          {typeof cab.available !== "undefined" && (
                            <small className="text-muted">
                              Available: {cab.available}
                            </small>
                          )}
                        </div>
                        <div className="bg-primary bg-opacity-10 p-2 rounded">
                          <small className="d-block text-primary fw-bold">
                            Contact
                          </small>
                          <div className="text-primary fw-bold">
                            {cab.contactNumbers[0] || "N/A"}
                          </div>
                        </div>
                      </div>

                      {cab.cancellation && (
                        <div className="d-flex align-items-center mb-3">
                          <FaShieldAlt className="me-2 text-success" />
                          <small className="text-success">
                            {cab.cancellation}
                          </small>
                        </div>
                      )}

                      <div className="mb-3">
                        {cab.shortDetails && (
                          <div
                            className="small"
                            dangerouslySetInnerHTML={{
                              __html: cab.shortDetails,
                            }}
                          />
                        )}

                        <span
                          role="button"
                          className="d-flex align-items-center text-primary mt-2"
                          onClick={() =>
                            setShowMoreInfo(
                              showMoreInfo === cab.id ? null : cab.id
                            )
                          }
                        >
                          {showMoreInfo === cab.id ? (
                            <>
                              <i className="bi bi-chevron-up me-1"></i>{" "}
                              <small>Hide Info</small>
                            </>
                          ) : (
                            <>
                              <i className="bi bi-chevron-down me-1"></i>
                              <small>View More Info</small>
                            </>
                          )}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                        <div>
                          <div className="small text-muted">Type</div>
                          <div className="fw-bold">{cab.type}</div>
                        </div>
                        <Link
                          className="px-4 py-2 rounded-pill"
                          style={{ backgroundColor: "orange" }}
                          to={
                            cab.whatsapp
                              ? `https://wa.me/${cab.whatsapp}`
                              : `https://wa.me/${cab.contactNumbers[0] || ""}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book
                        </Link>
                      </div>
                    </div>

                    {showMoreInfo === cab.id && (
                      <div className="p-3 border-top">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="fw-bold mb-0">
                            Additional Information
                          </h6>
                          <Button
                            variant="link"
                            className="p-0 text-decoration-none"
                            onClick={() => setShowMoreInfo(null)}
                          >
                            <FaTimes />
                          </Button>
                        </div>

                        {cab.contactNumbers.length > 0 && (
                          <div className="mb-2">
                            <small className="text-muted">
                              Contact Numbers:
                            </small>
                            <div>
                              {cab.contactNumbers.map((num, idx) => (
                                <div key={idx} className="fw-medium">
                                  {num}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <small className="text-muted">
                            Available Vehicles:
                          </small>
                          <div className="fw-medium">{cab.available}</div>
                        </div>

                        {cab.moreDetails && (
                          <div className="mt-3">
                            <small className="d-block text-muted">
                              Details:
                            </small>
                            <div
                              className="small"
                              dangerouslySetInnerHTML={{
                                __html: cab.moreDetails,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BookRideDetails;

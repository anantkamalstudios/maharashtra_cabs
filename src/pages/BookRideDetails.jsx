import React, { useState } from "react";
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

const BookRideDetails = () => {
  const [selectedCabType, setSelectedCabType] = useState("ALL");
  const [showMoreInfo, setShowMoreInfo] = useState(null);
  const { "from-to": fromTo } = useParams();
  const [pickup, drop] = fromTo?.split("-to-") || [];

  const cabTypes = [
    { id: "ALL", label: "ALL" },
    { id: "HATCHBACK", label: "HATCHBACK" },
    { id: "SEDAN", label: "SEDAN" },
    { id: "SUV", label: "SUV" },
    { id: "PREMIUM_SUV", label: "PREMIUM SUV" },
  ];

  const cabOptions = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dc1kofim7/image/upload/v1705680155/mansi_hatchback_pp2nmq.jpg",
      type: "HATCHBACK",
      name: "Affordable Cab",
      models: "Swift, Indica",
      includedKm: 100,
      rateAfter: 13,
      cancellation: "Free cancellation until 6 hours before pickup",
      reservePrice: 639,
      originalPrice: 3619,
      discountedPrice: 2398,
      features: [
        "Safety Standards & Protection",
        "Partial Payment",
        "First Kit (Safety Status)",
      ],
      contactNumbers: ["+91 84-84-84-6395", "+91 85-85-85-7798"],
      available: 2407,
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dc1kofim7/image/upload/v1705680155/mansi_hatchback_pp2nmq.jpg",
      type: "SEDAN",
      name: "Comfortable Cab",
      models: "Dzire, Toyota Etios",
      includedKm: 100,
      rateAfter: 15,
      cancellation: "Free cancellation until 6 hours before pickup",
      reservePrice: 639,
      originalPrice: 2949,
      discountedPrice: 2517,
      features: [
        "Safety Standards & Protection",
        "Partial Payment",
        "First Kit (Safety Status)",
      ],
      contactNumbers: ["+91 84-84-84-6395", "+91 85-85-85-7798"],
      available: 2407,
    },
  ];

  const filteredCabs =
    selectedCabType === "ALL"
      ? cabOptions
      : cabOptions.filter((cab) => cab.type === selectedCabType);

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
                          <div className="fw-medium">{pickup}</div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center">
                        <FaMapMarkerAlt
                          className="me-2 text-danger"
                          size={18}
                        />
                        <div>
                          <small className="text-muted">Drop</small>
                          <div className="fw-medium">{drop}</div>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="text-md-end mt-3 mt-md-0">
                    <div className="d-flex align-items-center justify-content-md-end mb-2">
                      <FaPhone className="me-2 text-primary" size={18} />
                      <div>
                        <div className="fw-medium">+91 84-84-84-6395</div>
                        <div className="fw-medium">+91 85-85-85-7798</div>
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

            <Row>
              {filteredCabs.map((cab) => (
                <Col md={6} key={cab.id} className="mb-4">
                  <div className="border rounded-3 overflow-hidden shadow-sm">
                    <div className="p-3 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <h5 className="fw-bold mb-0">{cab.type}</h5>
                          <small className="text-muted">{cab.models}</small>
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
                          <small className="text-muted">
                            {cab.includedKm} km included. After that ₹
                            {cab.rateAfter}/km
                          </small>
                        </div>
                        <div className="bg-primary bg-opacity-10 p-2 rounded">
                          <small className="d-block text-primary fw-bold">
                            Reserve at
                          </small>
                          <div className="text-primary fw-bold">
                            ₹{cab.reservePrice}
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <FaShieldAlt className="me-2 text-success" />
                        <small className="text-success">
                          {cab.cancellation}
                        </small>
                      </div>

                      <div className="mb-3">
                        {cab.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="d-flex align-items-center mb-1"
                          >
                            <span className="bullet me-2">•</span>
                            <small>{feature}</small>
                          </div>
                        ))}

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

                      {/* Pricing */}
                      <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                        <div>
                          <div className="text-decoration-line-through text-muted">
                            ₹{cab.originalPrice}
                          </div>
                          <div className="h4 fw-bold">
                            ₹{cab.discountedPrice}
                          </div>
                        </div>
                        <Link
                          className="px-4 py-2 rounded-pill"
                          style={{ backgroundColor: "orange" }}
                          to="https://wa.me/9370098337"
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

                        <div className="mb-2">
                          <small className="text-muted">Contact Numbers:</small>
                          <div>
                            {cab.contactNumbers.map((num, idx) => (
                              <div key={idx} className="fw-medium">
                                {num}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <small className="text-muted">
                            Available Vehicles:
                          </small>
                          <div className="fw-medium">{cab.available}</div>
                        </div>

                        <div className="mt-3">
                          <small className="d-block text-muted">
                            Features:
                          </small>
                          <ul className="small ps-3 mb-0">
                            <li>AC and Non-AC options available</li>
                            <li>24/7 customer support</li>
                            <li>Live GPS tracking</li>
                            <li>Professional drivers</li>
                          </ul>
                        </div>
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

import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function BookRideDetails() {
  const { "from-to": fromTo } = useParams();
  const [pickup, drop] = fromTo?.split("-to-") || [];

  const [date, setDate] = useState("2025-08-16");
  const [time, setTime] = useState("13:00");
  const [passengerCount, setPassengerCount] = useState(1);
  const [luggageCount, setLuggageCount] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const vehicles = [
    {
      id: 1,
      name: "Hatchback",
      price: "₹12/km",
      capacity: "3 passengers",
      image: "hatchback",
      features: ["AC", "Economical"],
      estimatedTime: "45 mins",
    },
    {
      id: 2,
      name: "Sedan",
      price: "₹15/km",
      capacity: "4 passengers",
      image: "sedan",
      features: ["AC", "Comfort", "Spacious"],
      estimatedTime: "50 mins",
    },
    {
      id: 3,
      name: "SUV",
      price: "₹20/km",
      capacity: "6 passengers",
      image: "suv",
      features: ["AC", "Luxury", "Extra Space"],
      estimatedTime: "55 mins",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    alert("Booking confirmed! Your driver will be on the way soon.");
  };

  return (
    <Layout headerStyle={1}>
      <div className="bg-shape mt-115">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0 mb-4">
                <div className="card-body p-4">
                  <h2 className="mb-4 text-primary">Book Your Ride</h2>

                  <div className="route-info bg-light p-4 rounded mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h4 className="mb-0">{pickup}</h4>
                        <small className="text-muted">Pickup Location</small>
                      </div>
                      <div className="text-center">
                        <div
                          className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </div>
                      <div className="text-end">
                        <h4 className="mb-0">{drop}</h4>
                        <small className="text-muted">Drop Location</small>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-calendar-check me-2 text-primary"></i>
                        <input
                          type="date"
                          className="form-control-sm border-0 bg-transparent"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-clock me-2 text-primary"></i>
                        <input
                          type="time"
                          className="form-control-sm border-0 bg-transparent"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="passenger-info mb-4">
                    <h5 className="mb-3">Passenger & Luggage</h5>
                    <div className="d-flex">
                      <div className="me-4">
                        <label className="d-block mb-2">Passengers</label>
                        <div className="d-flex align-items-center">
                          {/* Decrease */}
                          <span
                            role="button"
                            onClick={() =>
                              setPassengerCount(Math.max(1, passengerCount - 1))
                            }
                            style={{
                              cursor:
                                passengerCount > 1 ? "pointer" : "not-allowed",
                              opacity: passengerCount > 1 ? 1 : 0.4,
                            }}
                          >
                            <CiCircleMinus size={28} color="orange" />
                          </span>

                          {/* Passenger Count */}
                          <span className="mx-3 fw-bold fs-5">
                            {passengerCount}
                          </span>

                          {/* Increase */}
                          <span
                            role="button"
                            onClick={() =>
                              setPassengerCount(passengerCount + 1)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <CiCirclePlus size={28} color="orange" />
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="d-block mb-2">Luggage</label>
                        <div className="d-flex align-items-center">
                          <span
                            role="button"
                            onClick={() =>
                              setLuggageCount(Math.max(0, luggageCount - 1))
                            }
                            disabled={luggageCount <= 0}
                          >
                            <CiCircleMinus size={28} color="orange" />
                          </span>
                          <span className="mx-2 fw-bold">{luggageCount}</span>
                          <span
                            role="button"
                            onClick={() => setLuggageCount(luggageCount + 1)}
                          >
                            <CiCirclePlus size={28} color="orange" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vehicle-selection mb-4">
                    <h5 className="mb-3">Select Vehicle</h5>
                    <div className="row">
                      {vehicles.map((vehicle) => (
                        <div className="col-md-4 mb-3" key={vehicle.id}>
                          <div
                            className={`card h-100 cursor-pointer ${
                              selectedVehicle === vehicle.id
                                ? "border-primary border-2"
                                : ""
                            }`}
                            onClick={() => setSelectedVehicle(vehicle.id)}
                          >
                            <div className="card-body">
                              <div className="text-center mb-3">
                                <div className="vehicle-icon mb-2">
                                  <i
                                    className={`bi bi-car-front text-${
                                      selectedVehicle === vehicle.id
                                        ? "primary"
                                        : "secondary"
                                    }`}
                                    style={{ fontSize: "2.5rem" }}
                                  ></i>
                                </div>
                                <h5 className="card-title">{vehicle.name}</h5>
                              </div>
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between">
                                  <span>Price:</span>
                                  <span className="fw-bold">
                                    {vehicle.price}
                                  </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                  <span>Capacity:</span>
                                  <span>{vehicle.capacity}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                  <span>Estimated:</span>
                                  <span>{vehicle.estimatedTime}</span>
                                </li>
                              </ul>
                              <div className="mt-2">
                                {vehicle.features.map((feature, idx) => (
                                  <span
                                    key={idx}
                                    className="badge bg-light text-dark me-1"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="contact-form">
                    <h5 className="mb-3">Passenger Details</h5>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Phone</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">
                          Special Instructions (Optional)
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Any special requests..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        ></textarea>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 className="text-primary mb-0">₹1,250</h4>
                          <small className="text-muted">Estimated fare</small>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-4"
                          disabled={!selectedVehicle}
                        >
                          Confirm Booking
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                  <h5 className="mb-3">Trip Summary</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between px-0">
                      <span>From:</span>
                      <span className="fw-bold">{pickup}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between px-0">
                      <span>To:</span>
                      <span className="fw-bold">{drop}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between px-0">
                      <span>Date & Time:</span>
                      <span className="fw-bold">
                        {date} at {time}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between px-0">
                      <span>Passengers:</span>
                      <span className="fw-bold">{passengerCount}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between px-0">
                      <span>Luggage:</span>
                      <span className="fw-bold">{luggageCount}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between px-0">
                      <span>Vehicle:</span>
                      <span className="fw-bold">
                        {selectedVehicle
                          ? vehicles.find((v) => v.id === selectedVehicle).name
                          : "Not selected"}
                      </span>
                    </li>
                  </ul>

                  <div className="mt-4">
                    <h6 className="mb-3">Why book with us?</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>{" "}
                        Instant confirmation
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>{" "}
                        No cancellation fees*
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>{" "}
                        24/7 customer support
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>{" "}
                        GPS tracked vehicles
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 bg-light p-3 rounded">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Safe & Secure</h6>
                        <small className="text-muted">
                          Your safety is our priority
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="mb-3">Need help?</h5>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-telephone text-primary me-3 fs-4"></i>
                    <div>
                      <h6 className="mb-0">Call us</h6>
                      <a
                        href="tel:+911234567890"
                        className="text-decoration-none"
                      >
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-chat-dots text-primary me-3 fs-4"></i>
                    <div>
                      <h6 className="mb-0">Chat with us</h6>
                      <a href="#" className="text-decoration-none">
                        Live chat support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

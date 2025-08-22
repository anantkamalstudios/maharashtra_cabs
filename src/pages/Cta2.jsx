import React, { useState } from "react";
import CounterUp from "../components/elements/CounterUp";

const Cta2 = ({ calci }) => {
  const [carType, setCarType] = useState(1000);
  const [days, setDays] = useState("");
  const [extras, setExtras] = useState(0);
  const [total, setTotal] = useState(null);

  if (!calci || calci.length === 0) return null;
  const item = calci[0];

  const parseStat = (stat, defaultUnit) => {
    const [countRaw, ...label] = stat.split(" ");
    const count = parseInt(countRaw.replace(/[^\d]/g, ""));
    const unit = stat.includes("")
      ? "+"
      : stat.includes("")
      ? "+"
      : defaultUnit;
    return { count, unit, label: label.join(" ") };
  };

  const stats = [
    parseStat(item.stat1),
    parseStat(item.stat2),
    parseStat(item.stat3),
    parseStat(item.stat4),
  ];

  const calculateRent = () => {
    const carRate = parseInt(carType);
    const rentalDays = parseInt(days);
    const extraCost = parseInt(extras);

    if (isNaN(rentalDays) || rentalDays < 1) {
      setTotal("⚠ Please enter a valid number of days.");
      return;
    }

    const totalRent = (carRate + extraCost) * rentalDays;
    setTotal(`Total Rent: ₹${totalRent}`);
  };

  return (
    <section className="box-cta-2 background-body overflow-hidden">
      <div className="bg-shape top-50 start-50 translate-middle" />
      <div className="container position-relative z-1">
        <div className="row ">
          <div className="col-lg-5 pe-lg-5 ">
            <h3 className="text-white wow fadeInDown">
              {calci?.title ?? "Find the Best Car Rental Deal Today!"}
            </h3>
            <p className="text-lg-medium text-white wow fadeInUp">
              {(
                calci?.subtitle ??
                `Instant Price Match
                Flexible Rental Options
                Transparent Billing
                Hassle-free Booking`
              )
                .split("\n")
                .map((point, index) => (
                  <p key={index} className="text-lg-medium text-white mb-1">
                    • {point.trim()}
                  </p>
                ))}
            </p>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="mb-30 background-card p-md-5 p-4 rounded-3 mt-lg-0 mt-30 wow fadeIn">
              <h5 className="neutral-1000 mb-2">Car Rent Calculator</h5>
              <div className="form-contact">
                <div className="row">
                  {/* Car Type */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="text-sm-medium neutral-1000">
                        Select Car Type
                      </label>
                      <select
                        className="form-control"
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                      >
                        <option value="1000">Economy - ₹1000/day</option>
                        <option value="2000">Sedan - ₹2000/day</option>
                        <option value="3000">SUV - ₹3000/day</option>
                        <option value="5000">Luxury - ₹5000/day</option>
                      </select>
                    </div>
                  </div>

                  {/* Number of Days */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="text-sm-medium neutral-1000">
                        Number of Days
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter days"
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Extras */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="text-sm-medium neutral-1000">
                        Add Extras
                      </label>
                      <select
                        className="form-control"
                        value={extras}
                        onChange={(e) => setExtras(e.target.value)}
                      >
                        <option value="0">None</option>
                        <option value="500">Driver - ₹500/day</option>
                        <option value="300">GPS - ₹300/day</option>
                        <option value="200">Child Seat - ₹200/day</option>
                      </select>
                    </div>
                  </div>

                  {/* Show Total */}
                  <div className="col-lg-12 py-3">
                    <p className="text-sm-bold text-primary-dark">
                      {total !== null
                        ? total
                        : "💡 Enter details to calculate rent."}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="col-lg-12">
                    <button className="btn btn-book" onClick={calculateRent}>
                      Calculate
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="border-top py-3 mt-3" />
          <div className="col-lg-12 mb-20 wow fadeIn">
            <div className="row">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="col-md-3 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center align-items-md-center"
                >
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <h3 className="count text-white">
                      <CounterUp count={stat.count} />
                    </h3>
                    <h3 className="text-white">{stat.unit}</h3>
                  </div>

                  <div className="position-relative text-center text-md-start">
                    {stat.label.split(" ").map((line, i) => (
                      <span
                        key={i}
                        className="text-lg-bold text-white me-1 d-block d-md-inline"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;

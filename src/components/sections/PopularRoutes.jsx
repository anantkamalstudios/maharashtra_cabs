import React, { useState } from "react";
import { cabRoutes } from "../../data/cabRoutes";
import { Link } from "react-router-dom";

export default function PopularRoutes() {
  const fromCities = Array.from(new Set(cabRoutes.map((route) => route.from)));
  const [activeTab, setActiveTab] = useState(fromCities[0]);

  const filteredRoutes = cabRoutes.filter((route) => route.from === activeTab);

  return (
    <section className="py-5 background-body">
      <div className="container">
        <h2 className="mb-4 text-center fw-bold neutral-1000">
          Popular Outstation Cab Routes
        </h2>

        <ul
          className="nav nav-pills justify-content-center mb-4"
          role="tablist"
        >
          {fromCities.map((city) => (
            <li className="nav-item" key={city}>
              <button
                type="button"
                className={`nav-link ${activeTab === city ? "active" : ""}`}
                onClick={() => setActiveTab(city)}
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
        <div className="row g-3 popular-main">
          {filteredRoutes.map((route) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 popular-tabs"
              key={route.slug}
            >
              <Link
                to={`/book-a-ride/${route.slug}`}
                className="text-decoration-none"
              >
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center">
                    <h6 className="mb-0 popular-text">
                      {route.from} ➝ {route.to}
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

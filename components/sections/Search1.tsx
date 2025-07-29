"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSearch from "../elements/HeroSearch";

export default function Search1() {
  const [activeTab, setActiveTab] = useState<string>("oneway");
  const [showAirportOptions, setShowAirportOptions] = useState<boolean>(false);
  const [activeAirportOption, setActiveAirportOption] =
    useState<string>("pickup");

  const handleTabClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: string
  ) => {
    e.preventDefault();
    setActiveTab(tab);
    setShowAirportOptions(tab === "airport");

    if (tab === "airport") {
      setActiveAirportOption("pickup"); // default selected option
    }
  };

  return (
    <>
      <div className="container position-relative">
        <div className="box-top-search background-card">
          <div className="left-top-search">
            <a
              className={`category-link text-sm-bold btn-click ${
                activeTab === "oneway" ? "active" : ""
              }`}
              href="#"
              onClick={(e) => handleTabClick(e, "oneway")}
            >
              One Way
            </a>
            <a
              className={`category-link text-sm-bold btn-click ${
                activeTab === "roundtrip" ? "active" : ""
              }`}
              href="#"
              onClick={(e) => handleTabClick(e, "roundtrip")}
            >
              RoundTrip
            </a>
            <a
              className={`category-link text-sm-bold btn-click ${
                activeTab === "local" ? "active" : ""
              }`}
              href="#"
              onClick={(e) => handleTabClick(e, "local")}
            >
              Local
            </a>
            <a
              className={`category-link text-sm-bold btn-click ${
                activeTab === "airport" ? "active" : ""
              }`}
              href="#"
              onClick={(e) => handleTabClick(e, "airport")}
            >
              Airport Transfer
            </a>

            {showAirportOptions && (
              <div className="box-airport-options d-flex justify-content-center background-card my-4">
                <a
                  className={`sub-category-link text-sm-bold btn-click ${
                    activeAirportOption === "pickup" ? "active" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveAirportOption("pickup");
                  }}
                >
                  Airport Pickup
                </a>
                <a
                  className={`sub-category-link text-sm-bold btn-click ${
                    activeAirportOption === "drop" ? "active" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveAirportOption("drop");
                  }}
                >
                  Airport Drop
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="box-search-advance background-card wow fadeIn">
          <HeroSearch />
          {/* <HeroSearch activeTab={activeTab} /> */}
        </div>
      </div>
    </>
  );
}

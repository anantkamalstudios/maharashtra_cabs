"use client";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import MyDatePicker from "./MyDatePicker";

export default function HeroSearch() {
  const [location, setLocation] = useState<string>("");
  return (
    <>
      <div className="box-bottom-search background-card">
        <div className="item-search">
          <label className="text-sm-bold neutral-500">Pick Up Location</label>
          <div className="location-input-wrapper">
            <input
              type="text"
              className="form-control location-search-input"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="item-search item-search-2">
          <label className="text-sm-bold neutral-500">Drop Off Location</label>
          <div className="location-input-wrapper">
            <input
              type="text"
              className="form-control designation-location-input"
              placeholder="Enter Designation"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="item-search item-search-3">
          <label className="text-sm-bold neutral-500">
            Pick Up Date &amp; Time
          </label>
          <div className="box-calendar-date">
            <MyDatePicker />
          </div>
        </div>
        <div className="item-search bd-none">
          <label className="text-sm-bold neutral-500">
            Return Date &amp; Time
          </label>
          <div className="box-calendar-date">
            <MyDatePicker />
          </div>
        </div>
        <div className="item-search bd-none d-flex justify-content-end">
          <button className="btn btn-brand-2 text-nowrap">
            <svg
              className="me-2"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Find a Vehicle
          </button>
        </div>
      </div>
    </>
  );
}

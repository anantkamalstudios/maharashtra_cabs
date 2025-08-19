import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MyDatePicker = () => (
  <input
    type="date"
    className="form-control"
    placeholder="Select date"
    style={{
      width: "100%",
      padding: "0px 16px",
      borderRadius: "8px",
      fontSize: "12px",
      outline: "none",
      transition: "border-color 0.2s",
    }}
  />
);

export default function HeroSearch() {
  const [location, setLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState({
    pickup: false,
    drop: false,
  });
  const [loading, setLoading] = useState(true);

  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!location || !dropLocation) {
      alert("Please select both pickup and drop locations");
      return;
    }

    const pickupSlug = location.toLowerCase().replace(/\s+/g, "-");
    const dropSlug = dropLocation.toLowerCase().replace(/\s+/g, "-");

    navigate(`/book-a-ride/${pickupSlug}-to-${dropSlug}`);
  };

  // Fetch Indian cities on component mount
  useEffect(() => {
    const fetchIndianCities = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/cities",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              country: "India",
            }),
          }
        );

        const data = await response.json();
        if (data && data.data) {
          const sortedCities = data.data.sort((a, b) => a.localeCompare(b));
          setCities(sortedCities);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
        // Fallback to some major Indian cities if API fails
        const fallbackCities = [
          "Mumbai",
          "Delhi",
          "Bangalore",
          "Hyderabad",
          "Ahmedabad",
          "Chennai",
          "Kolkata",
          "Surat",
          "Pune",
          "Jaipur",
          "Lucknow",
          "Kanpur",
          "Nagpur",
          "Indore",
          "Thane",
          "Bhopal",
          "Visakhapatnam",
          "Pimpri-Chinchwad",
          "Patna",
          "Vadodara",
          "Ghaziabad",
          "Ludhiana",
          "Agra",
          "Nashik",
        ].sort();
        setCities(fallbackCities);
      } finally {
        setLoading(false);
      }
    };

    fetchIndianCities();
  }, []);

  const filterCities = (input) => {
    if (!input.trim()) return [];
    return cities
      .filter((city) => city.toLowerCase().includes(input.toLowerCase()))
      .slice(0, 10);
  };

  const handleLocationChange = (value, type) => {
    if (type === "pickup") {
      setLocation(value);
      setFilteredCities(filterCities(value));
      setShowDropdown({ ...showDropdown, pickup: value.length > 0 });
    } else {
      setDropLocation(value);
      setFilteredCities(filterCities(value));
      setShowDropdown({ ...showDropdown, drop: value.length > 0 });
    }
  };

  const handleCitySelect = (city, type) => {
    if (type === "pickup") {
      setLocation(city);
      setShowDropdown({ ...showDropdown, pickup: false });
    } else {
      setDropLocation(city);
      setShowDropdown({ ...showDropdown, drop: false });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickupRef.current && !pickupRef.current.contains(event.target)) {
        setShowDropdown((prev) => ({ ...prev, pickup: false }));
      }
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setShowDropdown((prev) => ({ ...prev, drop: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="box-bottom-search background-card">
        <div
          className="item-search"
          style={{ flex: "1", minWidth: "200px", position: "relative" }}
          ref={pickupRef}
        >
          <label
            className="text-sm-bold neutral-500"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#6c757d",
            }}
          >
            Pick Up Location
          </label>
          <div
            className="location-input-wrapper"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              className="form-control location-search-input"
              placeholder="Enter Indian city"
              value={location}
              onChange={(e) => handleLocationChange(e.target.value, "pickup")}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #e9ecef",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#007bff";
                if (location) {
                  setFilteredCities(filterCities(location));
                  setShowDropdown({ ...showDropdown, pickup: true });
                }
              }}
              onBlur={(e) => (e.target.style.borderColor = "#e9ecef")}
            />
            {loading && (
              <div
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "12px",
                  fontSize: "12px",
                  color: "#6c757d",
                }}
              >
                Loading...
              </div>
            )}

            {/* Dropdown for pickup location */}
            {showDropdown.pickup && filteredCities.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "white",
                  border: "1px solid #e9ecef",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  zIndex: 1000,
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {filteredCities.map((city, index) => (
                  <div
                    key={index}
                    onClick={() => handleCitySelect(city, "pickup")}
                    style={{
                      padding: "12px 16px",
                      cursor: "pointer",
                      borderBottom:
                        index < filteredCities.length - 1
                          ? "1px solid #f8f9fa"
                          : "none",
                      fontSize: "14px",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#f8f9fa")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "white")
                    }
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Drop Off Location */}
        <div
          className="item-search item-search-2"
          style={{ flex: "1", minWidth: "200px", position: "relative" }}
          ref={dropRef}
        >
          <label
            className="text-sm-bold neutral-500"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#6c757d",
            }}
          >
            Drop Off Location
          </label>
          <div
            className="location-input-wrapper"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              className="form-control designation-location-input"
              placeholder="Enter Indian city"
              value={dropLocation}
              onChange={(e) => handleLocationChange(e.target.value, "drop")}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #e9ecef",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#007bff";
                if (dropLocation) {
                  setFilteredCities(filterCities(dropLocation));
                  setShowDropdown({ ...showDropdown, drop: true });
                }
              }}
              onBlur={(e) => (e.target.style.borderColor = "#e9ecef")}
            />

            {/* Dropdown for drop location */}
            {showDropdown.drop && filteredCities.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "white",
                  border: "1px solid #e9ecef",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  zIndex: 1000,
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {filteredCities.map((city, index) => (
                  <div
                    key={index}
                    onClick={() => handleCitySelect(city, "drop")}
                    style={{
                      padding: "12px 16px",
                      cursor: "pointer",
                      borderBottom:
                        index < filteredCities.length - 1
                          ? "1px solid #f8f9fa"
                          : "none",
                      fontSize: "14px",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#f8f9fa")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "white")
                    }
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="item-search item-search-3">
          <label className="text-sm-bold neutral-500">Pick Up Date</label>
          <div className="box-calendar-date">
            <MyDatePicker />
          </div>
        </div>
        <div className="item-search bd-none">
          <label className="text-sm-bold neutral-500">Return Date</label>
          <div className="box-calendar-date">
            <MyDatePicker />
          </div>
        </div>
        <div className="item-search bd-none d-flex justify-content-end">
          <button
            className="btn btn-brand-2 text-nowrap"
            onClick={handleSubmit}
          >
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

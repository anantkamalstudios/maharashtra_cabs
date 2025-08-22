import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MyDatePicker = ({ value, onChange, placeholder = "Select date" }) => (
  <input
    type="date"
    className="form-control"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
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

export default function HeroSearch({
  activeTab = "oneway",
  activeAirportOption = "pickup",
}) {
  const [location, setLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState({
    pickup: false,
    drop: false,
  });
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [airports, setAirports] = useState([]);
  const [airportsLoading, setAirportsLoading] = useState(false);

  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const isOneWay = activeTab === "oneway";
    const isRoundTrip = activeTab === "roundtrip";
    const isLocal = activeTab === "local";

    if (isLocal) {
      if (!location || !pickupDate || !selectedPackage) {
        alert("Please select pickup location, departure date and package");
        return;
      }
      const pickupSlug = location.toLowerCase().replace(/\s+/g, "-");
      navigate(
        `/local-cabs/${pickupSlug}?package=${encodeURIComponent(
          selectedPackage
        )}&date=${pickupDate}`
      );
      return;
    }

    if (!location || !dropLocation) {
      alert("Please select both pickup and drop locations");
      return;
    }

    const pickupSlug = location.toLowerCase().replace(/\s+/g, "-");
    const dropSlug = dropLocation.toLowerCase().replace(/\s+/g, "-");

    navigate(`/book-a-ride/${pickupSlug}-to-${dropSlug}`);
  };

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

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        setAirportsLoading(true);

        const res = await fetch(
          "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airports-code@public&q=&rows=1000"
        );
        const data = await res.json();

        // Extract airports list properly
        const list = data.records.map((record) => ({
          name: record.fields.name || "",
          country: record.fields.iso_country || "",
          city: record.fields.municipality || "",
          code: record.fields.ident || "",
        }));

        // Filter only Indian airports
        const indianAirports = list.filter(
          (a) =>
            a.country.toLowerCase() === "in" ||
            a.country.toLowerCase() === "india"
        );

        setAirports(indianAirports);
      } catch (e) { 
        setAirports([]);
      } finally {
        setAirportsLoading(false);
      }
    };

    fetchAirports();
  }, []);

  const filterCities = (input) => {
    if (!input.trim()) return [];
    return cities
      .filter((city) => city.toLowerCase().includes(input.toLowerCase()))
      .slice(0, 10);
  };

  const airportLabel = (a) => {
    const name = a.name || a.airport_name || "Airport";
    const code = a.iata_code || a.iata || a.code || "";
    const city = a.city || a.municipality || "";
    return code
      ? `${name} (${code})${city ? ` - ${city}` : ""}`
      : `${name}${city ? ` - ${city}` : ""}`;
  };

  const filterAirports = (input) => {
    if (!input.trim()) return [];
    const q = input.toLowerCase();
    return airports
      .filter((a) => {
        const name = String(a.name || a.airport_name || "").toLowerCase();
        const code = String(
          a.iata_code || a.iata || a.code || ""
        ).toLowerCase();
        const city = String(a.city || a.municipality || "").toLowerCase();
        return name.includes(q) || code.includes(q) || city.includes(q);
      })
      .slice(0, 10)
      .map((a) => airportLabel(a));
  };

  const isAirportField = (type) =>
    activeTab === "airport" &&
    ((activeAirportOption === "pickup" && type === "pickup") ||
      (activeAirportOption === "drop" && type === "drop"));

  const handleLocationChange = (value, type) => {
    if (type === "pickup") {
      setLocation(value);
      const options = isAirportField("pickup")
        ? filterAirports(value)
        : filterCities(value);
      setFilteredCities(options);
      setShowDropdown({ ...showDropdown, pickup: value.length > 0 });
    } else {
      setDropLocation(value);
      const options = isAirportField("drop")
        ? filterAirports(value)
        : filterCities(value);
      setFilteredCities(options);
      setShowDropdown({ ...showDropdown, drop: value.length > 0 });
    }
  };

  const handleCitySelect = (value, type) => {
    if (type === "pickup") {
      setLocation(value);
      setShowDropdown({ ...showDropdown, pickup: false });
    } else {
      setDropLocation(value);
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
            {activeTab === "roundtrip" ? "From" : "PICKUP LOCATION"}
          </label>
          <div
            className="location-input-wrapper"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              className="form-control location-search-input"
              placeholder={
                isAirportField("pickup")
                  ? "Enter Indian airport"
                  : "Enter Indian city"
              }
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
                  const options = isAirportField("pickup")
                    ? filterAirports(location)
                    : filterCities(location);
                  setFilteredCities(options);
                  setShowDropdown({ ...showDropdown, pickup: true });
                }
              }}
              onBlur={(e) => (e.target.style.borderColor = "#e9ecef")}
            />
            {(loading || airportsLoading) && (
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
                {filteredCities.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleCitySelect(option, "pickup")}
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
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Drop / To Location (hidden for Local) */}
        {activeTab !== "local" && (
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
              {activeTab === "roundtrip" ? "To" : "DROP LOCATION"}
            </label>
            <div
              className="location-input-wrapper"
              style={{ position: "relative" }}
            >
              <input
                type="text"
                className="form-control designation-location-input"
                placeholder={
                  isAirportField("drop")
                    ? "Enter Indian airport"
                    : "Enter Indian city"
                }
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
                    const options = isAirportField("drop")
                      ? filterAirports(dropLocation)
                      : filterCities(dropLocation);
                    setFilteredCities(options);
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
                  {filteredCities.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleCitySelect(option, "drop")}
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
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "local" ? (
          <>
            <div className="item-search item-search-3">
              <label className="text-sm-bold neutral-500">DEPARTURE</label>
              <div className="box-calendar-date">
                <MyDatePicker
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
            </div>
            <div className="item-search bd-none">
              <label className="text-sm-bold neutral-500">PACKAGE</label>
              <div>
                <select
                  className="form-control"
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e9ecef",
                    borderRadius: "8px",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                >
                  <option value="">Select package</option>
                  <option value="4h-40km">4 Hrs / 40 KM</option>
                  <option value="6h-60km">6 Hrs / 60 KM</option>
                  <option value="8h-80km">8 Hrs / 80 KM</option>
                  <option value="10h-100km">10 Hrs / 100 KM</option>
                  <option value="12h-120km">12 Hrs / 120 KM</option>
                </select>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="item-search item-search-3">
              <label className="text-sm-bold neutral-500">Pick Up Date</label>
              <div className="box-calendar-date">
                <MyDatePicker
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
            </div>
            <div className="item-search bd-none">
              <label className="text-sm-bold neutral-500">Return Date</label>
              <div className="box-calendar-date">
                <MyDatePicker
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
          </>
        )}
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

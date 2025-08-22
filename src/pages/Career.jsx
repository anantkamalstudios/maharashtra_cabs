import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import useHome from "../hooks/useHome";

const Gallery = () => {
  const { data, loading, error } = useHome();
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    if (data && data.gallery) {
      const mapped = data.gallery.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image?.startsWith("http")
          ? item.image
          : `${"https://maharashtracabs.com/maharashtracab_backend/public/"}${
              item.image.startsWith("/") ? item.image : "/" + item.image
            }`,
        category: item.category || "other",
        description: item.description || "",
        date: item.post_date || item.created_at || "",
      }));
      setGalleryItems(mapped);
      setFilteredItems(mapped);
    }
  }, [data]);

  useEffect(() => {
    let filtered = galleryItems;
    if (selectedFilter !== "all") {
      filtered = filtered.filter((item) => item.category === selectedFilter);
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredItems(filtered);
  }, [searchTerm, selectedFilter, galleryItems]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div>
      <Layout footerStyle={1}>
        <div className="page-header-2 pt-130 background-body gallery-section">
          <div className="page-header pt-30 pb-25">
            <div className="custom-container position-relative mx-auto">
              <div className="bg-overlay rounded-12 overflow-hidden">
                <img
                  className="w-100 h-100 rounded-12 img-banner gallery-banner"
                  src="/assets/imgs/page-header/Job-opening.png"
                  alt="Maharashtra-cabs Gallery"
                />
              </div>
              <div className="container position-absolute z-1 top-50 start-50 translate-middle text-center">
                <h1 className="text-white display-4 fw-bold mb-3">
                  Our Gallery
                </h1>
                <p className="text-white fs-5 mb-0">
                  Explore our premium cab services and memorable journeys
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          {/* <section className="gallery-controls py-5 bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="row g-3 align-items-center"> 
                        <div className="col-lg-6">
                          <div className="search-box position-relative">
                            <i className="fas fa-search position-absolute search-icon"></i>
                            <input
                              type="text"
                              className="form-control form-control-lg search-input"
                              placeholder="Search gallery items..."
                              value={searchTerm}
                              onChange={handleSearch}
                            />
                          </div>
                        </div>
 
                        <div className="col-lg-4">
                          <div
                            className="gallery-dropdown position-relative"
                            ref={dropdownRef}
                          >
                            <button
                              className="btn btn-outline-primary btn-lg w-100 d-flex align-items-center justify-content-between"
                              type="button"
                              onClick={() => setDropdownOpen((open) => !open)}
                              aria-expanded={dropdownOpen}
                              aria-haspopup="listbox"
                            >
                              <span className="d-flex align-items-center">
                                <i
                                  className={`${
                                    filterOptions.find(
                                      (opt) => opt.value === selectedFilter
                                    )?.icon
                                  } me-2`}
                                ></i>
                                {
                                  filterOptions.find(
                                    (opt) => opt.value === selectedFilter
                                  )?.label
                                }
                              </span>
                              <i
                                className={`fas fa-chevron-${
                                  dropdownOpen ? "up" : "down"
                                } ms-2`}
                              ></i>
                            </button>
                            {dropdownOpen && (
                              <ul
                                className="gallery-dropdown-menu list-unstyled shadow position-absolute w-100 mt-2 bg-white rounded-3 border"
                                style={{ zIndex: 10 }}
                                role="listbox"
                              >
                                {filterOptions.map((option) => (
                                  <li key={option.value}>
                                    <button
                                      className={`dropdown-item d-flex align-items-center py-3 px-4 w-100${
                                        selectedFilter === option.value
                                          ? " active"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        handleFilterChange(option.value)
                                      }
                                      role="option"
                                      aria-selected={
                                        selectedFilter === option.value
                                      }
                                    >
                                      <i className={`${option.icon} me-2`}></i>
                                      {option.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
 
                        <div className="col-lg-2">
                          <div className="results-count text-center">
                            <span className="badge bg-primary fs-6 px-3 py-2">
                              {filteredItems.length} Results
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Gallery Grid Section */}
          <section className="gallery-grid py-5">
            <div className="container">
              {loading ? (
                <div className="text-center py-5">
                  <div
                    className="spinner-border text-primary mb-3"
                    style={{ width: "3rem", height: "3rem" }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h5 className="text-muted">Loading gallery items...</h5>
                </div>
              ) : error ? (
                <div className="text-center py-5">
                  <i
                    className="fas fa-exclamation-triangle text-danger mb-3"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <h4 className="text-danger mb-3">Failed to load gallery</h4>
                  <p className="text-muted">Please try again later.</p>
                </div>
              ) : filteredItems.length === 0 ? (
                <div className="text-center py-5">
                  <i
                    className="fas fa-search text-muted mb-3"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <h4 className="text-muted mb-3">No Results Found</h4>
                  <p className="text-muted">
                    Try adjusting your search terms or filter options
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedFilter("all");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="row g-4">
                  {filteredItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`col-lg-${
                        index % 3 === 0 ? "8" : "4"
                      } col-md-6`}
                    >
                      <div className="gallery-card card border-0 shadow-sm h-100 overflow-hidden">
                        <div className="gallery-image-container position-relative">
                          <img
                            src={
                              item.image ||
                              "/assets/imgs/placeholder/gallery-placeholder.jpg"
                            }
                            alt={item.title}
                            className="card-img-top gallery-image"
                          />
                          <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                            <div className="overlay-content text-center text-white">
                              <i className="fas fa-search-plus fa-2x mb-2"></i>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-3">
                            <span className="badge bg-dark bg-opacity-75">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <div className="card-body p-4">
                          <h5 className="card-title fw-bold text-primary mb-2">
                            {item.title}
                          </h5>
                          <p className="card-text text-muted mb-3">
                            {item.description}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              <i className="fas fa-calendar-alt me-1"></i>
                              {new Date(item.date).toLocaleDateString()}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Gallery;

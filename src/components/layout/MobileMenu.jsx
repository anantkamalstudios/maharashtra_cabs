import { Link } from "react-router-dom";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isAccordion, setIsAccordion] = useState(0);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div className="mobile-header-logo">
            <Link className="d-flex" to="/">
              <img
                className="light-mode"
                alt="Maharashtra-cabs"
                src="/assets/imgs/template/maharashtra-cab-logo-white.png"
              />
              <img
                className="dark-mode"
                alt="Maharashtra-cabs"
                src="/assets/imgs/template/maharashtra-cab-logo-white.png"
              />
            </Link>
            <div
              className="burger-icon burger-icon-white"
              onClick={handleMobileMenu}
            />
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    {/* Accordion Items */}
                    {[
                      {
                        key: 1,
                        label: "Home Pages",
                        links: [
                          { to: "/", label: "Home page v1" },
                          { to: "/index-2", label: "Home page v2" },
                          { to: "/index-3", label: "Home page v3" },
                        ],
                      },
                      {
                        key: 2,
                        label: "Vehicles",
                        links: [
                          { to: "/cars-list-1", label: "Cars List v1" },
                          { to: "/cars-list-2", label: "Cars List v2" },
                          { to: "/cars-list-3", label: "Cars List v3" },
                          { to: "/cars-list-4", label: "Cars List v4" },
                          { to: "/cars-details-1", label: "Car Details v1" },
                          { to: "/cars-details-2", label: "Car Details v2" },
                          { to: "/cars-details-3", label: "Car Details v3" },
                          { to: "/cars-details-4", label: "Car Details v4" },
                        ],
                      },
                      {
                        key: 3,
                        label: "Dealers",
                        links: [
                          { to: "/dealer-listing", label: "Dealers Listing" },
                          { to: "/dealer-details", label: "Dealer Details" },
                        ],
                      },
                      {
                        key: 4,
                        label: "Shop",
                        links: [
                          { to: "/shop-list", label: "Shop Grid" },
                          { to: "/shop-details", label: "Product Details" },
                        ],
                      },
                      {
                        key: 5,
                        label: "Pages",
                        links: [
                          { to: "/about-us", label: "About Us" },
                          { to: "/services", label: "Our Services" },
                          { to: "/pricing", label: "Pricing" },
                          { to: "/calculator", label: "Loan Calculator" },
                          { to: "/faqs", label: "FAQs" },
                          { to: "/term", label: "Term" },
                          { to: "/contact", label: "Contact" },
                          { to: "/login", label: "Login" },
                          { to: "/register", label: "Register" },
                          { to: "/404", label: "Error 404" },
                        ],
                      },
                      {
                        key: 6,
                        label: "News",
                        links: [
                          { to: "/blog-grid", label: "News Grid" },
                          { to: "/blog-list", label: "News List" },
                          { to: "/blog-details", label: "News Details" },
                        ],
                      },
                    ].map((item) => (
                      <li
                        key={item.key}
                        className={`has-children ${
                          isAccordion === item.key ? "active" : ""
                        }`}
                      >
                        <span
                          className="menu-expand"
                          onClick={() => handleAccordion(item.key)}
                        >
                          <i className="arrow-small-down"></i>
                        </span>
                        <Link to="#">{item.label}</Link>
                        <ul
                          className="sub-menu"
                          style={{
                            display: `${
                              isAccordion === item.key ? "block" : "none"
                            }`,
                          }}
                        >
                          {item.links.map((linkItem, idx) => (
                            <li key={idx}>
                              <Link to={linkItem.to}>{linkItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                    {/* Contact Link */}
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
      {isMobileMenu && (
        <div className="body-overlay-1" onClick={handleMobileMenu} />
      )}
    </>
  );
}

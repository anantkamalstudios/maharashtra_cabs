import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "../../elements/ThemeSwitch";

export default function Header2({ scroll }) {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleMobileMenu = () => setIsMobileMenu((prev) => !prev);

  return (
    <header
      className={`header header-fixed sticky-bar bg-dark ${
        scroll ? "stick" : ""
      }`}
    >
      <div className="top-bar top-bar-2 top-bar-3 bg-transparent">
        <div className="container-fluid">
          <div className="text-header-info d-flex align-items-center justify-content-between">
            <a className="phone-head text-white" href="#">
              <span className="d-none d-lg-inline-block">+918208321149</span>
            </a>
          </div>
          <div className="text-header-info d-flex align-items-center justify-content-between">
            {/* Right Side → Email + Theme Switch */}
            <div className="d-flex align-items-center">
              <a className="email-head text-white me-4" href="#">
                <span className="d-none d-lg-inline-block">
                  contact@maharashtracabs.com
                </span>
              </a>
              <div className="top-button-mode">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="main-header">
          <button
            className="mobile-menu-toggle d-block d-md-none"
            onClick={handleMobileMenu}
          >
            <span className="burger-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
                style={{ marginTop: "8px" }}
              >
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            </span>
          </button>

          <div className="header-left">
            <div className="header-logo">
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
            </div>

            <div className="header-nav">
              <nav className="nav-main-menu">
                <ul className="main-menu">
                  <li>
                    <Link className="color-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="color-white" to="/book-a-ride">
                      Book A Ride
                    </Link>
                  </li>
                  <li>
                    <Link className="color-white" to="/career">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="color-white" to="/blog-list">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="color-white" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {isMobileMenu && (
            <div className="mobile-nav d-block d-md-none">
              <ul className="main-menu-mobile">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/book-a-ride">Book A Ride</Link>
                </li>
                <li>
                  <Link to="/career">Gallery</Link>
                </li>
                <li>
                  <Link to="/blog-list">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

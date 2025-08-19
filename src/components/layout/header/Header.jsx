import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "../../elements/ThemeSwitch";

export default function Header({ scroll }) {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleMobileMenu = () => setIsMobileMenu((prev) => !prev);

  return (
    <header
      className={`header header-fixed sticky-bar bg-dark  ${
        scroll ? "stick" : ""
      }`}
    >
      <div className="top-bar top-bar-2 top-bar-3 bg-transparent">
        <div className="container-fluid">
          <div className="text-header-info d-flex align-items-center">
            <a className="phone-head text-white" href="#">
              {/* SVG phone icon */}
              <span className="d-none d-lg-inline-block">+1 222-555-33-99</span>
            </a>
            <a className="email-head text-white" href="#">
              {/* SVG email icon */}
              <span className="d-none d-lg-inline-block">
                maharastra@cabs.com
              </span>
            </a>
            <div className="top-button-mode">
              <ThemeSwitch />
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
            {/* Burger icon */}
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
                      Careers
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
                  <Link to="/career">Careers</Link>
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

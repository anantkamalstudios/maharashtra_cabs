import { Link } from "react-router-dom";

export default function Offcanvas({ isOffcanvas, handleOffcanvas }) {
  return (
    <>
      <div
        className={`sidebar-canvas-wrapper perfect-scrollbar button-bg-2 ${
          isOffcanvas ? "sidebar-canvas-visible" : ""
        }`}
      >
        <div className="sidebar-canvas-container">
          <div className="sidebar-canvas-head">
            <div className="sidebar-canvas-logo">
              <Link className="d-flex" to="/">
                <img
                  className="light-mode"
                  alt="Maharashtra-cabs"
                  src="/assets/imgs/template/logo-d.svg"
                />
                <img
                  className="dark-mode"
                  alt="Maharashtra-cabs"
                  src="/assets/imgs/template/logo-w.svg"
                />
              </Link>
            </div>
            <div className="sidebar-canvas-lang">
              <div className="d-inline-block box-dropdown-cart align-middle mr-15">
                <span className="text-14-medium icon-list icon-account icon-lang">
                  <span className="text-14-medium arrow-down text-dark">
                    EN
                  </span>
                </span>
                <div className="dropdown-account">
                  <ul>
                    <li>
                      <Link className="text-sm-medium" to="#">
                        English
                      </Link>
                    </li>
                    <li>
                      <Link className="text-sm-medium" to="#">
                        French
                      </Link>
                    </li>
                    <li>
                      <Link className="text-sm-medium" to="#">
                        Chinese
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-inline-block box-dropdown-cart align-middle mr-15">
                <span className="text-14-medium icon-list icon-cart">
                  <span className="text-14-medium arrow-down text-dark">
                    USD
                  </span>
                </span>
                <div className="dropdown-cart">
                  <ul>
                    <li>
                      <Link className="text-sm-medium" to="#">
                        USD
                      </Link>
                    </li>
                    <li>
                      <Link className="text-sm-medium" to="#">
                        EUR
                      </Link>
                    </li>
                    <li>
                      <Link className="text-sm-medium" to="#">
                        SGP
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="close-canvas" onClick={handleOffcanvas}>
                <img
                  alt="Maharashtra-cabs"
                  src="/assets/imgs/template/icons/close.png"
                />
              </button>
            </div>
          </div>
          <div className="sidebar-canvas-content">
            <div className="box-author-profile">
              <div className="card-author">
                <div className="card-image">
                  <img
                    src="/assets/imgs/page/homepage1/author2.png"
                    alt="Maharashtra-cabs"
                  />
                </div>
                <div className="card-info">
                  <p className="text-md-bold neutral-1000">Howdy, Steven</p>
                  <p className="text-xs neutral-1000">25 September 2024</p>
                </div>
              </div>
              <Link className="btn btn-black" to="#">
                Logout
              </Link>
            </div>

            <div className="sidebar-banner">
              <div className="position-relative">
                <p className="text-xl-bold neutral-1000 mb-4">
                  Viewed products
                </p>

                {[
                  {
                    img: "other-item1.png",
                    name: "R1 Concepts® – eLINE Series Plain Brake Rotors",
                    price: "$20.00",
                  },
                  {
                    img: "other-item2.png",
                    name: "PIRELLI TIRES® – P4 FOUR SEASONS PLUS",
                    price: "$160.00",
                  },
                  {
                    img: "other-item3.png",
                    name: "Mobil 1 Extended Performance Full Synthetic Motor Oil",
                    price: "$33.00",
                  },
                  {
                    img: "other-item4.png",
                    name: "HRE FlowForm® – FT01 Tarma Honda 2024",
                    price: "$250.00",
                  },
                  {
                    img: "other-item5.png",
                    name: "Mobil Delvac 1300 Super Heavy Duty Synthetic",
                    price: "$44.00",
                  },
                ].map((product, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
                    <div className="me-3 border rounded-3 overflow-hidden mw-65">
                      <Link to="/shop-details">
                        <img
                          src={`/assets/imgs/shop/shop-details/${product.img}`}
                          alt="Maharashtra-cabs"
                        />
                      </Link>
                    </div>
                    <div className="position-relative">
                      <Link to="#" className="text-md-bold neutral-1000">
                        {product.name}
                      </Link>
                      <p className="text-md-bold text-success">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="box-contactus">
              <h6 className="title-contactus neutral-1000">Contact Us</h6>
              <div className="contact-info">
                <p className="address-2 text-md-medium neutral-1000">
                  4517 Washington Ave. <br />
                  Manchester, Kentucky 39495
                </p>
                <p className="hour-work-2 text-md-medium neutral-1000">
                  Hours: 8:00 - 17:00, Mon - Sat
                </p>
                <p className="email-2 text-md-medium neutral-1000">
                  contact@maharashtracabs.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOffcanvas && (
        <div className="body-overlay-1" onClick={handleOffcanvas} />
      )}
    </>
  );
}

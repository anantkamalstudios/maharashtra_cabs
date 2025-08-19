import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function Brand1() {
  return (
    <>
      <div className="background-100 pb-70">
        <div className="container">
          <div className="box-search-category">
            <h3 className="heading-3 pt-4 mb-0 neutral-1000 wow fadeInUp">
              Premium Brands
            </h3>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-lg-medium neutral-500 wow fadeInUp">
                Unveil the Finest Selection of High-End Vehicles
              </p>
            </div>
            <Marquee
              direction="left"
              pauseOnHover={true}
              className="carouselTicker carouselTicker-left box-list-brand-car justify-content-center  wow fadeIn"
            >
              <ul className="carouselTicker__list">
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/lexus.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/lexus-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/mer.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/mer-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/bugatti.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/bugatti-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/jaguar.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/jaguar-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/honda.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/honda-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/chevrolet.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/chevrolet-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/acura.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/acura-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/bmw.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/bmw-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/toyota.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/toyota-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/lexus.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/lexus-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/mer.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/mer-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
                <li className="carouselTicker__item">
                  <Link to="/cars-list-2" className="item-brand">
                    <img
                      className="light-mode"
                      src="/assets/imgs/page/homepage2/bugatti.png"
                      alt="Maharashtra-cabs"
                    />
                    <img
                      className="dark-mode"
                      src="/assets/imgs/page/homepage2/bugatti-w.png"
                      alt="Maharashtra-cabs"
                    />
                  </Link>
                </li>
              </ul>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

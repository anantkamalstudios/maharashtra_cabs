import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import topOffers from "../data/topOffers";
import Layout from "../components/layout/Layout";
import PopularRoutes from "../components/sections/PopularRoutes";
import axios from "axios";
import { useLoading } from "../context/LoadingContext";

const TopOfferDetails = () => {
  const { startLoading, stopLoading } = useLoading();
  const { slug } = useParams();
  const [isAccordion, setIsAccordion] = useState(null);

  const [offer, setOffer] = useState(null);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        startLoading();
        const res = await axios.get(
          "https://maharashtracabs.com/maharashtracab_backend/api/cms/home"
        );

        const allOffers = res.data.data.top_offer || [];

        const filtered = allOffers
          .filter((item) => item.heading === null && item.title)
          .map((item) => ({
            ...item,
            slug: item.title.toLowerCase().replace(/\s+/g, "-"),
            image: `https://maharashtracabs.com/maharashtracab_backend/public/${item.image}`,
          }));

        const selected = filtered.find((item) => item.slug === slug);
        setOffer(selected);
      } catch (error) {
      } finally {
        stopLoading();
      }
    };

    fetchOffer();
  }, [slug]);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  if (!offer) {
    return (
      <Layout footerStyle={1}>
        <div className="container py-5">
          <h2>Offer not found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "6rem" }}>
          <div className="col-lg-4">
            <div className="text-center py-4">
              <img
                src={offer.image}
                alt={offer.title}
                className="img-fluid d-block mx-auto my-3"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="col-lg-8 mt-40">
            <div className="box-feature-car">
              <h4 className="my-3 neutral-1000">{offer.title}</h4>
              <div className="list-feature-car">
                <div className="item-feature-car w-md-25">
                  <div className="item-feature-car-inner">
                    <div className="feature-image">
                      <img
                        src="/assets/imgs/page/car/km.svg"
                        alt="Maharashtra-cabs"
                      />
                    </div>
                    <div className="feature-info">
                      <p className="text-md-medium neutral-1000">56,500</p>
                    </div>
                  </div>
                </div>
                <div className="item-feature-car w-md-25">
                  <div className="item-feature-car-inner">
                    <div className="feature-image">
                      <img
                        src="/assets/imgs/page/car/diesel.svg"
                        alt="Maharashtra-cabs"
                      />
                    </div>
                    <div className="feature-info">
                      <p className="text-md-medium neutral-1000">Diesel</p>
                    </div>
                  </div>
                </div>
                <div className="item-feature-car w-md-25">
                  <div className="item-feature-car-inner">
                    <div className="feature-image">
                      <img
                        src="/assets/imgs/page/car/auto.svg"
                        alt="Maharashtra-cabs"
                      />
                    </div>
                    <div className="feature-info">
                      <p className="text-md-medium neutral-1000">Automatic</p>
                    </div>
                  </div>
                </div>
                <div className="item-feature-car w-md-25">
                  <div className="item-feature-car-inner">
                    <div className="feature-image">
                      <img
                        src="/assets/imgs/page/car/seat.svg"
                        alt="Maharashtra-cabs"
                      />
                    </div>
                    <div className="feature-info">
                      <p className="text-md-medium neutral-1000">7 seats</p>
                    </div>
                  </div>
                </div>
                <div className="item-feature-car w-md-25">
                  <div className="item-feature-car-inner">
                    <div className="feature-image">
                      <img
                        src="/assets/imgs/page/car/bag.svg"
                        alt="Maharashtra-cabs"
                      />
                    </div>
                    <div className="feature-info">
                      <p className="text-md-medium neutral-1000">
                        3 Large bags
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-feature-car w-md-25">
                  <div className="item-feature-car-inner">
                    <div className="feature-image">
                      <img
                        src="/assets/imgs/page/car/suv.svg"
                        alt="Maharashtra-cabs"
                      />
                    </div>
                    <div className="feature-info">
                      <p className="text-md-medium neutral-1000">SUVs</p>
                    </div>
                  </div>
                </div>
                <div className="item-feature-car w-md-25">
                  <div className="item-feature-car-inner">
                    <div className="feature-image">
                      <img
                        src="/assets/imgs/page/car/door.svg"
                        alt="Maharashtra-cabs"
                      />
                    </div>
                    <div className="feature-info">
                      <p className="text-md-medium neutral-1000">4 Doors</p>
                    </div>
                  </div>
                </div>
                <div className="item-feature-car w-md-25">
                  <div className="item-feature-car-inner">
                    <div className="feature-image">
                      <img
                        src="/assets/imgs/page/car/lit.svg"
                        alt="Maharashtra-cabs"
                      />
                    </div>
                    <div className="feature-info">
                      <p className="text-md-medium neutral-1000">2.5L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="box-collapse-expand">
              <div className="group-collapse-expand">
                <button
                  className={
                    isAccordion == 1
                      ? "btn btn-collapse collapsed"
                      : "btn btn-collapse"
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOverview"
                  aria-expanded="false"
                  aria-controls="collapseOverview"
                  onClick={() => handleAccordion(1)}
                >
                  <h6>Overview</h6>
                  <svg
                    width={12}
                    height={7}
                    viewBox="0 0 12 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </button>
                <div
                  className={isAccordion == 1 ? "collapse" : "collapse show"}
                  id="collapseOverview"
                >
                  <div className="card card-body">
                    <p>
                      Elevate your Las Vegas experience to new heights with a
                      journey aboard The High Roller at The LINQ. As the tallest
                      observation wheel in the world, standing at an impressive
                      550 feet tall, The High Roller offers a bird's-eye
                      perspective of the iconic Las Vegas Strip and its
                      surrounding desert landscape. From the moment you step
                      into one of the spacious cabins, you'll be transported on
                      a mesmerizing adventure, where every turn offers a new and
                      breathtaking vista of the vibrant city below.
                    </p>
                    <p>
                      Whether you're a first-time visitor or a seasoned Las
                      Vegas aficionado, The High Roller promises an unparalleled
                      experience that will leave you in awe. With its
                      climate-controlled cabins and immersive audio commentary,
                      this attraction provides a unique opportunity to see Las
                      Vegas from a whole new perspective, while learning about
                      its rich history and famous landmarks along the way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group-collapse-expand">
                <button
                  className={
                    isAccordion == 2
                      ? "btn btn-collapse collapsed"
                      : "btn btn-collapse"
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseItinerary"
                  aria-expanded="false"
                  aria-controls="collapseItinerary"
                  onClick={() => handleAccordion(2)}
                >
                  <h6>Included in the price</h6>
                  <svg
                    width={12}
                    height={7}
                    viewBox="0 0 12 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </button>
                <div
                  className={isAccordion == 2 ? "collapse" : "collapse show"}
                  id="collapseItinerary"
                >
                  <div className="card card-body">
                    <ul className="list-checked-green">
                      <li>Free cancellation up to 48 hours before pick-up</li>
                      <li>Collision Damage Waiver with $700 deductible</li>
                      <li>Theft Protection with ₫66,926,626 excess</li>
                      <li>Unlimited mileage</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group-collapse-expand">
                <button
                  className={
                    isAccordion == 3
                      ? "btn btn-collapse collapsed"
                      : "btn btn-collapse"
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseQuestion"
                  aria-expanded="false"
                  aria-controls="collapseQuestion"
                  onClick={() => handleAccordion(3)}
                >
                  <h6>Frequently Ask Questions</h6>
                  <svg
                    width={12}
                    height={7}
                    viewBox="0 0 12 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </button>
                <div
                  className={isAccordion == 3 ? "collapse" : "collapse show"}
                  id="collapseQuestion"
                >
                  <div className="card card-body">
                    <div className="list-questions">
                      <div className="item-question">
                        <div className="head-question">
                          <p className="text-md-bold neutral-1000">
                            Is The High Roller suitable for all ages?
                          </p>
                        </div>
                        <div className="content-question">
                          <p className="text-sm-medium neutral-800">
                            Absolutely! The High Roller offers a family-friendly
                            experience suitable for visitors of all ages.
                            Children must be accompanied by an adult.
                          </p>
                        </div>
                      </div>
                      <div className="item-question active">
                        <div className="head-question">
                          <p className="text-md-bold neutral-1000">
                            Can I bring food or drinks aboard The High Roller?
                          </p>
                        </div>
                        <div className="content-question">
                          <p className="text-sm-medium neutral-800">
                            Outside food and beverages are not permitted on The
                            High Roller. However, there are nearby dining
                            options at The LINQ Promenade where you can enjoy a
                            meal before or after your ride.
                          </p>
                        </div>
                      </div>
                      <div className="item-question">
                        <div className="head-question">
                          <p className="text-md-bold neutral-1000">
                            Is The High Roller wheelchair accessible?
                          </p>
                        </div>
                        <div className="content-question">
                          <p className="text-sm-medium neutral-800">
                            es, The High Roller cabins are wheelchair
                            accessible, making it possible for everyone to enjoy
                            the breathtaking views of Las Vegas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PopularRoutes />
      </div>
    </>
  );
};

export default TopOfferDetails;

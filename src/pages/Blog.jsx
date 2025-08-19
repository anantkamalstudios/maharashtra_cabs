import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const BlogList = () => {
  return (
    <div>
      <>
        <Layout footerStyle={1}>
          <div>
            <div className="section-box box-posts-grid-2 background-100">
              <div className="container">
                <div className="text-center mt-80">
                  <div className="background-body px-3 py-2 rounded-12 border d-flex gap-3 d-inline-flex">
                    <Link to="/" className="neutral-700 text-md-medium">
                      Home
                    </Link>
                    <span>
                      <img
                        src="/assets/imgs/template/icons/arrow-right.svg"
                        alt="Maharashtra-cabs"
                      />
                    </span>
                    <Link to="#" className="neutral-1000 text-md-bold">
                      Blog
                    </Link>
                  </div>
                  <h3 className="my-3 neutral-1000">Inside &amp; Trending</h3>
                </div>
              </div>
            </div>
            <section className="box-section background-body">
              <div className="container">
                <div className="section-box background-body py-96">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2 className="neutral-1000">Recent Posts</h2>
                        <p className="text-xl-medium neutral-500">
                          Favorite vehicles based on customer reviews
                        </p>
                        <div className="box-grid-hotels box-grid-news mt-60 mb-50 wow fadeIn">
                          <div className="card-flight card-news background-card">
                            <div className="card-image">
                              <Link to="/blog-details">
                                <img
                                  src="/assets/imgs/blog/blog-list/news.png"
                                  alt="Maharashtra-cabs"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link
                                className="btn btn-label-tag background-3"
                                to="#"
                              >
                                Adventure
                              </Link>
                              <div className="card-title">
                                <Link
                                  className="heading-6 neutral-1000"
                                  to="/blog-details"
                                >
                                  A Guide to Renting Cars for Family Road Trips
                                </Link>
                              </div>
                              <div className="card-meta">
                                <span className="post-date neutral-1000">
                                  18 Sep 2024
                                </span>
                                <span className="post-time neutral-1000">
                                  6 mins
                                </span>
                                <span className="post-comment neutral-1000">
                                  38 comments
                                </span>
                              </div>
                              <div className="card-desc">
                                <p className="text-md-medium neutral-500">
                                  The dark wood paneling and furnishings, deluxe
                                  red-draped four-poster bed, and magnificent
                                  black
                                </p>
                              </div>
                              <div className="card-program">
                                <div className="endtime">
                                  <div className="card-button">
                                    <Link
                                      className="btn btn-gray"
                                      to="/blog-details"
                                    >
                                      Keep Reading
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-flight card-news background-card">
                            <div className="card-image">
                              <Link to="/blog-details">
                                <img
                                  src="/assets/imgs/blog/blog-list/news2.png"
                                  alt="Maharashtra-cabs"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link
                                className="btn btn-label-tag background-1"
                                to="#"
                              >
                                Luxury
                              </Link>
                              <div className="card-title">
                                <Link
                                  className="heading-6 neutral-1000"
                                  to="/blog-details"
                                >
                                  How to Avoid Hidden Fees When Renting a Car
                                </Link>
                              </div>
                              <div className="card-meta">
                                <span className="post-date neutral-1000">
                                  18 Sep 2024
                                </span>
                                <span className="post-time neutral-1000">
                                  6 mins
                                </span>
                                <span className="post-comment neutral-1000">
                                  38 comments
                                </span>
                              </div>
                              <div className="card-desc">
                                <p className="text-md-medium neutral-500">
                                  The dark wood paneling and furnishings, deluxe
                                  red-draped four-poster bed, and magnificent
                                  black
                                </p>
                              </div>
                              <div className="card-program">
                                <div className="endtime">
                                  <div className="card-button">
                                    <Link
                                      className="btn btn-gray"
                                      to="/blog-details"
                                    >
                                      Keep Reading
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-flight card-news background-card">
                            <div className="card-image">
                              <Link to="/blog-details">
                                <img
                                  src="/assets/imgs/blog/blog-list/news3.png"
                                  alt="Maharashtra-cabs"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link
                                className="btn btn-label-tag background-2"
                                to="#"
                              >
                                Wanderlust
                              </Link>
                              <div className="card-title">
                                <Link
                                  className="heading-6 neutral-1000"
                                  to="/blog-details"
                                >
                                  Top Tips for Renting a Car During Peak Travel
                                  Seasons
                                </Link>
                              </div>
                              <div className="card-meta">
                                <span className="post-date neutral-1000">
                                  18 Sep 2024
                                </span>
                                <span className="post-time neutral-1000">
                                  6 mins
                                </span>
                                <span className="post-comment neutral-1000">
                                  38 comments
                                </span>
                              </div>
                              <div className="card-desc">
                                <p className="text-md-medium neutral-500">
                                  The dark wood paneling and furnishings, deluxe
                                  red-draped four-poster bed, and magnificent
                                  black
                                </p>
                              </div>
                              <div className="card-program">
                                <div className="endtime">
                                  <div className="card-button">
                                    <Link
                                      className="btn btn-gray"
                                      to="/blog-details"
                                    >
                                      Keep Reading
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-flight card-news background-card">
                            <div className="card-image">
                              <Link to="/blog-details">
                                <img
                                  src="/assets/imgs/blog/blog-list/news4.png"
                                  alt="Maharashtra-cabs"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link
                                className="btn btn-label-tag background-4"
                                to="#"
                              >
                                Heritage
                              </Link>
                              <div className="card-title">
                                <Link
                                  className="heading-6 neutral-1000"
                                  to="/blog-details"
                                >
                                  How to Choose the Best Insurance for Your
                                  Rental Car
                                </Link>
                              </div>
                              <div className="card-meta">
                                <span className="post-date neutral-1000">
                                  18 Sep 2024
                                </span>
                                <span className="post-time neutral-1000">
                                  6 mins
                                </span>
                                <span className="post-comment neutral-1000">
                                  38 comments
                                </span>
                              </div>
                              <div className="card-desc">
                                <p className="text-md-medium neutral-500">
                                  The dark wood paneling and furnishings, deluxe
                                  red-draped four-poster bed, and magnificent
                                  black
                                </p>
                              </div>
                              <div className="card-program">
                                <div className="endtime">
                                  <div className="card-button">
                                    <Link
                                      className="btn btn-gray"
                                      to="/blog-details"
                                    >
                                      Keep Reading
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link
                                className="page-link"
                                to="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">
                                  <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668"
                                      stroke="white"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link active" to="#">
                                2
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                4
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                5
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                ...
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link"
                                to="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992"
                                      stroke="white"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="col-lg-4">
                        <div className="box-search-style-2">
                          <form action="#">
                            <input type="text" placeholder="Search" />
                            <input
                              className="btn-search-submit"
                              type="submit"
                            />
                          </form>
                        </div>
                        <div className="box-sidebar-border">
                          <div className="box-head-sidebar">
                            <p className="text-xl-bold neutral-1000">
                              Trending Now
                            </p>
                          </div>
                          <div className="box-content-sidebar">
                            <ul className="list-posts">
                              <li>
                                <div className="card-post">
                                  <div className="card-image">
                                    <Link to="/blog-details">
                                      <img
                                        src="/assets/imgs/blog/blog-list/trending.png"
                                        alt="Maharashtra-cabs"
                                      />
                                    </Link>
                                  </div>
                                  <div className="card-info">
                                    <Link
                                      className="text-md-bold neutral-1000"
                                      to="/blog-details"
                                    >
                                      How to Choose the Best Insurance for Your
                                      Rental Car
                                    </Link>
                                    <p className="text-sm-medium date-post neutral-500">
                                      18 Sep 2024
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="card-post">
                                  <div className="card-image">
                                    <Link to="/blog-details">
                                      <img
                                        src="/assets/imgs/blog/blog-list/trending1.png"
                                        alt="Maharashtra-cabs"
                                      />
                                    </Link>
                                  </div>
                                  <div className="card-info">
                                    <Link
                                      className="text-md-bold neutral-1000"
                                      to="/blog-details"
                                    >
                                      The Advantages of Renting a Car for
                                      Business Travel
                                    </Link>
                                    <p className="text-sm-medium date-post neutral-500">
                                      18 Sep 2024
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="card-post">
                                  <div className="card-image">
                                    <Link to="/blog-details">
                                      <img
                                        src="/assets/imgs/blog/blog-list/trending2.png"
                                        alt="Maharashtra-cabs"
                                      />
                                    </Link>
                                  </div>
                                  <div className="card-info">
                                    <Link
                                      className="text-md-bold neutral-1000"
                                      to="/blog-details"
                                    >
                                      Why Renting a Car Is Ideal for Exploring
                                      National Parks
                                    </Link>
                                    <p className="text-sm-medium date-post neutral-500">
                                      18 Sep 2024
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="card-post">
                                  <div className="card-image">
                                    <Link to="/blog-details">
                                      <img
                                        src="/assets/imgs/blog/blog-list/trending3.png"
                                        alt="Maharashtra-cabs"
                                      />
                                    </Link>
                                  </div>
                                  <div className="card-info">
                                    <Link
                                      className="text-md-bold neutral-1000"
                                      to="/blog-details"
                                    >
                                      How to Extend Your Car Rental Without
                                      Hassle
                                    </Link>
                                    <p className="text-sm-medium date-post neutral-500">
                                      18 Sep 2024
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="card-post">
                                  <div className="card-image">
                                    <Link to="/blog-details">
                                      <img
                                        src="/assets/imgs/blog/blog-list/trending4.png"
                                        alt="Maharashtra-cabs"
                                      />
                                    </Link>
                                  </div>
                                  <div className="card-info">
                                    <Link
                                      className="text-md-bold neutral-1000"
                                      to="/blog-details"
                                    >
                                      The Ultimate Checklist for Returning Your
                                      Rental Car
                                    </Link>
                                    <p className="text-sm-medium date-post neutral-500">
                                      18 Sep 2024
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="box-sidebar-border">
                          <div className="box-head-sidebar">
                            <p className="text-xl-bold neutral-1000">Gallery</p>
                          </div>
                          <div className="box-content-sidebar">
                            <ul className="list-photo-col-3">
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat2.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat3.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat4.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat5.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat6.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat7.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat8.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    src="/assets/imgs/blog/blog-list/cat.png"
                                    alt="Maharashtra-cabs"
                                  />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sidebar-banner">
                          <Link to="#">
                            <img
                              className="rounded-3 w-100"
                              src="/assets/imgs/blog/blog-list/banner-ads.png"
                              alt="Maharashtra-cabs"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      </>
    </div>
  );
};

export default BlogList;

import React from "react";
import Layout from "../components/layout/Layout";
import Search1 from "../components/sections/Search1";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div>
      <Layout footerStyle={1}>
        <div className="page-header-2 pt-130 background-body">
          <div>
            <div className="page-header pt-30 pb-25">
              <div className="custom-container position-relative mx-auto">
                <div className="bg-overlay rounded-12 overflow-hidden">
                  <img
                    className="w-100 h-100 rounded-12 img-banner"
                    src="/assets/imgs/page-header/Job-opening.png"
                    alt="Maharashtra-cabs"
                  />
                </div>
                <div className="container position-absolute z-1 top-50 start-50 translate-middle">
                  <h2 className="text-white">Job Openings</h2>
                </div>
              </div>
            </div>
            <section className="box-section box-contact-form background-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 mb-30">
                    <h2 className="neutral-1000 mb-25">Get in Touch</h2>
                    <div className="form-contact">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              First Name
                            </label>
                            <input
                              className="form-control username"
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              First Name
                            </label>
                            <input
                              className="form-control username"
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              Email Adress
                            </label>
                            <input
                              className="form-control email"
                              type="email"
                              placeholder="email@domain.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              Phone Number
                            </label>
                            <input
                              className="form-control phone"
                              type="text"
                              placeholder="Phone number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="text-sm-medium neutral-1000">
                              Your Message
                            </label>
                            <textarea
                              className="form-control"
                              rows={6}
                              placeholder="Leave us a message..."
                            />
                          </div>
                        </div>
                        <div className="box-remember-forgot">
                          <div className="form-group">
                            <div className="remeber-me">
                              <label className="text-sm-medium neutral-500">
                                {" "}
                                <input
                                  className="cb-remember"
                                  type="checkbox"
                                />
                                Agree to our{" "}
                                <Link
                                  className="text-sm-medium neutral-1000"
                                  to="/term"
                                >
                                  Terms of service{" "}
                                </Link>
                                and{" "}
                                <Link
                                  className="text-sm-medium neutral-1000"
                                  to="/privacy"
                                >
                                  Privacy Policy
                                </Link>{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button className="btn btn-book">
                            Send message
                            <svg
                              width={17}
                              height={16}
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Career;

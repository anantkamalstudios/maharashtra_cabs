import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import useHome from "../hooks/useHome";
import { RingLoader } from "react-spinners";

const BlogList = () => {
  const { data, loading, error } = useHome();
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return (
      <Layout footerStyle={1}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <RingLoader size={120} color="#3583e8ff" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout footerStyle={1}>
        <div className="container py-5">
          <h2>Failed to load data. Please try again.</h2>
        </div>
      </Layout>
    );
  }

  const blogsRaw = data?.blogs || [];
  const filteredBlogs = blogsRaw.filter((blog) => {
    const isVisible = blog.status === "published" || blog.status === "draft"; // ✅ Allow both

    const matchesSearch =
      searchTerm === "" ||
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase());

    return isVisible && matchesSearch;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "N/A";
    }
  };

  const formatReadTime = (minutes) => {
    if (!minutes) return "N/A";
    return `${minutes} min${minutes > 1 ? "s" : ""}`;
  };

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
                          {filteredBlogs.length > 0
                            ? `${filteredBlogs.length} article${
                                filteredBlogs.length > 1 ? "s" : ""
                              } found`
                            : "No articles found"}
                        </p>

                        {filteredBlogs.length === 0 ? (
                          <div className="text-center py-5">
                            <p className="text-muted">
                              No blog posts found matching your search.
                            </p>
                          </div>
                        ) : (
                          <div className="box-grid-hotels box-grid-news mt-60 mb-50 wow fadeIn">
                            {filteredBlogs.map((blog) => (
                              <div
                                className="card-flight card-news background-card mb-4"
                                key={blog.id}
                              >
                                <div className="card-image">
                                  <Link
                                    to={`/blog-details/${blog.slug}`}
                                    state={{ slug: blog.slug }}
                                  >
                                    <img
                                      src={
                                        blog.cover_image
                                          ? `https://maharashtracabs.com/maharashtracab_backend/public/${blog.cover_image}`
                                          : "/assets/imgs/blog/blog-list/default-blog.jpg"
                                      }
                                      alt={blog.title || "Blog post"}
                                      style={{
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </Link>
                                </div>
                                <div className="card-info">
                                  <Link
                                    className="btn btn-label-tag background-3"
                                    to="#"
                                  >
                                    {blog.category || "General"}
                                  </Link>
                                  <div className="card-title">
                                    <Link
                                      className="heading-6 neutral-1000"
                                      to={`/blog-details/${blog.slug}`}
                                      state={{ slug: blog.slug }}
                                    >
                                      {blog.title || "Untitled"}
                                    </Link>
                                  </div>
                                  <div className="card-meta">
                                    <span className="post-date neutral-1000">
                                      {formatDate(blog.published_at)}
                                    </span>
                                    <span className="post-time neutral-1000">
                                      {formatReadTime(blog.read_time_min)}
                                    </span>
                                    <span className="post-comment neutral-1000">
                                      {blog.author_name || "Anonymous"}
                                    </span>
                                    {blog.views > 0 && (
                                      <span className="post-views neutral-1000">
                                        {blog.views} view
                                        {blog.views > 1 ? "s" : ""}
                                      </span>
                                    )}
                                  </div>
                                  <div className="card-desc">
                                    <p className="text-md-medium neutral-500">
                                      {blog.excerpt || "No excerpt available"}
                                    </p>
                                  </div>
                                  <div className="card-program">
                                    <div className="endtime">
                                      <div className="card-button">
                                        <Link
                                          className="btn btn-gray"
                                          to={`/blog-details/${blog.slug}`}
                                          state={{ slug: blog.slug }}
                                        >
                                          Keep Reading
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="col-lg-4">
                        <div className="box-search-style-2">
                          <form onSubmit={(e) => e.preventDefault()}>
                            <input
                              type="text"
                              placeholder="Search blogs..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <input
                              className="btn-search-submit"
                              type="submit"
                            />
                          </form>
                        </div>
                        <div className="box-sidebar-border">
                          <div className="box-head-sidebar">
                            <p className="text-xl-bold neutral-1000">
                              Categories
                            </p>
                          </div>
                          <div className="box-content-sidebar">
                            <ul className="list-posts">
                              {Array.from(
                                new Set(
                                  blogsRaw
                                    .filter(
                                      (b) =>
                                        b.status === "published" ||
                                        b.status === "draft"
                                    )
                                    .map((b) => b.category)
                                )
                              )
                                .filter(Boolean)
                                .map((category, index) => (
                                  <li key={index}>
                                    <div className="card-post">
                                      <div className="card-info">
                                        <Link
                                          className="text-md-bold neutral-1000"
                                          to="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setSearchTerm(category);
                                          }}
                                        >
                                          {category}
                                        </Link>
                                        <p className="text-sm-medium date-post neutral-500">
                                          {
                                            blogsRaw.filter(
                                              (b) =>
                                                (b.status === "published" ||
                                                  b.status === "draft") &&
                                                b.category === category
                                            ).length
                                          }{" "}
                                          posts
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                        <div className="box-sidebar-border">
                          <div className="box-head-sidebar">
                            <p className="text-xl-bold neutral-1000">
                              Featured Posts
                            </p>
                          </div>
                          <div className="box-content-sidebar">
                            <ul className="list-posts">
                              {blogsRaw
                                .filter(
                                  (blog) =>
                                    (blog.status === "published" ||
                                      blog.status === "draft") &&
                                    blog.is_featured
                                )
                                .slice(0, 5)
                                .map((blog) => (
                                  <li key={blog.id}>
                                    <div className="card-post">
                                      <div className="card-image">
                                        <Link
                                          to={`/blog-details/${blog.slug}`}
                                          state={{ slug: blog.slug }}
                                        >
                                          <img
                                            src={
                                              blog.cover_image
                                                ? `https://maharashtracabs.com/maharashtracab_backend/public/${blog.cover_image}`
                                                : "/assets/imgs/blog/blog-list/default-blog.jpg"
                                            }
                                            alt={blog.title || "Blog post"}
                                            style={{
                                              width: "60px",
                                              height: "60px",
                                              objectFit: "cover",
                                            }}
                                          />
                                        </Link>
                                      </div>
                                      <div className="card-info">
                                        <Link
                                          className="text-md-bold neutral-1000"
                                          to={`/blog-details/${blog.slug}`}
                                          state={{ slug: blog.slug }}
                                        >
                                          {blog.title || "Untitled"}
                                        </Link>
                                        <p className="text-sm-medium date-post neutral-500">
                                          {formatDate(blog.published_at)}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
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

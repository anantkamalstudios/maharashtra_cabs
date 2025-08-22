import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import useHome from "../hooks/useHome";
import { RingLoader } from "react-spinners";

const BlogDetails = () => {
  const { slug: slugParam } = useParams();
  const location = useLocation();
  const stateSlug = location.state && location.state.slug;
  const slug = slugParam || stateSlug;
  const { data, loading, error } = useHome();

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
  const article = blogsRaw.find((blog) => blog.slug === slug);

  if (!article) {
    return (
      <Layout footerStyle={1}>
        <div className="container py-5">
          <h2>Blog post not found</h2>
          <Link to="/blog-list" className="btn btn-primary mt-3">
            Back to Blog List
          </Link>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
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
    <Layout footerStyle={1}>
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
              <Link to="/blog-list" className="neutral-700 text-md-medium">
                Blog
              </Link>
              <span>
                <img
                  src="/assets/imgs/template/icons/arrow-right.svg"
                  alt="Maharashtra-cabs"
                />
              </span>
              <span className="neutral-1000 text-md-bold">
                {article.title || "Blog Post"}
              </span>
            </div>
            <h1 className="my-3 neutral-1000">
              {article.title || "Blog Post"}
            </h1>
            <div className="d-flex justify-content-center gap-3 neutral-500 mb-3">
              <span className="post-date">
                {formatDate(article.published_at)}
              </span>
              <span className="post-time">
                {formatReadTime(article.read_time_min)}
              </span>
              {article.author_name && (
                <span className="post-author">By {article.author_name}</span>
              )}
              {article.views > 0 && (
                <span className="post-views">
                  {article.views} view{article.views > 1 ? "s" : ""}
                </span>
              )}
            </div>
            {article.category && (
              <div className="mb-3">
                <span className="badge bg-primary px-3 py-2">
                  {article.category}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="box-section background-body">
        <div className="container">
          <div className="row py-96">
            <div className="col-lg-10 mx-auto">
              <div className="background-card rounded-3 p-3 p-md-4">
                <div className="row g-4 align-items-start">
                  {/* Left Side: Image */}
                  <div className="col-lg-6 col-md-12">
                    <img
                      src={
                        article.cover_image
                          ? `https://maharashtracabs.com/maharashtracab_backend/public/${article.cover_image}`
                          : "/assets/imgs/blog/blog-list/default-blog.jpg"
                      }
                      alt={article.title || "Blog post"}
                      className="w-100 rounded-3"
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  </div>

                  {/* Right Side: Content */}
                  <div className="col-lg-6 col-md-12 d-flex flex-column gap-3">
                    {article.excerpt && (
                      <p className="text-xl-medium neutral-500">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="blog-content neutral-1000">
                      {article.content ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: article.content }}
                          className="neutral-800"
                        />
                      ) : (
                        <p className="text-md-medium neutral-1000">
                          No content available for this blog post.
                        </p>
                      )}
                    </div>

                    {article.tags && (
                      <div className="mt-3">
                        <small className="text-muted d-block mb-2">Tags:</small>
                        <div className="d-flex flex-wrap gap-2">
                          {article.tags.split(",").map((tag, index) => (
                            <span
                              key={index}
                              className="badge bg-light text-dark px-2 py-1"
                            >
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetails;

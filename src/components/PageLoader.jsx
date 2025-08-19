import React from "react";
import { useLoading } from "../context/LoadingContext.jsx";

const PageLoader = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="loader-blur-bg" />
      <img src="/loadingGif2.gif" alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default PageLoader;

import React from "react";
import { useLoading } from "../context/LoadingContext.jsx";
import { RingLoader } from "react-spinners";

const PageLoader = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="loader-blur-bg" />
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
    </div>
  );
};

export default PageLoader;

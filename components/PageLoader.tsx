"use client";
import { useEffect, useState } from "react";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="page-loader">
        <div className="loader-blur-bg" />
        <img src="/loadingGif2.gif" alt="Loading..." className="loader-gif" />
      </div>
    );
  }
  return <>{children}</>;
}

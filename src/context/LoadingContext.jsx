import React, { createContext, useContext, useState, useEffect } from "react";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);
  const [startTimestamp, setStartTimestamp] = useState(null);

  const startLoading = () => {
    setIsLoading(true);
    setStartTimestamp(Date.now());
    setLoadingTime(0);
  };

  const stopLoading = () => {
    setIsLoading(false);
    if (startTimestamp) {
      const elapsed = Math.floor((Date.now() - startTimestamp) / 30000);
      setLoadingTime(elapsed);
    }
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, loadingTime, startLoading, stopLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

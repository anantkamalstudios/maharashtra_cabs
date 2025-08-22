import { useEffect, useState } from "react";
import axios from "axios";

function useHome() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://maharashtracabs.com/maharashtracab_backend/api/cms/home")
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useHome;

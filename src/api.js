import { useState, useEffect } from "react";
import axios from "axios";

export function useApi(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => setError(error.message));
  }, [url]);

  return { data, error, loading };
}

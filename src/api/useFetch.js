import { useState, useEffect } from "react";

export default function useFetch(url, click) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    if (url) {
      fetchData(url);
    }
  }, [click]);

  return { data, isLoading, error };
}

import { useState, useEffect } from "react";

export default function useFetch(url, click) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
      setError("");
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    fetchData(url);
    console.log(`useEffect called`);
  }, [click]);

  return { data, isLoading, error };
}

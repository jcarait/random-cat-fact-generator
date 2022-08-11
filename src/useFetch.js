import { useState, useEffect } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");

        if (!response.ok) {
          throw new Error(`Error! Status: ${response.status}`);
        }

        const result = await response.json();

        setData(result.fact);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(data, isLoading, error);

  return { data, isLoading, error };
};

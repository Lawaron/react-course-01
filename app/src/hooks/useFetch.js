import { useState, useEffect } from "react";

export const useFetch = (fetcher) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData(signal) {
      try {
        setIsLoading(true);
        setError("");
        setData(await fetcher(signal));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setData(null);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetcher]);

  return { data, isLoading, error };
};

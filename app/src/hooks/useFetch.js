import { useState, useEffect } from "react";

export const useFetch = (
  initialData,
  shouldNotRun,
  fetcher,
  dependencies = []
) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (shouldNotRun) {
      setData(initialData);
      setError("");

      return;
    }

    const controller = new AbortController();

    async function fetchData(signal) {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetcher(signal);

        setData(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setData(initialData);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, dependencies); // eslint-disable-line

  return { data, isLoading, error };
};

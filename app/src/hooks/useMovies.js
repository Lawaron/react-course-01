// hooks/useMovies.js
import { useState, useEffect } from "react";
import { getMovies } from "../services/movieApi";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const data = await getMovies(query, controller.signal);

        setMovies(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setMovies([]);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
};

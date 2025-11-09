import { useCallback } from "react";
import { getMovies } from "../services/movieApi";
import { useFetch } from "./useFetch";

export const useMovies = (query) => {
  const fetcher = useCallback((signal) => getMovies(query, signal), [query]);

  const { data, isLoading, error } = useFetch(fetcher);

  const movies = data || [];

  return { movies, isLoading, error };
};

import { useFetch } from "./useFetch";
import { getMovieDetails } from "../services/movieApi";
import { useCallback } from "react";

export const useMovieDetails = (movieId) => {
  const fetcher = useCallback(
    (signal) => getMovieDetails(movieId, signal),
    [movieId]
  );

  const { data: movie, isLoading, error } = useFetch(fetcher);

  return { movie, isLoading, error };
};

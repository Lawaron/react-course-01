import { useFetch } from "./useFetch";
import { getMovieDetails } from "../services/movieApi";

export const useMovieDetails = (movieId) => {
  const {
    data: movie,
    isLoading,
    error,
  } = useFetch(null, !movieId, (signal) => getMovieDetails(movieId, signal), [
    movieId,
  ]);

  return { movie, isLoading, error };
};

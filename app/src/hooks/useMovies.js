import { getMovies } from "../services/movieApi";
import { useFetch } from "./useFetch";

export const useMovies = (query) => {
  const {
    data: movies,
    isLoading,
    error,
  } = useFetch([], query.length < 3, (signal) => getMovies(query, signal), [
    query,
  ]);

  return { movies, isLoading, error };
};

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovies = async (setMovies, setError, setIsLoading, query) => {
  if (query.length < 3) {
    setMovies([]);
    setError("");
    return;
  }

  try {
    setIsLoading(true);
    setError("");

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
    );

    if (!res.ok) throw new Error("Something went wrong while fetching movies!");

    const data = await res.json();
    if (data.Response === "False") throw new Error("Movie not found!");

    setMovies(data.Search);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

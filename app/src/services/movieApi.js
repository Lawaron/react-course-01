const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const getMovies = async (query, signal) => {
  if (query.length < 3) return [];

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    { signal }
  );

  if (!res.ok) {
    throw new Error("Something went wrong while fetching movies!");
  }

  const data = await res.json();

  if (data.Response === "False") {
    throw new Error("Movie not found!");
  }

  return data.Search || [];
};

export const getMovieDetails = async (id, signal) => {
  if (!id) return null;

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`,
    { signal }
  );

  if (!res.ok) {
    throw new Error("Something went wrong while fetching movie details!");
  }

  const data = await res.json();

  if (data.Response === "False") {
    throw new Error("Movie details not found!");
  }

  return data;
};

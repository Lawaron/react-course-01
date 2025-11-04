import { useEffect, useState } from "react";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FoundResults from "./components/FoundResults";
import List from "./components/List";
import Movie from "./components/Movie";
import WatchedMovie from "./components/WatchedMovie";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

const Loader = () => <p className="loader">Loading...</p>;

const ErrorMessage = ({ message }) => (
  <p className="error">
    <span>😕</span>
    {message}
  </p>
);

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const query = "matrix";

  const moviesBoxContent = () => {
    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;
    return (
      <List
        items={movies}
        renderItem={(movie) => <Movie movie={movie} key={movie.imdbID} />}
      />
    );
  };

  useEffect(
    () => async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong while fetching movies!");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found!");

        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }

      return () => console.log("cleanup");
    },
    []
  );

  return (
    <>
      <Navbar>
        <Search />
        <FoundResults numResults={movies.length} />
      </Navbar>
      <Main>
        <Box>{moviesBoxContent()}</Box>
        <Box>
          <WatchedSummary watched={watched} />
          <List
            items={watched}
            renderItem={(movie) => (
              <WatchedMovie movie={movie} key={movie.imdbID} />
            )}
          />
        </Box>
      </Main>
    </>
  );
};

export default App;

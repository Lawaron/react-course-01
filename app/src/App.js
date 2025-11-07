import { useEffect, useState } from "react";
import { fetchMovies } from "./utils/api";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FoundResults from "./components/FoundResults";
import List from "./components/List";
import Movie from "./components/Movie";
import WatchedMovie from "./components/WatchedMovie";

const Loader = () => <p className="loader">Loading...</p>;

const ErrorMessage = ({ message }) => (
  <p className="error">
    <span>😕</span>
    {message}
  </p>
);

const moviesBoxContent = (isLoading, error, movies) => {
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <List
      items={movies}
      renderItem={(movie) => <Movie movie={movie} key={movie.imdbID} />}
    />
  );
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("matrix");

  useEffect(() => {
    fetchMovies(setMovies, setError, setIsLoading, query);
  }, [query]);

  return (
    <>
      <Navbar>
        <Search {...{ query, setQuery }} />
        <FoundResults numResults={movies.length} />
      </Navbar>
      <Main>
        <Box>{moviesBoxContent(isLoading, error, movies)}</Box>
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

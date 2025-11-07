import { useState } from "react";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FoundResults from "./components/FoundResults";
import List from "./components/List";
import Movie from "./components/Movie";
import WatchedMovie from "./components/WatchedMovie";
import { useMovies } from "./hooks/useMovies";

const Loader = () => <p className="loader">Loading...</p>;

const ErrorMessage = ({ message }) => (
  <p className="error">
    <span>😕</span>
    {message}
  </p>
);

const App = () => {
  const [watched] = useState([]);
  const [query, setQuery] = useState("matrix");
  const { movies, isLoading, error } = useMovies(query);

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

  return (
    <>
      <Navbar>
        <Search {...{ query, setQuery }} />
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

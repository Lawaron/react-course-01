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
import MovieDetails from "./components/MovieDetails";
import DataDisplay from "./components/DataDisplay";

const App = () => {
  const [watched] = useState([]);
  const [query, setQuery] = useState("matrix");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const { movies, isLoading, error } = useMovies(query);

  console.log({ movies });

  return (
    <>
      <Navbar>
        <Search {...{ query, setQuery }} />
        <FoundResults numResults={movies.length} />
      </Navbar>
      <Main>
        <Box>
          <DataDisplay {...{ isLoading, error }}>
            {movies.length && (
              <List
                items={movies}
                className="list list-movies"
                renderItem={(movie) => (
                  <Movie
                    movie={movie}
                    key={movie.imdbID}
                    onSelectMovie={handleSelectMovie}
                  />
                )}
              />
            )}
          </DataDisplay>
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <List
                items={watched}
                renderItem={(movie) => (
                  <WatchedMovie movie={movie} key={movie.imdbID} />
                )}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;

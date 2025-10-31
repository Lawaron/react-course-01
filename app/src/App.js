import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data/tempData";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import WatchedSummary from "./components/WatchedSummary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FoundResults from "./components/FoundResults";

const App = () => {
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search />
        <FoundResults numResults={movies.length} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
};

export default App;

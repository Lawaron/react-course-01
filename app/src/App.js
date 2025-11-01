import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data/tempData";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FoundResults from "./components/FoundResults";
import List from "./components/List";
import Movie from "./components/Movie";
import WatchedMovie from "./components/WatchedMovie";

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
          <List
            items={movies}
            renderItem={(movie) => <Movie movie={movie} key={movie.imdbID} />}
          />
        </Box>
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

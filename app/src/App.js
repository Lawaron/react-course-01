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
import StarRating from "./components/StarRating";

const App = () => {
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);
  const [movieRank, setMovieRank] = useState(0);

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
        <Box>
          <StarRating
            maxRating={5}
            size={36}
            messages={["Bad", "Not Too Bad", "Average", "Nice", "Amazing"]}
            onSetRating={setMovieRank}
          />
          Movie Rank: {movieRank}
        </Box>
      </Main>
    </>
  );
};

export default App;

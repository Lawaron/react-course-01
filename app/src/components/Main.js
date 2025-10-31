import { useState } from "react";
import { tempWatchedData } from "../data/tempData";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedList from "./WatchedList";

const Main = ({ movies }) => {
  const [watched] = useState(tempWatchedData);

  return (
    <main className="main">
      <Box>
        <MovieList movies={movies} />
      </Box>
      <Box>
        <>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </>
      </Box>
    </main>
  );
};

export default Main;

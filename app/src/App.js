import { useEffect, useState } from "react";
// import { tempMovieData, tempWatchedData } from "./data/tempData";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FoundResults from "./components/FoundResults";
import List from "./components/List";
import Movie from "./components/Movie";
import WatchedMovie from "./components/WatchedMovie";
// import StarRating from "./components/StarRating";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

const Loader = () => <p className="loader">Loading...</p>;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched] = useState([]);
  // const [movieRank, setMovieRank] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const query = "matrix";

  useEffect(
    () => async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
      );

      const data = await res.json();

      setMovies(data.Search);
      setIsLoading(false);

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
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <List
              items={movies}
              renderItem={(movie) => <Movie movie={movie} key={movie.imdbID} />}
            />
          )}
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
        {/* <Box>
          <StarRating
            maxRating={5}
            size={36}
            messages={["Bad", "Not Too Bad", "Average", "Nice", "Amazing"]}
            onSetRating={setMovieRank}
          />
          Movie Rank: {movieRank}
        </Box> */}
      </Main>
    </>
  );
};

export default App;

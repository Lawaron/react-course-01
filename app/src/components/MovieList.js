import { useState } from "react";
import { tempMovieData } from "../data/tempData";
import Movie from "./Movie";

const MovieList = () => {
  const [movies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;

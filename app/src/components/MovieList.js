import Movie from "./Movie";

const MovieList = ({ movies }) => (
  <ul className="list">
    {movies?.map((movie) => (
      <Movie movie={movie} key={movie.imdbID} />
    ))}
  </ul>
);

export default MovieList;

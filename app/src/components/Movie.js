const Movie = ({ movie }) => (
  <li>
    <img src={movie.poster} alt={`${movie.title} poster`} />
    <h3>{movie.title}</h3>
    <div>
      <p>
        <span>🗓️</span>
        <span>{movie.year}</span>
      </p>
    </div>
  </li>
);

export default Movie;

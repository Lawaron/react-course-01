import { useMovieDetails } from "../hooks/useMovieDetails";
import DataDisplay from "./DataDisplay";
import StarRating from "./StarRating";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  const { movie, isLoading, error } = useMovieDetails(selectedId);

  console.log({ movie });

  return (
    <DataDisplay {...{ isLoading, error }}>
      {movie && (
        <div className="details">
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
            <div className="details-overview">
              <h3>{movie.Title}</h3>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>
                {movie.Genre} &bull; {movie.Director}
              </p>
              <p>⭐ {movie.imdbRating} IMDb Rating</p>
              {/* <p>{movie.Plot}</p> */}
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
            </div>
            <div className="details-section">
              <p>{movie.Plot}</p>
            </div>
            <div className="details-section">
              <h4>Actors</h4>
              <p>{movie.Actors}</p>
            </div>
            <div className="details-section">
              <h4>Writer</h4>
              <p>{movie.Writer}</p>
            </div>
            <div className="details-section">
              <h4>Awards</h4>
              <p>{movie.Awards}</p>
            </div>
          </section>
        </div>
      )}
    </DataDisplay>
  );
};

export default MovieDetails;

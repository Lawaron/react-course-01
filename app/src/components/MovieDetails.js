import { useEffect, useRef } from "react";
import { useMovieDetails } from "../hooks/useMovieDetails";
import DataDisplay from "./DataDisplay";
import StarRating from "./StarRating";
import useLocalStorage from "../hooks/useLocalStorage";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  const { movie, isLoading, error } = useMovieDetails(selectedId);
  const lastRating = useRef(0);
  const [ratings, setRatings] = useLocalStorage("ratings", {});

  const handleRating = (rating) => {
    lastRating.current = rating;
    setRatings((ratings) => ({ ...ratings, [selectedId]: rating }));
  };

  useEffect(() => {
    document.title = movie ? `Movie | ${movie.Title}` : "Loading Movie Details";
    return () => {
      document.title = "usePopcorn";
    };
  }, [movie]);

  return (
    <>
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
              </div>
            </header>
            <section>
              <div className="rating">
                <StarRating
                  maxRating={10}
                  size={24}
                  defaultRating={ratings[selectedId] || 0}
                  onSetRating={handleRating}
                />
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
      <p>Your last Rating: {lastRating.current}</p>
    </>
  );
};

export default MovieDetails;

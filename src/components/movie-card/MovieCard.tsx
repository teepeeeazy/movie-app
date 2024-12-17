import React from "react";
import { FaHeart } from "react-icons/fa";
import Movie from "../../core/props/movie-card/MovieCardInterface";

function onFavoriteClick() {
  alert("Cliked on favorite button");
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.title} alt={movie.title} />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={onFavoriteClick}>
            <FaHeart />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default MovieCard;

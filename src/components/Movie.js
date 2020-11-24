//@ts-check
import react from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, rating, genres }) {
  return (
    <div className="movie">
      <img className="movie_poster" src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">{genres.map((genre, number) => <li className="moive_genre" key={number}>{genre}</li>)}</ul>
        <h5>{rating}/10.0</h5>
        <h5 className="movie_summary">{summary.slice(0,180)}...</h5>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

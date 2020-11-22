//@ts-check
import react from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, rating }) {
  return (
    <div class="movie">
    <img src={poster} alt={title} title={title} />
      <div class="moivie_data">
        <h3 class="movie_title">
          {title}({year})
        </h3>
        <h5>{rating}/10.0</h5>
        <h5 class>{summary}</h5>
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
  rating: PropTypes.number.isRequired
};

export default Movie;

//@ts-check
import react from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, rating }) {
  return (
    <div>
      <div>
        {/* <h5>id : {id}</h5> */}
        <h5>
          {title}({year})
        </h5>
        <h5>{rating}/10.0</h5>
        <img src={poster} alt="" />
        <h5>{summary}</h5>
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

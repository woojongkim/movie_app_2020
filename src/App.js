//@ts-check
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

function doSomething() {
  console.log("hello button");
}

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    console.log("render");
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>;
  }
}

export default App;

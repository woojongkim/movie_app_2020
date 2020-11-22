//@ts-check
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  page = 1;
  limit = 5;

  state = {
    isLoading: true,
    movies: [],
    curPage: 1
  };

  getMovies = async (page) => {
    const newLocal = `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${this.limit}`;
    console.log(newLocal);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      newLocal
    );
    this.setState({ movies, isLoading: false, curPage:page });
  };

  componentDidMount() {
    this.getMovies(this.page);
  }

  prev = () =>{
    if(this.page<=1) 
      return;
    this.getMovies(--this.page);
  }

  next = () =>{
    this.getMovies(++this.page);
  }

  more = ()=>{
    this.limit += 5;
    this.getMovies(this.page);
  }

  render() {
    const { isLoading, movies, curPage } = this.state;
    console.log("render");
    console.log(movies);
    return (
      <section class="container">
        <button onClick={this.prev}>prev</button>
        {curPage}
        <button onClick={this.next}>next</button>
        <button onClick={this.more}>more</button>
        {isLoading?<div class="loader">
          <span class="loader__text">Loading...</span>
        </div>:movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            rating={movie.rating}
          />
        ))}
      </section>
    );
  }
}

export default App;

//@ts-check
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  page = 1;
  limit = 5;

  state = {
    isLoading: true,
    movies: [],
    curPage: 1
  };

  getMovies = async (page) => {
    const newLocal = `https://yts.mx/api/v2/list_movies.json?sort_by=rating&page=${page}&limit=${this.limit}`;
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
      <div>
        <button onClick={this.prev}>prev</button>
        {curPage}
        <button onClick={this.next}>next</button>
        <button onClick={this.more}>more</button>
        {isLoading?"Loading":movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.title}
            poster={movie.medium_cover_image}
            rating={movie.rating}
          />
        ))}
      </div>
    );
  }
}

export default App;

import React,{useContext} from "react";
import {MovieContext} from '../../context/MovieContext';
import './MovieList.css';
import Movie from '../movie/Movie';

const MovieLists = () => {
const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <Movie key={index} movie={movie}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;

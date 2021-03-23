import React, {useContext} from "react";
// Two things area required, useContext hook and context which has provider in it

import {MovieContext} from '../../context/MovieContext';

const NavBar = () => {
    const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        useContext
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Movies Count : {movies.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import NavBar from "./components/navbar/NavBar";
import MoviesList from "./components/movieLists/MovieList";
import AddMovie from "./components/addMovie/AddMovie";

import { MovieProvider } from "./context/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <MoviesList />
      <div className="container mt-5">
        <div className="row">
          <div className="offset-md-4 col-4">
            <AddMovie />
          </div>
        </div>
      </div>
    </MovieProvider>
  );
};

export default App;

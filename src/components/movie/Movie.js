import React from "react";

const Movie = ({movie}) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={movie.picture} className="card-img-top" alt={movie.name} />
        <div className="card-body">
          <h5 className="card-title">{movie.name}</h5>
          <p className="card-text text-muted small">Price: ${movie.price}</p>
          <a href="#" className="btn btn-primary text-truncate">
            More about {movie.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;

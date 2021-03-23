import React, { useState, useContext } from "react";
import {v4 as uuidV4} from 'uuid';
import { MovieContext } from "../../context/MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [picture, setPicture] = useState();

  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updatePicture = (e) => {
    setPicture(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMovies(prevMovies => [...prevMovies, {name, price, picture, currency:'$', id: uuidV4()}])
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="movieName">Movie Name</label>
        <input
          type="text"
          className="form-control"
          id="movieName"
          name="name"
          value={name}
          onChange={updateName}
          placeholder="movie name"
          required
        />
      </div>
      <div className="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={price}
          onChange={updatePrice}
          placeholder="Price"
          required
        />
      </div>
      <div className="form-group">
        <label for="picture">Picture</label>
        <input
          type="text"
          className="form-control"
          id="picture"
          name="picture"
          value={picture}
          onChange={updatePicture}
          placeholder="Image URL"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddMovie;

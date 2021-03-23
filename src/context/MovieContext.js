import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Lord of the rings",
      price: "10",
      currency: "$",
      picture:
        "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/07/04/148117-untitled-design-2020-07-04t191731120.jpg?itok=ZaJzq9Ht",
      id: 12341,
    },
    {
      name: "Start wars",
      price: "11",
      currency: "$",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
      id: 32341,
    },
    {
      name: "Fast and Furious",
      price: "9.5",
      currency: "$",
      picture:
        "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg",
      id: 98642,
    },
    {
      name: "Samurai Jack",
      price: "8.5",
      currency: "$",
      picture:
        "https://www.slashgear.com/wp-content/uploads/2020/07/samurai_jack_main-1280x720.jpg",
      id: 99103,
    },
  ]);
  return <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
  </MovieContext.Provider>;
};

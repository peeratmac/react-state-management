import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: 'The Devil Wears Prada',
      price: '$68.99',
      id: 80202
    },
    {
      name: 'Black Panther',
      price: '$8.00',
      id: 98032
    },
    {
      name: 'The Day After Tomorrow',
      price: '$4.49',
      id: 22102
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

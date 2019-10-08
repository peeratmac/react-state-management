import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = props => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Peerat Test</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;

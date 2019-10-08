import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = event => {
    setName(event.target.value);
  };

  const updatePrice = event => {
    setPrice(event.target.value);
  };

  const addMovie = event => {
    event.preventDefault();
    setMovies(previousMovies => [
      ...previousMovies,
      { name: name, price: price }
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      <input type='text' name='name' value={name} onChange={updateName} />
      <input type='text' name='price' value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;

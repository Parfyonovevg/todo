import React from 'react';
import './search-bar.css';

const SearchBar = () => {
  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='type to find'
    />
  );
};

export default SearchBar;

import React from 'react';

const SearchBar = () => {
  const searchText = 'What?';
  const searchStyle = {
    fontSize: '20px',
  };
  return <input style={searchStyle} placeholder={searchText} />;
};

export default SearchBar;

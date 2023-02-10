import React from "react";

const Search = (props) => {

  const { handleSearch } = props;
  
  return (
    <div>
      <label htmlFor="searchBar">Search your favourite brew!</label>
      <input
        id="searchBar"
        type="text"
        placeholder="Search..."
        onInput={handleSearch}
      />
    </div>
  );
};

export default Search;

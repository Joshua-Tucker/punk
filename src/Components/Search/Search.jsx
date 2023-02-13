import React from "react";
import "./Search.scss";

const Search = (props) => {

  const { handleSearch } = props;
  
  return (
    <div className="searchBar">
      <label htmlFor="searchBar" className="searchBar__title">Search your favourite brew!</label>
      <input className="searchBar__input"
        id="searchBar"
        type="text"
        placeholder="Search..."
        onInput={handleSearch}
      />
    </div>
  );
};

export default Search;

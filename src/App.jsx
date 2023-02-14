import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import beers from "./assets/punkData";
import Nav from "./Containers/Nav/Nav";
import Main from "./Containers/Main/Main";
import { useState } from "react";

function App() {
  const [filteredArr, setFilteredArr] = useState(beers);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredBeers = beers.filter((beer) => {
      if (beer.name.toLowerCase().includes(searchTerm)) {
        return true;
      }
    });
    console.log(searchTerm);
    setFilteredArr(filteredBeers);
  };

  const handleCheck = (event) => {
    const isChecked = event.target.checked;

    const filterValues = [
      "abv", "classic","ph"
    ]
    const filterMethods = [
      beers.filter((beer) => {
        return beer.abv > 6;
      }),
      beers.filter((beer) => {
        const beerYear = parseInt(beer.first_brewed.split("/")[1]);
        return beerYear < 2010;
      }),
      beers.filter((beer) => {
        return beer.ph > 4;
      }),
    ];



    if (event.target.value.includes(filterValues[0]) && isChecked) {
      const filteredBeers = filterMethods[0];
      setFilteredArr(filteredBeers);
    } else if (event.target.value.includes(filterValues[1]) && isChecked) {
      const filteredBeers = filterMethods[1]
      setFilteredArr(filteredBeers);
    } else if (event.target.value.includes(filterValues[2]) && isChecked) {
      const filteredBeers = filterMethods[2]
      setFilteredArr(filteredBeers);
    }else {
      setFilteredArr(beers);
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav handleSearch={handleSearch} handleCheck={handleCheck} />
        <Routes>
          <Route path="/" element={<Main beers={filteredArr} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

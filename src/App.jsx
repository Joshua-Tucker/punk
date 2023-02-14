import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import beers from "./assets/punkData";
import Nav from "./Containers/Nav/Nav";
import Main from "./Containers/Main/Main";
import { useState } from "react";
import { buildQueries } from "@testing-library/react";

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
    // const filterMethods = [
    //   (beer => beer.abv > 6),
    //   (beer => parseInt(beer.first_brewed.split("/")[1])<2010),
    //   (beer => beer.ph > 4)
    // ]
    // const filteredArray= beers.filter((beer)=>{
    //   for (let i=0;i<filterMethods.length; i++){
    //     if(!filterMethods[i](beers)){
    //       return false
    //     }
    //   }
    //   return true
    // })
    // setFilteredArr(filteredArray)


    const filterMethods = [
      (beers.filter((beer) => {
        return beer.abv > 6;
  })
    ]
    
    if (event.target.value.includes("abv") && isChecked) {
      const filteredBeers = beers.filter((beer) => {
        return beer.abv > 6;
      });
      setFilteredArr(filteredBeers);
    } else if (event.target.value.includes("classic") && isChecked) {
      const filteredBeers = beers.filter((beer) => {
        const beerYear = parseInt(beer.first_brewed.split("/")[1]);
        return beerYear < 2010;

      });
      setFilteredArr(filteredBeers);
    } else if (event.target.value.includes("ph") && isChecked) {
      const filteredBeers = beers.filter((beer) => {
        return beer.ph > 4;
      });
      setFilteredArr(filteredBeers);
    } else {
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

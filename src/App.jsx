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
    console.log(searchTerm)
    setFilteredArr(filteredBeers);
  }


  return (
    <Router>
      <div className="App">
        <Nav handleSearch={handleSearch}/>
        <Routes>
          <Route 
          path="/" 
          element=
          {<Main beers={filteredArr} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;

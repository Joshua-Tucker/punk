import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Containers/Nav/Nav";
import Main from "./Containers/Main/Main";
import { useState, useEffect } from "react";

function App() {
  const [beersApiData, setBeersApiData] = useState([]);
  const [filteredArr, setFilteredArr] = useState(beersApiData);
  const [abvData, setAbvData] = useState(false);
  const [classicData, setClassicData] = useState(false);
  const [phData, setPhData] = useState(false);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeersApiData(data);
  };

  const getCheckBeers = async (checkbox) => {
    const url = `https://api.punkapi.com/v2/beers/`;
    let urlWithParams = url;
    if (checkbox !== "all") {
      urlWithParams += `?abv_gt=6`;
    } else {
      urlWithParams();
    }
    const res = await fetch(url);
    const data = await res.json();
    setBeersApiData(data);
  };

  const handleCheck = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      getCheckBeers(abvData);
    } else {
      getBeers();
    }
  };

  const handleAbv=(event)=>{
    setAbvData(event.target.value)
  }






  const getSearchBeers = async (searchTerm) => {
    const url = `https://api.punkapi.com/v2/beers/?beer_name=${searchTerm}`;
    const res = await fetch(url);
    const data = await res.json();
    setBeersApiData(data);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm) {
      getSearchBeers(searchTerm);
    } else {
      getBeers();
    }
  };

  useEffect(() => {
    getBeers(abvData, classicData, phData);
  }, [abvData, classicData, phData]);


  // const handleCheck = (event) => {
  //   const isChecked = event.target.checked;

  //   const filterValues = ["abv", "classic", "ph"];
  //   const filterMethods = [
  //     beersApiData.filter((beer) => {
  //       return beer.abv > 6;
  //     }),
  //     beersApiData.filter((beer) => {
  //       const beerYear = parseInt(beer.first_brewed.split("/")[1]);
  //       return beerYear < 2010;
  //     }),
  //     beersApiData.filter((beer) => {
  //       return beer.ph > 4;
  //     }),
  //   ];

  //   if (event.target.value.includes(filterValues[0]) && isChecked) {
  //     const filteredBeers = filterMethods[0];
  //     setFilteredArr(filteredBeers);
  //   } else if (event.target.value.includes(filterValues[1]) && isChecked) {
  //     const filteredBeers = filterMethods[1];
  //     setFilteredArr(filteredBeers);
  //   } else if (event.target.value.includes(filterValues[2]) && isChecked) {
  //     const filteredBeers = filterMethods[2];
  //     setFilteredArr(filteredBeers);
  //   } else {
  //     setFilteredArr(beersApiData);
  //   }
  // };
  // console.log(filteredArr);

  return (
    <Router>
      <div className="App">
        <Nav
          handleSearch={handleSearch}
          handleCheck={handleCheck}
          handleAbv={handleAbv}
        />
        <Routes>
          <Route path="/" element={<Main beersData={beersApiData} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// const handleSearch = (event) => {
//   const searchTerm = event.target.value.toLowerCase();
//   const filteredBeers = beersApiData.filter((beer) => {
//     if (beer.name.toLowerCase().includes(searchTerm)) {
//       return true;
//     }
//   });
//   console.log(searchTerm);
//   setFilteredArr(filteredBeers);
// };

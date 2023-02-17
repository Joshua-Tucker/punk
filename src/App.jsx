import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Containers/Nav/Nav";
import Main from "./Containers/Main/Main";
import { useState, useEffect } from "react";
import PageContainer from "./Containers/PageContainer/PageContainer";

function App() {
  const [beersApiData, setBeersApiData] = useState([]);
  const [abvData, setAbvData] = useState(false);
  const [classicData, setClassicData] = useState(false);
  const [phData, setPhData] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if (firstName && lastName) {
      event.target.reset();
      setUser({ firstName, lastName });
    }
  };

  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers";

    if (searchTerm || abvData || classicData || phData) {
      url += "?";
    }
    if (searchTerm) {
      url += `beer_name=${searchTerm}&`;
    }
    if (abvData) {
      url += "abv_gt=6.0&";
    }
    if (classicData) {
      url += "brewed_before=01-2010&";
    }
    const res = await fetch(url);
    let data = await res.json();
    if (phData) {
      data = data.filter((beer) => beer.ph > 4.0);
    }
    setBeersApiData(data);
  };

  const handleAbv = (event) => {
    setAbvData(event.target.checked);
  };
  const handleClassic = (event) => {
    setClassicData(event.target.checked);
  };
  const handlePh = (event) => {
    setPhData(event.target.checked);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    getBeers();
  }, [abvData, classicData, phData,searchTerm]);

  return (
    <Router>
      <div className="App">
        <Nav
          userName={`${user.firstName} ${user.lastName}`}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleAbv={handleAbv}
          handleClassic={handleClassic}
          handlePh={handlePh}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                beersData={beersApiData}
                userName={`${user.firstName} ${user.lastName}`}
              />
            }
          ></Route>
          <Route
            path={"/beer/:name"}
            element={<PageContainer beersData={beersApiData} />}
          ></Route>
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

// const getCheckBeers = async (checkbox) => {
//   const url = `https://api.punkapi.com/v2/beers/`;
//   let urlWithParams = url;
//   if (checkbox !== "all") {
//     urlWithParams += `?abv_gt=6`;
//   } else {
//     urlWithParams();
//   }
//   const res = await fetch(url);
//   const data = await res.json();
//   setBeersApiData(data);
// };

// const getSearchBeers = async (searchTerm) => {
//   const url = `https://api.punkapi.com/v2/beers/?beer_name=${searchTerm}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   setBeersApiData(data);
// };

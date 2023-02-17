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
  }, [abvData, classicData, phData, searchTerm]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>   
              <Nav
              userName={`${user.firstName} ${user.lastName}`}
              handleSubmit={handleSubmit}
              handleSearch={handleSearch}
              handleAbv={handleAbv}
              handleClassic={handleClassic}
              handlePh={handlePh}
            />
                <Main
                  beersData={beersApiData}
                  userName={`${user.firstName} ${user.lastName}`}
                />
             
              </>
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


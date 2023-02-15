import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import "./Main.scss"

const Main = ({ beersData, userName }) => {

  return (
    <div className="main-container">
      <div className="main-container__title">Hi {userName}, want to look at some beers?</div>
      <CardContainer beersData={beersData} />
    </div>
  );
};

export default Main;

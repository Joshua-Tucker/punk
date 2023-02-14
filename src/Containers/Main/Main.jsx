import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import "./Main.scss"

const Main = (props) => {
  const { beersData } = props;

  return (
    <div className="main-container">
      <div className="main-container__title">Is this working</div>
      <CardContainer beersData={beersData} />
    </div>
  );
};

export default Main;

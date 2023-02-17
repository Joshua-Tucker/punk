import React from "react";
import "./NavHome.scss";
import whiteCross from "../../assets/images/whiteCross.png";
import { Link } from "react-router-dom";

const NavHome = ({ toggleHome, userName }) => {
  return (
    <div className="nav-home">
      <div className="nav-home__content">
        <img
          src={whiteCross}
          alt="Close Menu"
          className="nav-home__cross"
          onClick={toggleHome}
        />
        <div className="nav-home__greeting-container">
          <h1 className="nav-home__greeting">Hey {userName}!</h1>
          <h3 className="nav-home__question">Where do you want to go?</h3>
        </div>
        <Link
          className="nav-home__item"
          style={{ textDecoration: "none" }}
          to="/"
          onClick={toggleHome}
        >
          <h3 className="nav-home__home">Home</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavHome;

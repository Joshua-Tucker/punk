import React from "react";
import Search from "../../Components/Search/Search";
import Checkbox from "../../Components/Checkbox/Checkbox";
import "./Nav.scss";
import HomeMenu from "../../assets/images/home.png";
import ProfileMenu from "../../assets/images/menu.png";


const Nav = ({handleSearch, handleCheck}) => {
 

      return (
        <div className="nav">
          <img src={HomeMenu} alt="home-menu"/>
          <div className="nav__content-container">
            <h1 className="nav__countdown">Countdown timer</h1>
          <Search className="nav__search" handleSearch={handleSearch}/>
          <Checkbox className="nav__check" handleCheck={handleCheck}/>

          </div>
          <img src={ProfileMenu} alt="profile-menu"/>

        </div>
      );
    };



export default Nav;

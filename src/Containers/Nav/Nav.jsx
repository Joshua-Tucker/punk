import React from "react";
import Search from "../../Components/Search/Search";
import Checkbox from "../../Components/Checkbox/Checkbox";
import "./Nav.scss";
import HomeMenuImage from "../../assets/images/home.png";
import ProfileMenuImage from "../../assets/images/menu.png";
import HomeMenu from "../../Components/NavHome/NavHome";
import ProfileMenu from "../../Components/ProfileMenu/ProfileMenu";


const Nav = ({handleSearch, handleCheck}) => {
 

      return (
        <div className="nav">
          <img src={HomeMenuImage} alt="home-menu"/>
          <div className="nav__content-container">
            <h1 className="nav__countdown">Countdown timer</h1>
          <Search className="nav__search" handleSearch={handleSearch}/>
          <Checkbox className="nav__check" handleCheck={handleCheck}/>

          </div>
          <img src={ProfileMenuImage} alt="profile-menu"/>

        </div>
      );
    };



export default Nav;

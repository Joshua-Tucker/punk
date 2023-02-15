import React from "react";
import Search from "../../Components/Search/Search";
import Checkbox from "../../Components/Checkbox/Checkbox";
import "./Nav.scss";
import HomeMenuImage from "../../assets/images/home.png";
import ProfileMenuImage from "../../assets/images/menu.png";
import HomeMenu from "../../Components/NavHome/NavHome";
import ProfileMenu from "../../Components/ProfileMenu/ProfileMenu";
import { useState } from "react";

const Nav = ({handleSearch, handleCheck, handleAbv, userName, handleSubmit}) => {
const [showSettings,setShowSettings] = useState(false)
  
  const toggleSettings = () => {
    setShowSettings(!showSettings)
  }
 

      return (
        <div className="nav">
          {showSettings && (
            <ProfileMenu username={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit}/>
          )}
          <img src={HomeMenuImage} alt="home-menu"/>
          <div className="nav__content-container">
            Countdown
          <Search className="nav__search" handleSearch={handleSearch}/>
          <Checkbox className="nav__check" handleCheck={handleCheck} handleAbv={handleAbv}/> 
          </div>
          <img src={ProfileMenuImage} alt="profile-menu" onClick={toggleSettings}/>

        </div>
      );
    };



export default Nav;

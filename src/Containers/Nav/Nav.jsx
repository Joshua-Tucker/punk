import React from "react";
import Search from "../../Components/Search/Search";
import Checkbox from "../../Components/Checkbox/Checkbox";
import "./Nav.scss";
import HomeMenuImage from "../../assets/images/home.png";
import ProfileMenuImage from "../../assets/images/menu.png";
import HomeMenu from "../../Components/NavHome/NavHome";
import ProfileMenu from "../../Components/ProfileMenu/ProfileMenu";
import { useState } from "react";

const Nav = ({
  handleSearch,
  handleClassic,
  handlePh,
  handleAbv,
  userName,
  handleSubmit,
}) => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="nav">
      {showProfile && (
        <ProfileMenu
          userName={userName}
          toggleProfile={toggleProfile}
          handleSubmit={handleSubmit}
        />
      )}
      <div className="nav__home-menu-container">
        <img className="nav__home-menu" src={HomeMenuImage} alt="home-menu" />
      </div>
      <div className="nav__content-container">
        
        <div className="nav__filter-container">
          <Search className="nav__search" handleSearch={handleSearch} />
          <Checkbox
            className="nav__check"
            handleAbv={handleAbv}
            handleClassic={handleClassic}
            handlePh={handlePh}           
          />
        </div>
      </div>
      <div className="nav__profile-menu-container">
        <img
          className="nav__profile-menu"
          src={ProfileMenuImage}
          alt="profile-menu"
          onClick={toggleProfile}
        />
      </div>
    </div>
  );
};

export default Nav;

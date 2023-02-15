import React from "react";
import "./ProfileMenu.scss";
import whiteCross from "../../assets/images/whiteCross.png";
import blankProfilePicture from "../../assets/images/blankProfilePicture.png"
import Button from "../Button/Button"

const ProfileMenu = ({ userName, toggleProfile, handleSubmit }) => {
  return (
    <div className="profile-menu">
      <div className="profile-menu__content">
        <img
          src={whiteCross}
          alt="Close menu"
          className="profile-menu__cross"
          onClick={toggleProfile}
        />
        <img
          src={blankProfilePicture}
          alt="profile"
          className="profile-menu__image"
        />
        <h2 className="profile-menu__title">{userName}</h2>
        <form className="profile-menu__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" className="profile-menu__input" />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" className="profile-menu__input" />
        <Button buttonText={"Save"}/>
        </form>
      </div>
    </div>
  );
};

export default ProfileMenu;

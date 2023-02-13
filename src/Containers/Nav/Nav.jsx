import React from "react";
import Search from "../../Components/Search/Search";
import Checkbox from "../../Components/Checkbox/Checkbox";
import "./Nav.scss";


const Nav = ({handleSearch, handleCheck}) => {
 

      return (
        <div className="nav-container">
          <Search handleSearch={handleSearch}/>
          <Checkbox handleCheck={handleCheck}/>

        </div>
      );
    };



export default Nav;

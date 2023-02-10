import React from "react";
import Search from "../../Components/Search/Search";
import Dropdown from "../../Components/Dropdown/Dropdown";

const Nav = (props) => {
  const {handleSearch} = props;
 

      return (
        <div>
          <Search handleSearch={handleSearch} />
          <Dropdown />
        </div>
      );
    };



export default Nav;

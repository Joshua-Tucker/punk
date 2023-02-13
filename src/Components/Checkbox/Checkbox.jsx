import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ handleCheck }) => {
  return (
    <div className="checkbox-container">
      <label htmlFor="checkBoxOne">High Abv</label>
      <input
        onChange={handleCheck}
        type="checkbox"
        id="checkBoxOne"
        name="checkBoxOne"
        value="abv"
      ></input>
      <label htmlFor="checkBoxTwo">Classic Range</label>
      <input
        onChange={handleCheck}
        type="checkbox"
        id="checkBoxTwo"
        name="checkBoxTwo"
        value="classic"
      ></input>
      <label htmlFor="checkBoxThree">Acidic </label>
      <input
        onChange={handleCheck}
        type="checkbox"
        id="checkBoxThree"
        name="checkBoxThree"
        value="ph"
      ></input>
    </div>
  );
};

export default Checkbox;

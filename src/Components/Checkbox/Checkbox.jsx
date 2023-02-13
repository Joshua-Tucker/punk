import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ handleCheck }) => {
  return (
    <div className="checkbox">
      <h3 className="checkbox__title">Or rather a selection?</h3>
      <label htmlFor="checkBoxOne" className="checkbox__one">
        High Abv 
      </label>
      <input
        onChange={handleCheck}
        className="checkbox__one"
        type="checkbox"
        id="checkBoxOne"
        name="checkBoxOne"
        value="abv"
      ></input>
      <label htmlFor="checkBoxTwo" className="checkbox__two">
        Classic Range
      </label>
      <input
        onChange={handleCheck}
        className="checkbox__two"
        type="checkbox"
        id="checkBoxTwo"
        name="checkBoxTwo"
        value="classic"
      ></input>
      <label htmlFor="checkBoxThree" className="checkbox__three">
        PH > 4%
      </label>
      <input
        onChange={handleCheck}
        className="checkbox__three"
        type="checkbox"
        id="checkBoxThree"
        name="checkBoxThree"
        value="ph"
      ></input>
    </div>
  );
};

export default Checkbox;

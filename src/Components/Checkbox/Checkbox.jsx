import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ handleAbv, handleClassic, handlePh}) => {
  return (
    <div className="checkbox">
      <h3 className="checkbox__title">Or rather a selection?</h3>
      <div className="checkbox__container">
        <label htmlFor="checkBoxOne" className="checkbox__one-label">
          High Abv
        </label>
        <input
          onChange={handleAbv}
          className="checkbox__one"
          type="checkbox"
          id="checkBoxOne"
          name="checkBoxOne"
          value="abv"
        ></input>
        <label htmlFor="checkBoxTwo" className="checkbox__two-label">
          Classic Range
        </label>
        <input
          onChange={handleClassic}
          className="checkbox__two"
          type="checkbox"
          id="checkBoxTwo"
          name="checkBoxTwo"
          value="classic"
        ></input>
        <label htmlFor="checkBoxThree" className="checkbox__three-label">
          PH {`>`} 4%
        </label>
        <input
          onChange={handlePh}
          className="checkbox__three"
          type="checkbox"
          id="checkBoxThree"
          name="checkBoxThree"
          value="ph"
        ></input>
  
      </div>
    </div>
  );
};

export default Checkbox;

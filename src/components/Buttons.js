import React from "react";
import "../css/buttons.scss";
const Buttons = (props) => {
  return (
    <button className="btn btn-primary" to={props.url}>
      {props.text}
    </button>
  );
};
export default Buttons;

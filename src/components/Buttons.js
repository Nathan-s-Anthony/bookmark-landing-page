import React from "react";
import "../css/buttons.scss";
const Buttons = (props) => {
  return (
    <button className={`${props.styleName}`} to={props.url}>
      {props.text}
    </button>
  );
};
export default Buttons;

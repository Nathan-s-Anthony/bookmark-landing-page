import React from "react";
import "../css/tabs.scss";
const Tab = ({ title, active, onClick }) => {
  return (
    <a className={`tab ${active ? "tab-active" : ""}`} onClick={onClick}>
      {title}
    </a>
  );
};
export default Tab;

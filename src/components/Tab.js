import React from "react";
import "../css/tabs.scss";
const Tab = ({ title, active, onClick, link }) => {
  return (
    <a
      herf={`${link}`}
      className={`tab ${active ? "tab-active" : ""}`}
      onClick={onClick}
      role="button"
    >
      {title}
    </a>
  );
};
export default Tab;

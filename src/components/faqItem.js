import React from "react";
import IconArrow from "../images/icon-arrow.svg";
import "../css/faq.scss";
const FaqItem = ({ title, active, onClick, link, content, activeContent }) => {
  return (
    <>
      <div
        className={`faq-dropdown-item ${active ? "active" : "inactive"}`}
        role="button"
        onClick={onClick}
        id={link}
      >
        <a>
          {title}
          <img src={IconArrow} alt="arrow" />
        </a>
      </div>
      <div
        className={`faq-dropdown-content    ${
          activeContent
            ? "faq-dropdown-content-active"
            : "faq-dropdown-content-inactive"
        }  
        }`}
      >
        {content}
      </div>
    </>
  );
};
export default FaqItem;
// const Tab = ({ title, active, onClick, link }) => {
//   return (
//     <a
//       herf={`${link}`}
//       className={`tab ${active ? "tab-active" : ""}`}
//       onClick={onClick}
//       role="button"
//     >
//       {title}
//     </a>
//   );
// };

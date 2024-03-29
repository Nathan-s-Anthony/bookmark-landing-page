import React from "react";
import "../css/faq.scss";
import FaqDropdown from "./faqDropDown";
const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-info">
        <h2>Frequently asked questions</h2>
        <p>
          Here are some our FAQ's. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <FaqDropdown />
    </div>
  );
};
export default Faq;

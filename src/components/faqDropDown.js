import React, { useState, useRef, useEffect } from "react";
import "../css/faqDropDown.scss";
import FaqItem from "./faqItem";
const FaqDropDown = () => {
  const [activeItem, setActiveItem] = useState(0);

  const [faqItems] = useState([
    {
      title: "What is a Bookmark?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem nunc, auctor ac nisl quis, eleifend molestie mi. Ut vel scelerisque nulla. Donec ipsum ex, finibus ac massa venenatis, suscipit tempor enim. Suspendisse potenti. Proin leo felis, convallis et dictum sit amet, porttitor lacinia turpis. In condimentum erat est, rutrum feugiat sapien vulputate sed. Nulla a interdum nunc.",
    },
    {
      title: "How can i request a new browser ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem nunc, auctor ac nisl quis, eleifend molestie mi. Ut vel scelerisque nulla. Donec ipsum ex, finibus ac massa venenatis, suscipit tempor enim. Suspendisse potenti. Proin leo felis, convallis et dictum sit amet, porttitor lacinia turpis. In condimentum erat est, rutrum feugiat sapien vulputate sed. Nulla a interdum nunc.",
    },
    {
      title: "Is there a mobile app?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem nunc, auctor ac nisl quis, eleifend molestie mi. Ut vel scelerisque nulla. Donec ipsum ex, finibus ac massa venenatis, suscipit tempor enim. Suspendisse potenti. Proin leo felis, convallis et dictum sit amet, porttitor lacinia turpis. In condimentum erat est, rutrum feugiat sapien vulputate sed. Nulla a interdum nunc.",
    },
    {
      title: "What about other chromium browsers?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem nunc, auctor ac nisl quis, eleifend molestie mi. Ut vel scelerisque nulla. Donec ipsum ex, finibus ac massa venenatis, suscipit tempor enim. Suspendisse potenti. Proin leo felis, convallis et dictum sit amet, porttitor lacinia turpis. In condimentum erat est, rutrum feugiat sapien vulputate sed. Nulla a interdum nunc.",
    },
  ]);
  const onItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="faq-dropdown">
        {faqItems.map((faqItem, index) => (
          <FaqItem
            activeContent={activeItem == index}
            active={activeItem === index}
            onClick={() => onItemClick(index)}
            key={index}
            title={faqItem.title}
            content={faqItem.content}
          />
        ))}
      </div>
    </>
  );
};
export default FaqDropDown;

import React from "react";
import { useState } from "react";
import Tab from "./Tab";
import Buttons from "./Buttons";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [tabs] = useState([
    {
      title: "Simple Bookmarking",
      heading: "Bookmark in one click",
      content:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: "/static/illustration-features-tab-1.svg",
    },
    {
      title: "Speedy Searching",
      heading: "Intelligent search",
      content:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: "/static/illustration-features-tab-2.svg",
    },
    {
      title: "Easy Sharing",
      heading: "Intelligent search",
      content:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at a the click of a button.",
      image: "/static/illustration-features-tab-3.svg",
    },
  ]);
  const onTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="graphic-2 "></div>
      <div className="tabs">
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              active={index === activeTab}
              onClick={() => onTabClick(index)}
            />
          ))}
        </div>

        <div className="tabs-content">
          <div className="tabs-info-img">
            <img src={tabs[activeTab].image} alt={tabs[activeTab].title} />
          </div>
          <div className="tabs-info-content">
            <h2>{tabs[activeTab].heading}</h2>
            <p>{tabs[activeTab].content}</p>
            <Buttons text="More Info" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabs;

import React from "react";
import { useState } from "react";
import Tab from "./Tab";
import Buttons from "./Buttons";
import IllustrationsTab1 from "../images/illustration-features-tab-1.svg";
import IllustrationsTab2 from "../images/illustration-features-tab-2.svg";
import IllustrationsTab3 from "../images/illustration-features-tab-3.svg";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [tabs] = useState([
    {
      id: "simpleBookmarking",
      title: "Simple Bookmarking",
      heading: "Bookmark in one click",
      content:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: IllustrationsTab1,
      url: "#simpleBookmarking",
    },
    {
      id: "speedySearch",
      title: "Speedy Searching",
      heading: "Intelligent search",
      content:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: IllustrationsTab2,
      url: "#speedySearch",
    },
    {
      id: "easySharing",
      title: "Easy Sharing",
      heading: "Intelligent search",
      content:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at a the click of a button.",
      image: IllustrationsTab3,
      url: "#easySharing",
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
              link={tab.url}
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
          <div className="tabs-info-content" id={tabs[activeTab].id}>
            <h2>{tabs[activeTab].heading}</h2>
            <p>{tabs[activeTab].content}</p>
            <Buttons text="More Info" styleName="btn-primary" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabs;

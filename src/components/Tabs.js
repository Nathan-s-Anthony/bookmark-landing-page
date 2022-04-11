import React from "react";
import { useState } from "react";
import Tab from "./Tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [tabs, setTabs] = useState([
    {
      title: "Simple Bookmarking",
      heading: "Bookmark in one click",
      content:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      title: "Speedy Searching",
      heading: "Intelligent search",
      content:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      title: "Easy Sharing",
      heading: "Intelligent search",
      content:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at a the click of a button.",
    },
  ]);
  const onTabClick = (index) => {
    setActiveTab(index);
  };
  return (
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
        <div className="tab-img">test</div>
        <div className="tab-info">
          <h2>{tabs[activeTab].heading}</h2>
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};
export default Tabs;

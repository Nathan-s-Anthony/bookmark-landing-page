import React from "react";
import Buttons from "./Buttons";
import "../css/extensions.scss";

const Extensions = () => {
  const browsers = [
    {
      name: "Chrome",
      title: "Add to Chrome",
      version: "Minimum version 62",
      image: "/static/logo-chrome.svg",
    },
    {
      name: "Firefox",
      title: "Add to Firefox",
      version: "Minimum version 55",
      image: "/static/logo-firefox.svg",
    },
    {
      name: "Opera",
      title: "Add to Opera",
      version: "Minimum version 46",
      image: "/static/logo-opera.svg",
    },
  ];

  return (
    <>
      <div className="extensions" id="extensions">
        <div className="extensions-info">
          <h2>Download the extension</h2>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </div>
      <div className="boxes">
        {browsers.map((browser) => (
          <div className="box" key={browser.name}>
            {" "}
            <div className="box-content">
              <img src={browser.image} alt={browser.name} />
              <h2>{browser.title}</h2> <p>{browser.version}</p>
            </div>
            <div className="box-button">
              <hr></hr>
              <Buttons text="Add & install Extension" styleName="btn-primary" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Extensions;

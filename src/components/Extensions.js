import React from "react";
import Buttons from "./Buttons";
import "../css/extensions.scss";
import LogoOpera from "../images/logo-opera.svg";
import LogoChrome from "../images/logo-chrome.svg";
import LogoFireFox from "../images/logo-firefox.svg";
import BgDots from "../images/bg-dots.svg";
const Extensions = () => {
  const browsers = [
    {
      name: "Chrome",
      title: "Add to Chrome",
      version: "Minimum version 62",
      image: LogoChrome,
    },
    {
      name: "Firefox",
      title: "Add to Firefox",
      version: "Minimum version 55",
      image: LogoOpera,
    },
    {
      name: "Opera",
      title: "Add to Opera",
      version: "Minimum version 46",
      image: LogoFireFox,
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
        {browsers.map((browser, index) => (
          <div className="box" key={browser.name}>
            {" "}
            <div className="box-content">
              <div className="tile-image">
                <img src={browser.image} alt={browser.title} key={index} />
              </div>
              <h2>{browser.title}</h2> <p>{browser.version}</p>
            </div>
            <div className="box-button">
              <img src={BgDots} alt="dots" />
              <Buttons text="Add & install Extension" styleName="btn-primary" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Extensions;

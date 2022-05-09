import React from "react";
import HeroIull from "../images/illustration-hero.svg";
import Button from "./Buttons";
const Hero = () => {
  return (
    <>
      <div className="graphic-1 "></div>
      <div className="hero-container">
        <div className="hero-img">
          <img src={HeroIull} alt="hero" />
        </div>
        <div className="hero-content">
          <h1>A simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. <br />
            Try it for free.
          </p>
          <div className="hero-buttons">
            <Button
              text="Get it on Chrome"
              to="#chrome"
              styleName="btn-primary"
            />
            <Button text="Get it on Firefox" styleName="btn-secondary" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;

import React from "react";
import { Link } from "gatsby";
import "../css/navbar.scss";
import HamburgerMenu from "../images/icon-hamburger.svg";
import Logo from "../images/logo-bookmark.svg";
import LogoWhite from "../images/logo-bookmark-white.svg";
import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import IconClose from "../images/icon-close.svg";
var window = require("global/window");
const Navbar = () => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMobileNav = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const links = [
    {
      id: 0,
      name: "Features",
      url: "#features",
    },
    {
      id: 1,
      name: "Pricing",
      url: "#pricing",
    },
    {
      id: 2,
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <header>
      <nav>
        <div className="navigation desktop">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <ul className="list">
            {links.map((link) => (
              <Link key={link.id} to={link.url}>
                {link.name}
              </Link>
            ))}
            <Buttons text="LOGIN" styleName="btn-secondary-nav" />
          </ul>

          {(toggleMenuMobile || screenWidth < 900) && (
            <ul
              className={
                toggleMenuMobile ? "list-mobile-active" : "list-mobile-inactive"
              }
            >
              <div className="navigation">
                <div className="logo">
                  {" "}
                  <img src={LogoWhite} alt="logo" />
                </div>
                <div className="hamburger-menu">
                  <img src={IconClose} onClick={toggleMobileNav} alt="Menu" />
                </div>
              </div>
              <div className="navigation-mobile">
                {links.map((link) => (
                  <Link key={link.id} to={link.url}>
                    {link.name}
                  </Link>
                ))}
                <Buttons text="LOGIN" styleName="btn-secondary-nav" />
              </div>
            </ul>
          )}

          <div className="hamburger-menu">
            <img src={HamburgerMenu} onClick={toggleMobileNav} alt="Menu" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

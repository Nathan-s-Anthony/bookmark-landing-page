import React from "react";
import { Link } from "gatsby";
import "../css/navbar.scss";
import HamburgerMenu from "../assets/icon-hamburger.svg";
import Logo from "../assets/logo-bookmark.svg";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCloseIcon, setToggleCloseIcon] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    setToggleCloseIcon(!toggleCloseIcon);
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
        <div className="navigation">
          <div className="logo">
            <Logo />
          </div>
          {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
              {links.map((link) => (
                <Link key={link.id} to={link.url}>
                  {link.name}
                </Link>
              ))}
            </ul>
          )}
          <div className="hamburger-menu">
            <HamburgerMenu onClick={toggleNav} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

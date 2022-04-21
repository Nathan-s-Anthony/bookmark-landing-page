import React from "react";
import Logo from "../assets/logo-bookmark.svg";
import { Link } from "gatsby";
import "../css/footer.scss";

const Footer = () => {
  const links = [
    {
      id: 0,
      name: "FEATURES",
      url: "#features",
    },
    {
      id: 1,
      name: "PRICING",
      url: "#pricing",
    },
    {
      id: 2,
      name: "CONTACT",
      url: "#contact",
    },
  ];
  const socials = [
    {
      name: "facebook",
      url: "https://www.facebook.com/",
      image: "/static/icon-facebook.svg",
    },
    {
      name: "twitter",
      url: "https://www.twitter.com/",
      image: "/static/icon-twitter.svg",
    },
  ];
  return (
    <nav>
      <div className="navigation-footer">
        <div className="navigation-footer-links">
          <div className="logo">
            <Logo />
          </div>
          <ul className="list">
            {links.map((link) => (
              <Link key={link.id} to={link.url}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="social-links">
          {socials.map((social) => (
            <Link key={social.name} to={social.url}>
              <img src={social.image} alt={social.name} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Footer;

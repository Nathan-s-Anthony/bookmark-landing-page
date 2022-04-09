import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";
import Hero from "./Hero";
import "../css/hero.scss";
import "../css/reset.scss";
import "../css/fonts.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Section>
        <Hero />
      </Section>
      <Footer />
    </>
  );
};
export default Layout;

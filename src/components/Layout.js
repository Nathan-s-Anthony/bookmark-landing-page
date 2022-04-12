import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";
import Features from "./Features";
import Extensions from "./Extensions";
import Tabs from "./Tabs";
import Hero from "./Hero";
import "../css/hero.scss";
import "../css/reset.scss";
import "../css/fonts.scss";
import "../css/features.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Section>
        <Hero />
      </Section>
      <Section>
        <Features />
        <Tabs />
      </Section>
      <Section>
        <Extensions />
      </Section>
      <Footer />
    </>
  );
};
export default Layout;

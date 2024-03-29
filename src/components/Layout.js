import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";
import Features from "./Features";
import Extensions from "./Extensions";
import Faq from "./faq";
import Tabs from "./Tabs";
import Hero from "./Hero";
import Signup from "./Signup";
import "../css/hero.scss";
import "../css/Reset.scss";
import "../css/fonts.scss";

import Seo from "../components/SEO";
const Layout = () => {
  return (
    <>
      <Seo
        description="Bookmark your favorite pages with our extension"
        lang="en"
        title="Bookmarker"
      />
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
      <Section>
        <Faq />
      </Section>
      <Section>
        <Signup />
      </Section>

      <Footer />
    </>
  );
};
export default Layout;

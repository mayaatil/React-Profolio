import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import AboutMe from "./AboutMe";
import "../assets/resume/maya resume 1_14_2022 (1).pdf";
import "../assets/images/maya-profile.jpg";

export default function Page(props) {
  return (
    <>
      <Header />
      <main>
        {props.children}
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";

// import CSSTransition from "react-transition-group/CSSTransition";
// import TransitionGroup from "react-transition-group/TransitionGroup";

import "./MainSection.css";

import NavList from "./NavList/NavList";
import Moon from "./Moon/Moon";
import SectionFooter from "./SectionFooter/SectionFooter";
import AboutMe from "./AboutMe/AboutMe";
import Contacts from "./Contacts/Contacts";

const MainSection = () => {
  return (
    <div className="main_section_wrapper">
      <NavList />
      <Routes>
        <Route path="/aboutUs" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <AboutMe />
      <Contacts /> */}
      <Moon />
      <SectionFooter />
    </div>
  );
};

export default MainSection;

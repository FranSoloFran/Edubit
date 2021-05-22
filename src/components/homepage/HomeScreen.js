import React from "react";
import { NavBarHome } from "./NavBar_Home";
import { BodyHome } from "./Body_Home";
import { FooterHome } from "./Footer_Home";

export const HomeScreen = () => {
  return (
    <div className="home__screen">
      <div className="home__main-content">
        <NavBarHome />
      </div>
      <div className="home__main-content-body">
        <BodyHome />
        <FooterHome />
      </div>
    </div>
  );
};

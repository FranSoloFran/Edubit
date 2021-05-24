import React from "react";
import { BodyLanding } from "./Body_Landing";

import { FooterHome } from "../homepage/Footer_Home";

export const LandingScreen = () => {
  return (
    <div className="landing__screen">
      <div className="landing__main-content-body">
        <BodyLanding />
        <FooterHome />
      </div>
    </div>
  );
};

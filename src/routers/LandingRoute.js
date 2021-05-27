import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import { LandingScreen } from "../components/landingpage/LadingScreen";
import { NavBarUser } from "../components/user/NavBar_User";
import { TradingScreen } from "../components/user/trading/TradingScreen";



export const LandingRoute = () => {
  return (
    <Route>
      <div className="user__main-content">
        <NavBarUser />
      </div>

      <div>
        <Switch>
          <Route exact path="/landingpage" component={LandingScreen} />
          <Route exact path="/landingpage/trading" component={TradingScreen} />
          <Redirect to="/landingpage" />
        </Switch>
      </div>
    </Route>
  );
};

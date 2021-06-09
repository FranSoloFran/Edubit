import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import { LandingScreen } from "../components/landingpage/LadingScreen";
import { NavBarUser } from "../components/user/NavBar_User";
import { TradingScreen } from "../components/user/trading/TradingScreen";
import { PortafolioHistory } from "../components/user/portafoliohistory/PortafolioHistory";
import { CursoBasico } from "../components/user/cursos/CursoBasico";
import { CursoIntermedio1 } from "../components/user/cursos/CursoIntermedio1";
import { CursoIntermedio2 } from "../components/user/cursos/CursoIntermedio2";
import { CursoAvanzado } from "../components/user/cursos/CursoAvanzado";
import { MisCursos } from "../components/user/cursos/MisCursos";
import { Cursos } from "../components/user/cursos/Cursos";



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
          <Route exact path="/landingpage/history" component={PortafolioHistory} />
          <Route exact path="/landingpage/cursoBasico" component={CursoBasico} />
          <Route exact path="/landingpage/cursoIntermedio1" component={CursoIntermedio1} />
          <Route exact path="/landingpage/cursoIntermedio2" component={CursoIntermedio2} />
          <Route exact path="/landingpage/cursoAvanzado" component={CursoAvanzado} />
          <Route exact path="/landingpage/misCursos" component={MisCursos} />
          <Route exact path="/landingpage/cursos" component={Cursos} />
          <Redirect to="/landingpage" />
        </Switch>
      </div>
    </Route>
  );
};

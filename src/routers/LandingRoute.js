import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import { LandingScreen } from "../components/landingpage/LadingScreen";
import { NavBarUser } from "../components/user/NavBar_User";
import { TradingScreen } from "../components/user/trading/TradingScreen";
import { PortafolioHistory } from "../components/user/portafoliohistory/PortafolioHistory";
import { CursoBasico } from "../components/user/cursos/basico/CursoBasico";
import { CursoIntermedio1 } from "../components/user/cursos/intermedio1/CursoIntermedio1";
import { CursoIntermedio2 } from "../components/user/cursos/intermedio2/CursoIntermedio2";
import { CursoAvanzado } from "../components/user/cursos/avanzado/CursoAvanzado";
import { MisCursos } from "../components/user/cursos/MisCursos";
import { Cursos } from "../components/user/cursos/Cursos";
import { CursoBasico_1 } from "../components/user/cursos/basico/CursoBasico_1";
import { CursoBasico_2 } from "../components/user/cursos/basico/CursoBasico_2";
import { CursoBasico_3 } from "../components/user/cursos/basico/CursoBasico_3";
import { CursoBasico_4 } from "../components/user/cursos/basico/CursoBasico_4";
import { CursoBasico_5 } from "../components/user/cursos/basico/CursoBasico_5";
import { CursoIntermedio1_1 } from "../components/user/cursos/intermedio1/CursoIntermedio1_1";
import { CursoIntermedio1_2 } from "../components/user/cursos/intermedio1/CursoIntermedio1_2";
import { CursoIntermedio1_3 } from "../components/user/cursos/intermedio1/CursoIntermedio1_3";
import { CursoIntermedio1_4 } from "../components/user/cursos/intermedio1/CursoIntermedio1_4";
import { CursoIntermedio1_5 } from "../components/user/cursos/intermedio1/CursoIntermedio1_5";
import { CursoIntermedio2_1 } from "../components/user/cursos/intermedio2/CursoIntermedio2_1";
import { CursoIntermedio2_2 } from "../components/user/cursos/intermedio2/CursoIntermedio2_2";
import { CursoIntermedio2_3 } from "../components/user/cursos/intermedio2/CursoIntermedio2_3";
import { CursoIntermedio2_4 } from "../components/user/cursos/intermedio2/CursoIntermedio2_4";
import { CursoAvanzado_1 } from "../components/user/cursos/avanzado/CursoAvanzado_1";
import { CursoAvanzado_2 } from "../components/user/cursos/avanzado/CursoAvanzado_2";
import { CursoAvanzado_3 } from "../components/user/cursos/avanzado/CursoAvanzado_3";
import { CursoAvanzado_4 } from "../components/user/cursos/avanzado/CursoAvanzado_4";



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
          <Route exact path="/landingpage/cursos/cursoBasico" component={CursoBasico} />
          <Route exact path="/landingpage/cursos/cursoIntermedio1" component={CursoIntermedio1} />
          <Route exact path="/landingpage/cursos/cursoIntermedio2" component={CursoIntermedio2} />
          <Route exact path="/landingpage/cursos/cursoAvanzado" component={CursoAvanzado} />
          <Route exact path="/landingpage/cursos/misCursos" component={MisCursos} />
          <Route exact path="/landingpage/cursos" component={Cursos} />
          <Route exact path="/landingpage/cursos/cursoBasico/1" component={CursoBasico_1} />
          <Route exact path="/landingpage/cursos/cursoBasico/2" component={CursoBasico_2} />
          <Route exact path="/landingpage/cursos/cursoBasico/3" component={CursoBasico_3} />
          <Route exact path="/landingpage/cursos/cursoBasico/4" component={CursoBasico_4} />
          <Route exact path="/landingpage/cursos/cursoBasico/5" component={CursoBasico_5} />
          <Route exact path="/landingpage/cursos/cursoIntermedio1/1" component={CursoIntermedio1_1} />
          <Route exact path="/landingpage/cursos/cursoIntermedio1/2" component={CursoIntermedio1_2} />
          <Route exact path="/landingpage/cursos/cursoIntermedio1/3" component={CursoIntermedio1_3} />
          <Route exact path="/landingpage/cursos/cursoIntermedio1/4" component={CursoIntermedio1_4} />
          <Route exact path="/landingpage/cursos/cursoIntermedio1/5" component={CursoIntermedio1_5} />
          <Route exact path="/landingpage/cursos/cursoIntermedio2/1" component={CursoIntermedio2_1} />
          <Route exact path="/landingpage/cursos/cursoIntermedio2/2" component={CursoIntermedio2_2} />
          <Route exact path="/landingpage/cursos/cursoIntermedio2/3" component={CursoIntermedio2_3} />
          <Route exact path="/landingpage/cursos/cursoIntermedio2/4" component={CursoIntermedio2_4} />
          <Route exact path="/landingpage/cursos/cursoAvanzado/1" component={CursoAvanzado_1} />
          <Route exact path="/landingpage/cursos/cursoAvanzado/2" component={CursoAvanzado_2} />
          <Route exact path="/landingpage/cursos/cursoAvanzado/3" component={CursoAvanzado_3} />
          <Route exact path="/landingpage/cursos/cursoAvanzado/4" component={CursoAvanzado_4} />
          <Redirect to="/landingpage" />
        </Switch>
      </div>
    </Route>
  );
};

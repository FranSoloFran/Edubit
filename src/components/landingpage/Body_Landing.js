import React from "react";
import { Link } from "react-router-dom";

///IMAGENES IMPORTADAS
import Sim from "../../assets/img/LandingPage_img1.jpg";
import Vid from "../../assets/img/LandingPage_img2.jpg";
// import Tex from "../../assets/img/LandingPage_img3.jpg";

export const BodyLanding = () => {
  return (
    <div className="landing_container">
      <p className="landing_main_title">Seleccione un módulo para comenzar</p>
      <div className="landing__container_modulos_edubit">
        <div className="landing__modulos_edubit">
          <Link to="/landingpage/trading">
            <div className="landing__img_modulos_edubit">
              <img src={Sim} alt="" />
            </div>
            <p className="landing_titles">Simulaciones de inversión</p>
          </Link>
        </div>
        <div className="landing__modulos_edubit">
          <Link to="/landingpage/cursoBasico">
            <div className="landing__img_modulos_edubit">
              <img src={Vid} alt="" />
            </div>
            <p className="landing_titles">Ver videos tutoriales</p>
          </Link>
        </div>
        {/* <div className="landing__modulos_edubit">
          <Link to="/landingpage">
            <div className="landing__img_modulos_edubit">
              <img src={Tex} alt="" />
            </div>
            <p className="landing_titles">Material de lectura</p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

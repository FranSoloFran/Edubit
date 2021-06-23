import React from "react";
import { Link } from "react-router-dom";

export const Cursos = () => {
  return (
    <div className="cursos__container">
      <div className="cursos__container_title">
        <h1>Cursos</h1>
      </div>
      <div className="cursosLista__container_cards">
        <div className="cursosLista__card">
          <h3>Criptomonedas 101 - Nivel Básico</h3>
          <br />
          <Link to="/landingpage/cursos/cursoBasico">
            <button className="cursosLista__button_masInfo">Ir al curso</button>
          </Link>
        </div>
        <div className="cursosLista__card">
          <h3>Criptomonedas 101 - Nivel Intermedio 1</h3>
          <br />
          <Link to="/landingpage/cursos/cursoIntermedio1">
            <button className="cursosLista__button_masInfo">Ir al curso</button>
          </Link>{" "}
        </div>
        <div className="cursosLista__card">
          <h3>Criptomonedas 101 - Nivel Intermedio 2</h3>
          <br />
          <Link to="/landingpage/cursos/cursoIntermedio2">
            <button className="cursosLista__button_masInfo">Ir al curso</button>
          </Link>{" "}
        </div>
        <div className="cursosLista__card">
          <h3>Criptomonedas 101 - Avanzado</h3>
          <br />
          <Link to="/landingpage/cursos/cursoAvanzado">
            <button className="cursosLista__button_masInfo">Ir al curso</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

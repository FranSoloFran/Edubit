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
          <h3>Curso Básico</h3>
          <br />
          <Link to="CursoBasico">
            <button className="cursosLista__button_masInfo">Ir al curso</button>
          </Link>
        </div>
        <div className="cursosLista__card">
          <h3>Curso Intermedio 1</h3>
          <br />
          <Link to="CursoIntermedio1">
            <button className="cursosLista__button_masInfo">Ir al curso</button>
          </Link>{" "}
        </div>
        <div className="cursosLista__card">
          <h3>Curso Intermedio 2</h3>
          <br />
          <Link to="CursoIntermedio2">
            <button className="cursosLista__button_masInfo">Ir al curso</button>
          </Link>{" "}
        </div>
        <div className="cursosLista__card">
          <h3>Curso Avanzado</h3>
          <br />
          <Link to="CursoAvanzado">
            <button className="cursosLista__button_masInfo">Ir al curso</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

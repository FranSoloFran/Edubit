import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCourses } from "../../../reducers/coursesReducer";

export const Cursos = () => {

  const dispatch = useDispatch();
  const userCourses = useSelector((state) => state.courses.userCourses);

  useState(() => {
    dispatch(getCourses());
    console.log(userCourses)
  }, [userCourses]);

  return (
    <div className="cursos__container">
      <div className="cursos__container_title">
        <h1>Cursos</h1>
      </div>
      <div className="cursosLista__container_cards">
        {userCourses.length < 4 ?
          <>
            {!userCourses.find((item) => item.id === "1") ?
              <div className="cursosLista__card">
                <h3>Criptomonedas 101 - Nivel Básico</h3>
                <br />
                <div className="cursos__container_temario">
                  <ol>
                    <li><span>Criptomonedas: ¿Qué son?</span></li>
                    <li><span>Errores comunes al invertir en criptomonedas</span></li>
                    <li><span>Criptomonedas más populares</span></li>
                    <li><span>¿Qué es el Bitcoin?</span></li>
                  </ol>
                </div>
                <br />
                <Link to="/landingpage/cursos/cursoBasico">
                  <button className="cursosLista__button_color1">Ir al curso</button>
                </Link>
              </div> : null
            }
            {!userCourses.find((item) => item.id === "2") ?
              <div className="cursosLista__card">
                <h3>Criptomonedas 101 - Nivel Intermedio 1</h3>
                <br />
                <div className="cursos__container_temario">
                  <ol>
                    <li><span>¿Qué determina el precio de una criptomoneda?</span></li>
                    <li><span>Cuestiones legales de las criptomonedas</span></li>
                    <li><span>Cómo evitar inconvenientes legales</span></li>
                    <li><span>Comprar/vender criptomonedas en Argentina</span></li>
                  </ol>
                </div>
                <br />
                <Link to="/landingpage/cursos/cursoIntermedio1">
                  <button className="cursosLista__button_color1">Ir al curso</button>
                </Link>{" "}
              </div> : null
            }
            {!userCourses.find((item) => item.id === "3") ?
              <div className="cursosLista__card">
                <h3>Criptomonedas 101 - Nivel Intermedio 2</h3>
                <br />
                <div className="cursos__container_temario">
                  <ol>
                    <li><span>Tecnología y Seguridad de las criptomonedas</span></li>
                    <li><span>Cómo almacenar criptomonedas</span></li>
                    <li><span>Diferencias entre criptomoneda y token</span></li>
                    <br />
                  </ol>
                </div>
                <br />
                <Link to="/landingpage/cursos/cursoIntermedio2">
                  <button className="cursosLista__button_color1">Ir al curso</button>
                </Link>{" "}
              </div> : null
            }
            {!userCourses.find((item) => item.id === "4") ?
              <div className="cursosLista__card">
                <h3>Criptomonedas 101 - Avanzado</h3>
                <br />
                <div className="cursos__container_temario">
                  <ol>
                    <li><span>¿Cuáles son las estrategias de trading para distintos perfiles de inversión?</span></li>
                    <li><span>Acciones vs Criptomonedas</span></li>
                    <li><span>¿Cuáles son algunas técnicas para la compra/venta?</span></li>
                    <br />
                  </ol>
                </div>
                <br />
                <Link to="/landingpage/cursos/cursoAvanzado">
                  <button className="cursosLista__button_color1">Ir al curso</button>
                </Link>
              </div> : null
            }
          </>
          :
          <>
            <div className="cursosLista__container_sinCursos">
              <p className="cursos__paragraph_item f4"> Por el momento no tenemos más cursos disponibles para vos. ¡Regresa pronto que continuamente agregamos nuevos!</p>
            </div>
          </>
        }
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCourses } from "../../../reducers/coursesReducer";

export const MisCursos = () => {
  const dispatch = useDispatch();
  const userCourses = useSelector((state) => state.courses.userCourses);

  useState(() => {
    dispatch(getCourses());
  }, [userCourses]);


  return (
    <div className="cursos__container">
      <div className="cursos__container_title">
        <h1>Mis Cursos</h1>
      </div>
      <h2 className="cursos__title_item f4">
        En progreso
      </h2>
      <div className="cursosLista__container_cards">
        {userCourses.filter((item) => item.completed === false).length > 0 ? (
          userCourses.filter((item) => item.completed === false).map((course) => {
            return (
              <div className="cursosLista__card" key={course.id}>
                <h3>{course.name}</h3>
                <br />
                <div class="progress">
                  <span style={{ width: course.step === 1 ? "0%" : parseInt((course.step - 1) * 100 / course.steps) + "%" }}>{course.step !== 1 ? parseInt((course.step - 1) * 100 / course.steps) + "%" : null}</span>
                </div>
                <br />
                <div className="cursosLista__container_buttons_conCursos">
                  <Link to={`/landingpage/cursos/${course.route}`}>
                    <button className="cursosLista__button_color1">
                      Temario
                    </button>
                  </Link>
                  <Link to={`/landingpage/cursos/${course.route}/${course.step}`}>
                    <button className="cursosLista__button_color1">
                      Ir al curso
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="cursosLista__container_sinCursos">
            <p className="cursos__paragraph_item f4"> No está inscripto a ningún curso</p>
            <br />
            <Link to="/landingpage/cursos">
              <button className="cursosLista__button_color1" style={{ marginLeft: '80px' }}>
                Ver catálogo
              </button>
            </Link>
          </div>
        )}
      </div>
      <br />  <br />
      <h2 className="cursos__title_item f4">
        Completados
      </h2>
      <div className="cursosLista__container_cards">
        {userCourses.filter((item) => item.completed === true).length > 0 ? (
          userCourses.filter((item) => item.completed === true).map((course) => {
            return (
              <div className="cursosLista__card" key={course.id}>
                <h3>{course.name}</h3>
                <br />
                <Link to={`/landingpage/cursos/${course.route}`}>
                  <button className="cursosLista__button_color1">
                    Temario
                  </button>
                </Link>
              </div>
            );
          })
        ) : <p className="cursos__paragraph_item f4"> Todavía no has completado ningún curso</p>}
      </div>
    </div >
  );
};

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourses } from '../../../reducers/coursesReducer';

export const MisCursos = () => {

    const dispatch = useDispatch();
    const userCourses = useSelector(state => state.courses.userCourses);

    useState(() => {
        dispatch(getCourses());
    }, [userCourses]);

    return (

        <div className="cursos__container">
            <div className="cursos__container_title">
                <h1>Mis Cursos</h1>
            </div>
            <div className="cursosLista__container_cards">
                {userCourses.length > 0
                    ? userCourses.map((course => {
                        return (
                            <div className="cursosLista__card" key={course.id}>
                                <h3>{course.name}</h3>
                                <br />
                                <Link to={course.route}>
                                    <button className="cursosLista__button_masInfo">Ir al curso</button>
                                </Link>
                            </div>
                        )
                    }))
                    :
                    <div className="cursosLista__container_sinCursos">
                        <h3> No está inscripto a ningún curso</h3>
                        <br />
                        <Link to="Cursos">
                            <button className="cursosLista__button_masInfo">Ver cursos disponibles</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

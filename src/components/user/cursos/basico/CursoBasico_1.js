import React from 'react'
import { useHistory } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";

export const CursoBasico_1 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "1",
        name: "Criptomonedas 101 - Nivel Básico",
        route: "cursoBasico",
        steps: 5
    };

    const handleAdvanceStep = (e) => {
        e.preventDefault()
        dispatch(saveUserCourse(courseData, 2, false, false))
        history.push("/landingpage/cursos/cursoBasico/2")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Nivel Básico</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Introducción</li>
                    <li>Criptomonedas: ¿Qué son?</li>
                    <li>Errores comunes al invertir en criptomonedas</li>
                    <li>Criptomonedas más populares</li>
                    <li>¿Qué es el Bitcoin?</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Introducción</h2>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/OfP4ixQpwNg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <button className="cursos__button_navegacion_disabled" style={{ marginRight: "500px" }}>
                            Anterior
                        </button>
                        <button className="cursos__button_navegacion" onClick={(e) => handleAdvanceStep(e)}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

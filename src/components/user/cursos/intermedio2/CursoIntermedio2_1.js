import React from 'react'
import { useHistory } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";



export const CursoIntermedio2_1 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "3",
        name: "Criptomonedas 101 - Nivel Intermedio 2",
        route: "cursoIntermedio2",
        steps: 5
    };

    const handleAdvanceStep = (e) => {
        e.preventDefault()
        dispatch(saveUserCourse(courseData, 2, false, false))
        history.push("/landingpage/cursos/cursoIntermedio2/2")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Intermedio 2</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Introducción</li>
                    <li>Tecnología y Seguridad de las criptomonedas</li>
                    <li>Cómo almacenar criptomonedas</li>
                    <li>Diferencias entre criptomoneda y token</li>
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
                            src="https://www.youtube.com/embed/Yn8WGaO__ak "
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
        </div>
    )
}

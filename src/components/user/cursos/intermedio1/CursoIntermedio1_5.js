import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserCourse } from '../../../../reducers/coursesReducer';


export const CursoIntermedio1_5 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "2",
        name: "Criptomonedas 101 - Nivel Intermedio 1",
        route: "cursoIntermedio1",
        steps: 6
    };

    const handleAdvanceStep = (e) => {
        e.preventDefault()
        dispatch(saveUserCourse(courseData, 6, false, false))
        history.push("/landingpage/cursos/cursoIntermedio1/6")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Nivel Intermedio 1</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Introducción</li>
                    <li class="active">¿Qué determina el precio de una criptomoneda?</li>
                    <li class="active">Cuestiones legales de las criptomonedas</li>
                    <li class="active">Cómo evitar inconvenientes legales</li>
                    <li class="active">Comprar/vender criptomonedas en Argentina</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Comprar/vender criptomonedas en Argentina</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        En el siguiente link encontrarán una tabla comparativa con diferentes métodos para comprar criptomonedas en Argentina:
                    </p>
                    <a href="https://drive.google.com/file/d/1opKtpqQjQK6rhGl4ZWZw4XbABZEnFgfy/view" target="_blank" rel="noreferrer">
                        <p className="cursosContenido__paragraph_item f4">
                            Ir a la tabla
                        </p>
                    </a>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/LjmJkeQHoBc "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoIntermedio1/4">
                            <button className="cursos__button_navegacion" style={{ marginRight: "370px" }}>
                                Anterior
                            </button>
                        </Link>
                        <button className="cursos__button_navegacion" onClick={(e) => handleAdvanceStep(e)}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}

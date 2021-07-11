import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";



export const CursoBasico_2 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "1",
        name: "Criptomonedas 101 - Nivel Básico",
        route: "cursoBasico",
        steps: 6
    };

    const handleAdvanceStep = (e) => {
        e.preventDefault()
        dispatch(saveUserCourse(courseData, 3, false, false))
        history.push("/landingpage/cursos/cursoBasico/3")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Nivel Básico</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Introducción</li>
                    <li class="active">Criptomonedas: ¿Qué son?</li>
                    <li>Errores comunes al invertir en criptomonedas</li>
                    <li>Criptomonedas más populares</li>
                    <li>¿Qué es el Bitcoin?</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Criptomonedas: ¿Qué son?</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        Una criptomoneda es un activo digital que emplea un cifrado
                        criptográfico para garantizar su titularidad y asegurar la
                        integridad de las transacciones, y controlar la creación de
                        unidades adicionales, es decir, evitar que alguien pueda hacer
                        copias como haríamos, por ejemplo, con una foto. Estas monedas no
                        existen de forma física: se almacenan en una cartera digital.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/GkAQH-1ezEQ"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoBasico/1">
                            <button className="cursos__button_navegacion" style={{ marginRight: "500px" }}>
                                Anterior
                            </button>
                        </Link>
                        <button className="cursos__button_navegacion" onClick={(e) => handleAdvanceStep(e)}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

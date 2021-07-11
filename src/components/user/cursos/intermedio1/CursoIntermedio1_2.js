import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";


export const CursoIntermedio1_2 = () => {

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
        dispatch(saveUserCourse(courseData, 3, false, false))
        history.push("/landingpage/cursos/cursoIntermedio1/3")
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
                    <li>Cuestiones legales de las criptomonedas</li>
                    <li>Cómo evitar inconvenientes legales</li>
                    <li>Comprar/vender criptomonedas en Argentina.</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">¿Qué determina el precio de una criptomoneda?</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        El valor de las criptomonedas varía en función de la oferta, de la demanda, y del compromiso de los usuarios. Este valor se  forma  en  ausencia  de mecanismos  eficaces  que  impidan  su  manipulación,  como  los  presentes  en  los  mercados regulados  de  valores.  En  muchas  ocasiones  los  precios  se  forman  también  sin  información pública que los respalde.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/fWdzIB1wJf0  "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoIntermedio1/1">
                            <button className="cursos__button_navegacion" style={{ marginRight: "500px" }}>
                                Anterior
                            </button>
                        </Link>
                        <button className="cursos__button_navegacion" onClick={(e) => handleAdvanceStep(e)} >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";

export const CursoIntermedio1_4 = () => {

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
        dispatch(saveUserCourse(courseData, 5, false, false))
        history.push("/landingpage/cursos/cursoIntermedio1/5")
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
                    <li>Comprar/vender criptomonedas en Argentina.</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Cómo evitar inconvenientes legales</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        El fisco todavía no puede obtener información de portales que no están radicados en el país, y el caso más famoso sería el de Binance.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Para facilitar sus declaraciones o requerimientos de información que pudieran recibir, sugerimos que vayan registrando las operaciones que son o que puede llegar a ser visibles para los organismos de control y recaudación, esto es:
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        1. Todo lo que pase por una cuenta bancaria argentina
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        2. Todo lo que pase por una cuenta bancaria extranjera de un país que comparte información con Argentina
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        3. Todo lo que pase por un exchange regulado en Argentina como Buenbit, Ripio, Satoshitango, etc.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        4. Pagos a organismos que están o pueden estar obligados a brindar información a los organismos de control, como las obras sociales, compañías de seguros, etc.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/NGIT5lPDMk4 "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoIntermedio1/3">
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
        </div>
    )
}

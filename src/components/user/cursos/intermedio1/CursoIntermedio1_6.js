import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showOk } from '../../../../reducers/msgboxReducer';
import { saveUserCourse } from '../../../../reducers/coursesReducer';


export const CursoIntermedio1_6 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "2",
        name: "Criptomonedas 101 - Nivel Intermedio 1",
        route: "cursoIntermedio1",
        steps: 6
    };


    const handleApproveCourse = async (e) => {
        e.preventDefault();
        await dispatch(saveUserCourse(courseData, 6, true, false))
        dispatch(showOk("Fin de Curso", "¡Felicidades! Has aprobado Criptomonedas 101 - Intermedio 1"));
        history.push("/landingpage")
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
                    <li class="active">Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Evaluación</h2>
                    <br />
                    <div className="cursosContenido__container_evaluacion">
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>El precio de una criptomoneda es determinado por:</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-1">Oferta</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-2">Demanda</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-3">Compromiso de los usuarios</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-3">Todas las anteriores</label>
                            </div>
                        </div>
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>La AFIP no tiene información sobre los saldos de criptmonedas</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p2-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p2-1">Verdadero</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p2-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p2-2">Falso</label>
                            </div>
                        </div>
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>Uno de los puntos a tener en cuenta para evitar inconvenientes legales es:</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p3-1">A) Registrar todas las operaciones en cuentas nacionales, internacionales y sitios de exchange de todo el mundo</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-2">Registrar todas las operaciones de exchange regulados en Argentina</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p3-3">Convertir todos los saldos de criptomonedas a pesos</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p3-3">Contratar un buen abogado</label>
                            </div>
                        </div>
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>Algunos de los sitios para comprar criptomonedas en Argentina son:</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p4-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p4-1">Mercado Pago y Todo Pago</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p4-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p4-2">Binance, Ripio y MODO</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p4-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p4-3">Todos los bancos del pais</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p4-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p4-3">Ripio, SatoshiTango y Buenbit</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion" style={{ marginLeft: "200px" }}>
                        <Link to="/landingpage/cursos/cursoIntermedio1/5">
                            <button className="cursos__button_navegacion">
                                Anterior
                            </button>
                        </Link>
                        <button className="cursos__button_navegacion" onClick={(e) => handleApproveCourse(e)}>
                            Finalizar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

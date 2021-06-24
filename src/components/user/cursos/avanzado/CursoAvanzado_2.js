import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";


export const CursoAvanzado_2 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "4",
        name: "Criptomonedas 101 - Nivel Avanzado",
        route: "cursoAvanzado",
        steps: 4
    };

    const handleAdvanceStep = (e) => {
        e.preventDefault()
        dispatch(saveUserCourse(courseData, 3, false, false))
        history.push("/landingpage/cursos/cursoAvanzado/3")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Avanzado</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">¿Cuáles son las estrategias de trading para distintos perfiles de inversión?</li>
                    <li class="active">Acciones vs Criptomonedas</li>
                    <li>¿Cuáles son algunas técnicas para la compra/venta?</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Acciones vs Criptomonedas</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        Llegando a mitad de 2021, los inversores continúan preguntándose si conviene invertir en acciones o comprar criptomonedas. La decisión estará según las características de cada activo que más se acople al perfil de inversor.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        En primer lugar, las acciones tienen una histórica trayectoria que permite conocer cómo evolucionarán en el futuro. A su vez, al tratarse de empresas, dependen de la economía real y su situación. Por otro lado, la mayoría reparte dividendos de manera frecuente y todas están reguladas por una entidad estatal que protege al inversor.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Asimismo, las criptomonedas tienen un potencial futuro por delante debido a su innovador funcionamiento y, al encontrarse en una etapa joven de crecimiento, la posible ganancia es mayor, a cambio de una volatilidad superior.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Sin embargo, lo ideal es tener una cartera de inversión diversificada, compuesta por varios activos, no solo acciones y criptomonedas, sino también bonos, fondos comunes de inversión, materias primas y demás. La cantidad de cada uno dependerá, nuevamente, del perfil de inversor personal.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/WRgbtNM6ho8  "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoAvanzado/1">
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

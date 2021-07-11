import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserCourse } from '../../../../reducers/coursesReducer';


export const CursoIntermedio2_4 = () => {
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
        dispatch(saveUserCourse(courseData, 5, false, false))
        history.push("/landingpage/cursos/cursoIntermedio2/5")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Intermedio 2</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Introducción</li>
                    <li class="active">Tecnología y Seguridad de las criptomonedas</li>
                    <li class="active">Cómo almacenar criptomonedas</li>
                    <li class="active">Diferencias entre criptomoneda y token</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Diferencias entre criptomoneda y token?</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        Los tokens son activos digitales que se pueden usar dentro del ecosistema de un proyecto determinado.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        La principal distinción entre tokens y criptomonedas es que las primeras requieren otra plataforma blockchain (no propia) para funcionar. Ethereum es la plataforma más común para crear tokens, principalmente debido a su función de contratos inteligentes. Los tokens creados en la blockchain de Ethereum generalmente se conocen como tokens ERC-20, como por ejemplo Tether.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        El propósito de los tokens también es diferente al de las criptomonedas, aunque también se pueden usar como medio de pago. Por ejemplo, muchos tokens se crean para usarse dentro de aplicaciones descentralizadas (DApps) y sus redes. Estos se denominan "tokens de utilidad". Su intención principal es otorgarle al titular acceso al proyecto, como con el BAT (Basic Attention Token). El BAT es un token ERC-20 (lo que significa que su plataforma blockchain es Ethereum) hecho para mejorar la publicidad digital. Los anunciantes compran anuncios con tokens BAT, que luego se distribuyen entre los editores y los usuarios del navegador como compensación por los anuncios de alojamiento y la visualización, respectivamente.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/IblhK1osjOo "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoIntermedio2/3">
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

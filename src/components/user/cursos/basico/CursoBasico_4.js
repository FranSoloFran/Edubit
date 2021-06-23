import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";

export const CursoBasico_4 = () => {

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
        dispatch(saveUserCourse(courseData, 5, false, false))
        history.push("/landingpage/cursos/cursoBasico/5")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Nivel Básico</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Criptomonedas: ¿Qué son?</li>
                    <li class="active">Errores comunes al invertir en criptomonedas</li>
                    <li class="active">Criptomonedas más populares</li>
                    <li class="active">¿Qué es el Bitcoin?</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">¿Qué es el Bitcoin?</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        Bitcoin es una moneda virtual o un medio de intercambio electrónico que sirve para adquirir productos y servicios como cualquier otra moneda. Pero esta moneda es descentralizada, es decir que no existe una autoridad o ente de control que sea responsable de su emisión y registro de sus movimientos. Consiste en una clave criptográfica que se asocia a un monedero virtual, el cual descuenta y recibe pagos. Paso para usarlo:
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Paso para usarlo:
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        1) Adquirir un monedero
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Se debe contar con un sistema para almacenar y operar bitcoin, llamado monedero electrónico, el cual contiene pares de llaves criptográficas, es decir, una clave pública y otra privada.                     </p>
                    <p className="cursosContenido__subtitle_item f4">
                        2) Descargar la aplicación
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Los monederos pueden ser utilizados desde computadores o dispositivos móviles siempre y cuando se cuente con la aplicación que posee bitcoin para realizar las operaciones.                     </p>
                    <p className="cursosContenido__subtitle_item f4">
                        3) Realizar transacciones
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Usted puede realizar transacciones con otras personas que tengan monederos virtuales.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/KlzzlQBDBfI  "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoBasico/3">
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

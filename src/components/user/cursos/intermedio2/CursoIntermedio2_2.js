import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";

export const CursoIntermedio2_2 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "3",
        name: "Criptomonedas 101 - Nivel Intermedio 2",
        route: "cursoIntermedio2",
        steps: 4
    };

    const handleAdvanceStep = (e) => {
        e.preventDefault()
        dispatch(saveUserCourse(courseData, 3, false, false))
        history.push("/landingpage/cursos/cursoIntermedio2/3")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Intermedio 2</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Tecnología y Seguridad de las criptomonedas</li>
                    <li class="active">Cómo almacenar criptomonedas</li>
                    <li>Diferencias entre criptomoneda y token</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Cómo almacenar criptomonedas</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        Un monedero digital o wallet es, en realidad, un software o aplicación donde es posible almacenar, enviar y recibir criptomonedas. Lo cierto es que a diferencia de un monedero de dinero físico, lo que realmente se almacena en los wallets o monederos digitales son las claves que nos dan la propiedad y derecho sobre las criptomonedas, y nos permiten operar con ellas. Dicho de otra forma, basta con conocer las claves para poder transferir las criptomonedas, y la pérdida o robo de las claves puede suponer la pérdida de las criptomonedas, sin posibilidad de recuperarlas.                     </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Hay dos tipos de monederos: existen los calientes y los fríos. La diferencia entre ambos es que los primeros están conectados a internet, y los segundos no. Así, dentro de los monederos calientes encontramos los monederos web, los monederos móviles y los monederos de escritorio, este último, solo en el caso de que el ordenador esté conectado a internet. Por el contrario, dentro de los monederos fríos existen los monederos hardware y los monederos de papel, que es simplemente la impresión en papel de la clave privada.

                        Estos servicios de custodia no están regulados ni supervisados.                     </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/PIWLBCBNWRY  "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoIntermedio2/1">
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

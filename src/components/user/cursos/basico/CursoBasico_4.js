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
        steps: 6
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
                    <li class="active">Introducción</li>
                    <li class="active">Criptomonedas: ¿Qué son?</li>
                    <li class="active">Errores comunes al invertir en criptomonedas</li>
                    <li class="active">Criptomonedas más populares</li>
                    <li>¿Qué es el Bitcoin?</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Criptomonedas más populares</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        ¿Cuántas criptomonedas existen? Más de 2000 y subiendo. Cada semana se crea alguna nueva divisa virtual en un proceso que se denomina ICO y que más adelante resumiremos.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Las monedas virtuales más populares ahora mismo son las siguientes:
                    </p>
                    <ul>
                        <li className="cursosContenido__paragraph_item f4">Bitcoin</li>
                        <li className="cursosContenido__paragraph_item f4">Litecoin</li>
                        <li className="cursosContenido__paragraph_item f4">Nxt</li>
                        <li className="cursosContenido__paragraph_item f4">Ethereum</li>
                        <li className="cursosContenido__paragraph_item f4">Bitcoincash</li>
                        <li className="cursosContenido__paragraph_item f4">Tron</li>
                        <li className="cursosContenido__paragraph_item f4">Ripple </li>
                        <li className="cursosContenido__paragraph_item f4" Dash ></li>
                        <li className="cursosContenido__paragraph_item f4">Iota </li>
                        <li className="cursosContenido__paragraph_item f4">Monero </li>
                        <li className="cursosContenido__paragraph_item f4">Zcash </li>
                        <li className="cursosContenido__paragraph_item f4" Cardano ></li>
                        <li className="cursosContenido__paragraph_item f4">Stellar </li>
                        <li className="cursosContenido__paragraph_item f4">Nem </li>
                        <li className="cursosContenido__paragraph_item f4">Neo </li>
                    </ul>
                    <p className="cursosContenido__paragraph_item f4">
                        El número de monedas virtuales existentes es mucho más amplio y sigue creciendo cada día. Para consultar las criptomonedas legales puedes consultar páginas con más de 800 monedas virtuales y su correspondiente cotización como: World Coin Index y CoinMarketCap.En ambos lugares podrás consultar un listado con las divisas virtuales más importantes y además ver la cotización de estas monedas virtuales.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/KlzzlQBDBfI"
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

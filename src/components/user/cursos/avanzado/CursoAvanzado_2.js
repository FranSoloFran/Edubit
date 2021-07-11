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
        steps: 5
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
                    <li class="active">Introducción</li>
                    <li class="active">Estrategias de trading</li>
                    <li>Acciones vs Criptomonedas</li>
                    <li>¿Cuáles son algunas técnicas para la compra/venta?</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">¿Cuáles son las estrategias de trading para distintos perfiles de inversión?</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        Podemos definir una estrategia de trading como un plan exhaustivo para todas tus operaciones relativas a dicha actividad. Es un marco de referencia que creas como guía para todas tus iniciativas de trading.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Un plan de trading también puede ayudar a mitigar el riesgo financiero, dado que elimina un montón de decisiones innecesarias. Aunque disponer de una estrategia de trading no resulta obligatorio para llevar a cabo dicha actividad, en ocasiones puede resultar vital. Si en el mercado ocurre algo inesperado (y sin duda acabará ocurriendo), es tu plan de trading el que debe determinar tu reacción –y no tus emociones. En otras palabras, tener un plan de trading en marcha te preparará para los posibles desenlaces. Evitando que tomes decisiones precipitadas e impulsivas que, a menudo, conducen a grandes pérdidas financieras.
                    </p>
                    <p className="cursosContenido__title_item f4">
                        Estrategias de trading activas
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Las estrategias activas requieren más tiempo y atención. Las denominamos activas porque conllevan un monitoreo constante y una gestión de portafolio frecuente.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Day trading
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        El day trading es posiblemente la estrategia de trading activo más conocida. Es un error muy común pensar que todos los traders activos son, por definición, day traders -ya que no es cierto.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        El day trading consiste en entrar y salir de posiciones durante el mismo día. Así, el objetivo de los "day traders" (traders diarios) es capitalizar los movimientos intradía del precio -es decir, aquellos que se producen durante el transcurso de un día de trading.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Swing trading
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        El swing trading es un tipo de estrategia de trading a más largo plazo, que implica mantener posiciones durante más de un día -aunque habitualmente, sin exceder el plazo de unas pocas semanas o un mes. En cierto sentido, el swing trading se sitúa en un punto intermedio entre el day trading y el trading de tendencia (trend trading).
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Los swing traders, por lo general, intentan beneficiarse de las olas de volatilidad que se desarrollan a lo largo de varios días o semanas. Los swing traders pueden utilizar una combinación de factores técnicos y fundamentales para formular sus ideas de trades. Evidentemente, los cambios a un nivel fundamental pueden tardar más en producirse, y ahí es donde entra en juego el análisis fundamental. No obstante, patrones gráficos e indicadores técnicos también pueden jugar un papel destacado en una estrategia de swing trading.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Trading de tendencia
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        A veces también conocido como trading de posición, el trading de tendencia es una estrategia que implica mantener posiciones durante un período de tiempo más largo, generalmente al menos unos pocos meses. Como su nombre lo sugiere, los traders de tendencias intentan aprovechar las tendencias direccionales. Los traders de tendencias pueden ingresar en una posición larga en una tendencia alcista y en una posición corta en una tendencia bajista.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Scalping
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        El scalping es una de las estrategias de trading más rápidas que existen. Los scalprs no intentan aprovechar los grandes movimientos o las tendencias prolongadas. Es una estrategia que se centra en explotar pequeños movimientos una y otra vez. Por ejemplo, sacar provecho de los diferenciales de oferta y demanda, brechas en la liquidez u otras ineficiencias en el mercado.
                    </p>
                    <p className="cursosContenido__title_item f4">
                        Estrategias de inversión pasivas
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Las estrategias de inversión pasiva permiten un enfoque más directo, donde la gestión del portafolio requiere menos tiempo y atención. Si bien existen diferencias entre las estrategias de trading y de inversión, el trading en última instancia significa comprar y vender activos con la esperanza de obtener ganancias.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Comprar y hacer "hold"
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        "Comprar y hacer hold" es una estrategia de inversión pasiva en la que los trader compran un activo con la intención de mantenerlo durante mucho tiempo, independientemente de las fluctuaciones del mercado.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Esta estrategia generalmente se usa en portafolios de inversión a largo plazo, donde la idea es simplemente ingresar al mercado sin tener en cuenta el tiempo. La idea detrás de esta estrategia es que en un período de tiempo suficientemente largo, el tiempo o el precio de entrada no importará mucho.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Inversión en índices
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Por lo general, la inversión indexada significa comprar ETFs e índices en los mercados tradicionales. Sin embargo, este tipo de producto también está disponible en los mercados de criptomonedas. Tanto en exchanges centralizados de criptomonedas como dentro del movimiento de Finanzas descentralizadas (DeFi).
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        La idea detrás de un índice criptográfico es tomar una canasta de activos criptográficos y crear un token que rastree su rendimiento combinado. Esta canasta puede estar compuesta por monedas de un sector similar, como monedas de privacidad o tokens de utilidad. O bien, podría ser algo completamente diferente, siempre que tenga un precio confiable. Como te imaginas, la mayoría de estos tokens dependen en gran medida de los oráculos blockchain.
                    </p>
                    <p className="cursosContenido__title_item f4">
                        Conclusión
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Diseñar una estrategia de trading cripto que se adapte a tus objetivos financieros y estilo de personalidad no es una tarea fácil. Revisamos algunas de las estrategias de trading de criptomonedas más comunes, por lo que es de esperar que puedas descubrir cuál te conviene más.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Para saber qué funciona realmente y qué no, debes seguir y seguir cada estrategia de trading, sin romper las reglas que establezcas. También es útil crear un diario u hoja de operaciones para que puedas analizar el rendimiento de cada estrategia.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Pero vale la pena señalar que no tienes que seguir las mismas estrategias para siempre. Con suficientes datos y registros de trading, deberías poder ajustar y adaptar tus métodos. En otras palabras, tus estrategias de trading deben evolucionar constantemente a medida que adquieres experiencia de trading.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        También puede ser beneficioso asignar diferentes partes de tu portafolio a diferentes estrategias. De esta forma, puedes realizar un seguimiento del rendimiento individual de cada estrategia mientras ejerces una gestión de riesgos adecuada.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/IblhK1osjOo  "
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

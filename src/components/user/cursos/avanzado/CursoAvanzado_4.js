import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserCourse } from '../../../../reducers/coursesReducer';

export const CursoAvanzado_4 = () => {

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
        dispatch(saveUserCourse(courseData, 5, false, false))
        history.push("/landingpage/cursos/cursoAvanzado/5")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Avanzado</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Introducción</li>
                    <li class="active">¿Cuáles son las estrategias de trading para distintos perfiles de inversión?</li>
                    <li class="active">Acciones vs Criptomonedas</li>
                    <li class="active">¿Cuáles son algunas técnicas para la compra/venta?</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">¿Cuáles son algunas técnicas para la compra/venta?</h2>
                    <br />
                    <p className="cursosContenido__subtitle_item f4">
                        Estrategias de inversión: vamos a aclarar algo
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Cualquier inversor de acciones o en bienes raíces no harán inversiones cuando se les ocurra. Ellos saben que este es un paso riesgoso que no debe dejarse al azar. Antes de invertir en algún negocio es necesario comprender y establecer cuáles son los objetivos de inversión cómo se logrará alcanzarlos.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Hay que tener una idea aproximada de cuáles serán las ganancias que se aspiran conseguir y el tiempo por el cual estará activa la inversión.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Esta es la misma mentalidad que debe tener un inversor en criptomonedas. Veamos cuáles son los dos tipos principales de estrategias de inversión en el mundo de las criptos.
                    </p>
                    <p className="cursosContenido__title_item f4">
                        Inversión a largo plazo en criptomonedas
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Esta es la inversión que se realiza en una cripto cuando esperamos que su precio aumente con el tiempo. Eso suena bastante sencillo. En este caso estamos hablando de una inversión la cual se deberá mantener por 6 meses a 1 año. Pero eso depende de cada quien ya que hay personas que mantienen una inversión por 5 a 10 años. La inversión se puede realizar por etapas o de una sola vez.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Estrategia de inversión a largo plazo
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Debemos tener claro cuáles son los objetivos de inversión antes de invertir cualquier cantidad:
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Venderás cuando la cripto agarre cierto precio o después de cierto tiempo?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Venderás por partes en distintos tiempos o todo de una vez
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Estás dispuesto a cambiar tu visión largoplacista por una inversión a corto plazo? Por ejemplo, si cambian las estrategias de juego o se aplican nuevas leyes que pudieran afectar las condiciones económicas y precios a largo plazo de tu inversión es probable que debas reconsiderar vender antes.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Es conveniente que debas investigar un poco para que decidas cuáles criptomonedas son las más convenientes o las mejores para invertir a largo plazo. Es bueno que compruebes los siguientes ítems:
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Tienen un equipo sólido de desarrolladores  y fundadores?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Es la tecnología de la cripto mejor que la de sus competidores?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Qué tan buena es su hoja  o plan de ruta?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Están resolviendo problemáticas del mundo real?
                    </p>

                    <p className="cursosContenido__paragraph_item f4">
                        Si en verdad tienes confianza en la cripto que estás invirtiendo debes mantener la calma y conservar tu inversión, incluso cuando la tendencia de los precios es a la baja. Esto es importante, ya que muchos inversores han “vendido en pánico” y perdieron dinero. Luego solo queda el arrepentimiento.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Razones para realizar inversiones a largo plazo
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Vas a estar más tranquilo sin tener que estar pendiente de las fluctuaciones diarias del mercado. Menos estrés es más salud.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Estás convencido de que las criptomonedas darán mejores ganancias en el largo plazo.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Eres de los que apuesta de que las criptos son el futuro de la economía.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Esto puede sonar un poco a “esperanza” pero lo cierto es que son razones válidas para que cada quien apueste a las criptomonedas en el largo plazo.
                    </p>
                    <p className="cursosContenido__title_item f4">
                        Inversión en criptomonedas a corto plazo
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        ¿Qué tan corta es una inversión cripto a corto plazo? Debemos recordar que estas son inversiones que se realizan en lapsos de tiempo cortos con la esperanza de tener rápidas ganancias. Estos periodos pueden ser tan cortos como segundos, minutos, días, semanas o incluso algunos meses.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        ¿Cómo funcionan las inversiones de criptomonedas a corto plazo?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Al igual que con las inversiones de criptos a largo plazo, debes tener objetivos claros para hacer tu inversión. Debes preguntarte:
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Cuánta pérdida estás dispuesto a aceptar? Esto te ayudará a controlar las pérdidas si el precio de la criptomoneda cae de forma repentina.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Cuáles son los beneficios que esperas obtener de esta inversión? Esto te dará una idea del precio al que debes comprar/vender la cripto.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Tienes la paciencia y el tiempo disponible para seguir y estudiar los subes y bajas del mercado de las criptomonedas y las noticias relacionadas?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Tienes la capacidad de realizar análisis técnicos del mercado de criptomonedas? Esto es muy importante así que es mejor que aprendas antes de hacer inversiones.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -¿Es mejor tu estrategia cortoplacista, es decir te dará mejores dividendos, que si invirtieras a largo plazo?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Es importante investigar cuál es la mejor criptomoneda para invertir en el corto plazo. Una guía muy sencilla que te puede dar una idea es que revises si tu cripto reúne estas condiciones para invertir en el corto plazo:
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Tiene alto volumen de operaciones, es decir, mucha gente la compra y la vende cada minuto.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Baja capitalización de mercado.
                    </p>

                    <p className="cursosContenido__paragraph_item f4">
                        -Son tendencia en las redes sociales y en las noticias.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Tiene una ICO o acaba de terminar su ICO. Lo mejor es obtenerlas a un precio bajo.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Estamos claros que el Ethereum y el Bitcoin se pueden negociar a corto plazo pero es bueno arriesgar alguna cantidad que “no te duela” en algunas criptos más nuevas.
                        Los inversores que se han arriesgado en criptomonedas recientes como Stellar, NEM, IOTA y NEO han logrado obtener enormes beneficios a corto plazo.
                    </p>

                    <p className="cursosContenido__paragraph_item f4">
                        Con las inversiones a corto plazo se cuenta con la ventaja de obtener mucha plata en poco tiempo. Sin embargo, esto puede ser un cuchillo de doble filo. Entre sus desventajas podemos nombrar:
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        Desventajas
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Requieren mucho esfuerzo y tiempo porque es necesario vigilar constantemente los precios y fluctuaciones del mercado.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Es una inversión con mayor riesgo y puede haber mayores pérdidas debido a que el precio puede bajar en poco tiempo
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Te puede afectar la salud ya que puede ser muy emocional  y estresante.                     </p>
                    <p className="cursosContenido__title_item f4">
                        ¿Cuál es la mejor estrategia?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Esta no es una respuesta exacta ya que todo depende de tu experiencia y objetivos en el mundo de las criptomonedas.

                        Si estás plenamente convencido de un proyecto entonces podemos recomendarte una inversión a largo plazo. Pero si ves que una cripto nueva está levantando mucha atención en internet entonces hacer una inversión riesgosa en el corto plazo podría ser una gran idea que te deje buenas ganancias.
                    </p>
                    <p className="cursosContenido__title_item f4">
                        Conclusiones
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Las criptomonedas tienen un potencial enorme pero no debes olvidar un gran detalle: se puede perder dinero. En este mundo de las criptos no hay nada seguro y nadie puede prever con seguridad lo que ocurrirá.

                        Existe una máxima que la mayoría de expertos en criptomonedas repiten: solo hay que invertir dinero que no tengas miedo de perder. Creemos que es bueno que la tengas siempre en mente.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/0Osd2sg1Thg  "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoAvanzado/3">
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

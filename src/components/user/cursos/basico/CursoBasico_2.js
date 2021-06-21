import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";



export const CursoBasico_2 = () => {

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
        dispatch(saveUserCourse(courseData, 3, false, false))
        history.push("/landingpage/cursos/cursoBasico/3")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Curso Básico</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Criptomonedas: ¿Qué son?</li>
                    <li class="active">Errores comunes al invertir en criptomonedas</li>
                    <li>Criptomonedas más populares</li>
                    <li>¿Qué es el Bitcoin?</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Errores comunes al invertir en criptomonedas</h2>
                    <br />
                    <p className="cursosContenido__subtitle_item f4">
                        ¿Cuáles son los errores que se deben evitar para invertir en Bitcoin?
                    </p>
                    <p className="cursosContenido__paragraph_subtitle_item">
                        No tener conocimientos sobre Bitcoin y el funcionamiento de criptomonedas
                    </p>
                    <p className="cursosContenido__paragraph_item">
                        Sin una formación sobre cómo funciona Bitcoin y el mundo de las criptomonedas en general se está expuesto a creer en todo lo que dicen los medios, sin tener capacidad para crearse un criterio propio.

                        En ocasiones se publican noticias negativas, como prohibiciones, controversias, etc. Es en este momento cuando muchos inversores entran en pánico y comienzan a vender. No obstante, si se tienen conocimientos sobre Bitcoin y criptomonedas, podrá saberse cómo le afecta realmente y hasta qué punto la noticia puede llegar a ser exagerada.

                        En otras palabras, se podrá invertir en Bitcoin con conocimiento de causa si se conocen las características de este activo. Saber si realmente es un buen o mal momento para comprar o vender, al margen de las opiniones ajenas.
                    </p>
                    <p className="cursosContenido__paragraph_subtitle_item">
                        Invertir en Bitcoin sin conocer el análisis técnico
                    </p>
                    <p className="cursosContenido__paragraph_item">
                        Además de tener conocimientos sobre cómo funciona la Blockchain (tecnología que le da soporte a Bitcoin), aspectos relacionados con la fiscalidad del Bitcoin (que pueden afectar a su cotización) y otros factores que nos ayudan a formarnos un criterio y no cometer errores para invertir en Bitcoin, no debemos olvidar que representa un mercado muy técnico, puesto que su cotización se mueve puramente por oferta y demanda: es difícil establecer un valor objetivo de Bitcoin.

                        Por tanto, es el análisis técnico el que nos indica del mejor modo cuáles son los puntos donde los operadores consideran que se encuentra a buen precio. En otras palabras, dónde actúa la demanda. Del mismo modo, es el propio análisis técnico el que muestra en puntos aparece la oferta.

                        En el gráfico de cotizaciones aparecen tendencias, soportes, resistencias y patrones que nos ayudan a interpretar las sensaciones del mercado (como un gran conjunto de compradores y vendedores) y hacia qué dirección apunta.

                        Lanzarse a invertir en Bitcoin sin conocer el análisis técnico puede llegar a ser una decisión suicida, un error grave. Esto se debe a que sus movimientos son potentes y, si no se tiene un mínimo conocimiento de qué está haciendo el precio, puede acarrear consecuencias negativas.
                    </p>
                    <p className="cursosContenido__paragraph_subtitle_item">
                        No tener estrategia y escoger el producto financiero inadecuado
                    </p>
                    <p className="cursosContenido__paragraph_item">
                        Existen diversos mecanismos para invertir en Bitcoin. Sin embargo, no todos ellos son aptos para desarrollar la misma estrategia.

                        Algunos instrumentos exigen aportar un mayor nivel de capital inicial, otros son productos apalancados (futuros, CFDs, etc.). Lo importante es tener presente el nivel de riesgo que se está dispuesto a asumir, determinar el horizonte temporal de la inversión y otros pormenores. En base a ello, se deberá escoger el vehículo adecuado para invertir en Bitcoin.

                        Por ejemplo, si lo que se pretende es comprar y mantener, es posible que el operador sienta preferencia por la adquisición de Bitcoins físicos. De esta forma no tendrá que preocuparse por el margen de garantía y los vaivenes que sufre este activo financiero en el corto plazo (incluso es posible promediar a la baja).

                        Por otra parte, Bitcoin no ofrece ni dividendos, intereses ni ningún otro tipo de renta. La única rentabilidad que se obtiene es la diferencia entre el precio de compra y el precio de venta. Por este motivo, es posible que se opte por una estrategia de trading a corto plazo y el operador se decante por derivados financieros (en este caso, promediar a la baja con instrumentos apalancados es un error grave).

                        En síntesis, otro de los errores que se deben evitar para invertir en Bitcoin es carecer de una estrategia. En base a ella, se podrá escoger el producto financiero más idóneo.

                        Recordemos que, sin una estrategia, estamos a merced de los movimientos del mercado. Y en un mercado financiero tan agresivo como Bitcoin, puede suponer pérdidas severas. En este sentido, cambiar de estrategia una vez se haya iniciado la inversión también es uno de los errores que se deben evitar a toda costa.
                    </p>
                    <p className="cursosContenido__paragraph_subtitle_item">
                        Operar sin incluir Stop Loss
                    </p>
                    <p className="cursosContenido__paragraph_item">
                        La orden Stop Loss es una herramienta que debieran utilizar todos los operadores que operan con productos apalancados (aunque, sorprendentemente, no sea así). Se trata de asegurar la operación, limitando la pérdida en caso de que el mercado no evolucione tal y como teníamos previsto.

                        Es un mecanismo de defensa, el cual protege nuestro capital y es de suma importancia en un mercado tan volátil como es Bitcoin. Un movimiento en contra puede provocar una pérdida severa y con la orden de Stop Loss evita este escenario.

                        Simplemente se trata de, al abrir una posición, dejar establecida una orden de cierre cuando el precio alcance un determinado nivel que suponga una pérdida; pero que también suponga un punto de inflexión, en el cual se admite que nuestra estrategia no ha sido válida, se asume esa pérdida controlada y el operador está dispuesto para continuar con otras posiciones.

                        Quizá, no incluir el Stop Loss a la hora de invertir en Bitcoin sea el más grave error, puesto que es una protección contra otro tipo de errores que se puedan cometer.
                    </p>
                    <p className="cursosContenido__paragraph_subtitle_item">
                        Operar con dinero que se pueda necesitar
                    </p>
                    <p className="cursosContenido__paragraph_item">
                        La literatura sobre finanzas e inversión está plagada de ejemplos sobre grandes operadores que se vieron en la necesidad de deshacer su inversión, justo en el peor momento, por operar con fondos que necesitaban para otros fines.

                        Incluso se puede estar muy bien posicionado en Bitcoin y tener una estrategia sólida. Pero si llegamos a vernos en la necesidad de retirar el capital invertido, dejando de lado todo el potencial que podemos conseguir, es posible que la inversión pase de ser exitosa a desastrosa.
                    </p>
                    <p className="cursosContenido__paragraph_subtitle_item">
                        Perseguir las ganancias rápidas
                    </p>
                    <p className="cursosContenido__paragraph_item">
                        En toda inversión se debe ser paciente. Pero a la hora de invertir en activos financieros tan rápidos y violentos en el corto plazo como Bitcoin, con mayor motivo.

                        Tal y como se ha expuesto, Bitcoin es un valor que responde a los caprichos de la oferta y la demanda, puesto que es difícil realizar una valoración objetiva del mismo. Este hecho provoca que los movimientos puedan parecer caóticos a priori. No obstante, si se mantiene la paciencia ante las caídas incoherentes del día a día, al final se obtendrán resultados.

                        Recordemos que Bitcoin es un valor refugio (o así está considerado). Es un activo comparable con el oro porque es escaso (sólo es posible minar 21 millones de Bitcoins), no le afecta la inflación, no es una moneda que dependa de un gobierno o banco central, etc.

                        Este tipo de similitudes hacen que se le llame a Bitcoin el “oro digital” o el “oro 2.0”. De esta manera, Bitcoin es un activo que funciona bien a cualquier temporalidad, pero perseguir ganancias rápidas puede hacernos cometer errores relacionados con la gestión de riesgo y sobreapalancamiento.

                        Asimismo, otro de los errores que se deben evitar para invertir en Bitcoin, sobre todo cuando se realiza un trading a corto plazo, es no vender cuando nuestro análisis y estrategia nos dice que debemos hacerlo. Este tipo de error está muy relacionado con la necesidad de obtener ganancias rápidas y no ser capaces de cortar rápidamente las pérdidas. Además, debemos tener en cuenta qué plataforma financiera elegimos a la hora de operar con bitcoins y otras criptomonedas.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/3UvIrt-rDxo"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/N8yV5QGB3pc"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoBasico/1">
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

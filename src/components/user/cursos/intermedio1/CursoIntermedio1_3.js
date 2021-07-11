import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";

export const CursoIntermedio1_3 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "2",
        name: "Criptomonedas 101 - Nivel Intermedio 1",
        route: "Criptomonedas 101 - Nivel Intermedio 1",
        steps: 5
    };

    const handleAdvanceStep = (e) => {
        e.preventDefault()
        dispatch(saveUserCourse(courseData, 4, false, false))
        history.push("/landingpage/cursos/cursoIntermedio1/4")
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
                    <li>Cómo evitar inconvenientes legales</li>
                    <li>Comprar/vender criptomonedas en Argentina.</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Cuestiones legales de las criptomonedas</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        Es una buena ocasión para recordar que una de las premisas fundacionales de Bitcoin es la de poder realizar pagos entre dos partes directamente, sin necesidad de intervención de entidades centralizadas (léase bancos y gobiernos).

                        Muchos ven en Bitcoin algo revolucionario, algunos incluso hablan de separación del dinero y el Estado. Pero claro, esto no le hace ni un poquito de gracia a los bancos, ni a los gobiernos, ni a los organismos supranacionales que se encargan de esas cuestiones.

                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        En Argentina, hay una larga «tradición» de tener dinero y no declararlo e incluso de realizar todo tipo de transacciones comerciales sin tampoco declararlas a ningún organismos estatal. Esto sucede a la vista del Gobierno (sea el que sea), por ejemplo, el mercado del dólar blue, el ilegal, florece tranquilamente en todos lados, con la tácita autorización las autoridades. Ojo, en todos lados se cuecen habas, no se crean que esto pasa sólo en Argentina, eh.

                        No vemos que vaya a resultar muy diferente la cosa con las criptomonedas. Cada ciudadana/o decidirá si declarar o no y si hacer «visibles» o no sus operaciones.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        ¿Qué información tienen los organismos estatales?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        La primera norma que trató este tema fue en 2014 y fue emitida por la UIF (Unidad de Información Financiera, es un organismo encargado de prevenir el lavado de dinero) mediante la resolución 300/14 que determinó que ciertos sujetos obligados (incluyendo entre otros, bancos, remesadoras de fondos, agentes del mercado de valores, asegurados, emisoras de tarjetas de crédito, escribanos) deben informar al organismo todas las transacciones que involucren monedas virtuales.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Por otra parte, AFIP mediante la resolución 4614/2019 obliga a las agencias de cambio del país a informar una serie de datos de los usuarios dentro de los cuales incluye saldos en criptomonedas, cantidades de operaciones e ingresos y egresos.  Esto nos da a entender, que desde 2019 el fisco tiene en cuenta estas situaciones dentro de sus fuentes de datos para realizar controles a los contribuyentes. Es importante mencionar que la normativa solo llega a exchanges nacionales, es decir, aquellos que tengan un número de CUIT y estén inscriptos como contribuyentes (Ejemplos de ello serían Buenbit o Ripio). En este caso, si la casa de cambio no está radicada en Argentina no tendría la obligación de cumplir con estos requisitos.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        A modo de resumen, el fisco todavía no puede obtener información de portales que no están radicados en el país, y el caso más famoso sería el de Binance
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        A su vez, el BCRA hace unos días, instó a los bancos que le briden información sobre sus clientes que realizan operaciones con Bitcoin y otras criptomonedas o que posean cuentas en esos activos. ¿Y que podría pasar? Una alternativa seria que se pida identificar personas que realizan transferencias a cuentas pertenecientes a las casas de cambio virtuales, pero no hay nada oficial ni publicado. Sin embargo, debemos aclarar que ya estaban presentes en la normativa del Banco Central, por ejemplo, en la Comunicación A7030, la cual fue sancionada en mayo de 2020 y modificada en diversas oportunidades y es la que fijó las duras restricciones para el acceso a los dólares por parte de los importadores.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Podemos observar que la información de este tipo de activos es muy complicada de obtener y que los organismos oficiales todavía están ideando normativa para poder obtenerla. En Argentina recién estamos empezando a entender el fenómeno y aún no hay tanto nivel de detalle en la temática.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Según la información filtrada, la asociación de bancos ADEBA le pide a los bancos asociados que le manden al BCRA un correo electrónico (a una dirección específica) brindando «información que permita identificar a los clientes que posean cuentas para tenencia de criptoactivos o que hayan declarado o se tenga conocimiento que realizan cooperaciones de compra y/o venta y/o gestión de pagos mediante/de criptoactivos«.

                        En ese mensaje hay una hoja de cálculo en la que piden completar CUIT, Razón Social, Nº de cuenta, Domicilio, Firmante y autorizados de los clientes a informar.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/LHRC5UIBo5Q  "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoIntermedio1/2">
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

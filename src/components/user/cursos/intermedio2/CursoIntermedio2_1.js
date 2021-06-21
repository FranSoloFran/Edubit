import React from 'react'
import { useHistory } from "react-router-dom";
import { saveUserCourse } from "../../../../reducers/coursesReducer";
import { useDispatch } from "react-redux";



export const CursoIntermedio2_1 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "3",
        name: "Criptomonedas 101 - Nivel Intermedio 1",
        route: "cursoIntermedio2",
        steps: 4
    };

    const handleAdvanceStep = (e) => {
        e.preventDefault()
        dispatch(saveUserCourse(courseData, 2, false, false))
        history.push("/landingpage/cursos/cursoIntermedio2/2")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Curso Intermedio 2</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Tecnología y Seguridad de las criptomonedas</li>
                    <li>Cómo almacenar criptomonedas</li>
                    <li>Diferencias entre criptomoneda y token</li>
                    <li>Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Tecnología y Seguridad de las criptomonedas ¿Qué es blockchain?</h2>
                    <br />
                    <p className="cursosContenido__paragraph_item f4">
                        La cadena de bloques, más conocida por el término en inglés blockchain, es un registro único, consensuado y distribuido en varios nodos de una red. En el caso de las criptomonedas, podemos pensarlo como el libro contable donde se registra cada una de las transacciones.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Su funcionamiento puede resultar complejo de entender si profundizamos en los detalles internos de su implementación, pero la idea básica es sencilla de seguir.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        En cada bloque se almacena:
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Una cantidad de registros o transacciones válidas,
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Fnformación referente a ese bloque
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        -Su vinculación con el bloque anterior y el bloque siguiente a través del hash de cada bloque: un código único que sería como la huella digital del bloque.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Por lo tanto, cada bloque tiene un lugar específico e inamovible dentro de la cadena, ya que cada bloque contiene información del hash del bloque anterior. La cadena completa se guarda en cada nodo de la red que conforma la blockchain, por lo que se almacena una copia exacta de la cadena en todos los participantes de la red.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        A medida que se crean nuevos registros, estos son primeramente verificados y validados por los nodos de la red y luego añadidos a un nuevo bloque que se enlaza a la cadena.
                    </p>
                    <p className="cursosContenido__subtitle_item f4">
                        ¿Por qué blockchain es tan segura?
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Al ser una tecnología distribuida, donde cada nodo de la red almacena una copia exacta de la cadena, se garantiza la disponibilidad de la información en todo momento. En caso de que un atacante quisiera provocar una denegación de servicio, debería anular todos los nodos de la red, ya que basta con que al menos uno esté operativo para que la información esté disponible.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Por otro lado, al ser un registro consensuado, donde todos los nodos contienen la misma información, resulta casi imposible alterar la misma, asegurando su integridad. Si un atacante quisiera modificar la información en la cadena de bloques, debería modificar la cadena completa en al menos el 51% de los nodos.
                        La tecnología de blockchain nos permite almacenar información que jamás se podrá perder, modificar o eliminar
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Por último, dado que cada bloque está matemáticamente vinculado al bloque siguiente, una vez que se añade uno nuevo a la cadena, el mismo se vuelve inalterable. Si un bloque se modifica su relación con la cadena se rompe. Es decir, que toda la información registrada en los bloques es inmutable y perpetua.

                        De esta forma la tecnología de blockchain nos permite almacenar información que jamás se podrá perder, modificar o eliminar.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        Además, cada nodo de la red utiliza certificados y firmas digitales para verificar la información y validar las transacciones y los datos almacenados en la blockchain, lo que permite asegurar la autenticidad de dicha información.

                        De esta forma, podemos pensar en blockchain como un escribano. Un medio para certificar y validar cualquier tipo de información. Un registro confiable, descentralizado, resistente a la manipulación de datos, y donde queda todo registrado.
                    </p>
                    <p className="cursosContenido__paragraph_item f4">
                        En la actualidad estamos acostumbrados a los modelos centralizados. Le damos toda nuestra información a empresas como Google o Facebook para que la administren, mandamos todos nuestros mensajes a través de los servidores de Telegram o WhatsApp para que se ocupen de enviarlos o gastamos fortunas en escribanos e instituciones para que certifiquen y guarden nuestras escrituras o documentos importantes.

                        En blockchain los datos están distribuidos en todos los nodos de la red. Al no haber un nodo central, todos participan por igual, almacenando y validando toda la información. Se trata de una herramienta muy potente para comunicarnos y almacenar información de forma confiable; un modelo descentralizado donde la información es nuestra, ya que no dependemos de una compañía que brinde el servicio.
                    </p>
                    <br />
                    <div className="cursosContenido__text_video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/Yn8WGaO__ak "
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"></iframe>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <button className="cursos__button_navegacion_disabled" style={{ marginRight: "500px" }}>
                            Anterior
                        </button>
                        <button className="cursos__button_navegacion" onClick={(e) => handleAdvanceStep(e)}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

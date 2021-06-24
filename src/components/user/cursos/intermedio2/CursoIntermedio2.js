import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import { useDispatch, useSelector } from "react-redux";
import { saveUserCourse, getCourses } from "../../../../reducers/coursesReducer";
import { showOk } from "../../../../reducers/msgboxReducer";
import { Link } from "react-router-dom";

export const CursoIntermedio2 = () => {
  let slides = [
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/Yn8WGaO__ak"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/PIWLBCBNWRY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/IblhK1osjOo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
  ];

  const dispatch = useDispatch();
  const [enrollButton, setEnrollButton] = useState(true);
  const userCourses = useSelector((state) => state.courses.userCourses);
  const [finishedCourse, setFinishedCourse] = useState(false);
  const courseData = {
    id: "3",
    name: "Criptomonedas 101 - Nivel Intermedio 2",
    route: "cursoIntermedio2",
    steps: 4
  };

  useState(() => {
    dispatch(getCourses());
    if (userCourses.find((course) => course.id === courseData.id)) {
      setEnrollButton(false);
      const index = userCourses.findIndex((course) => course.id === courseData.id)
      if (userCourses[index].completed) {
        setFinishedCourse(true);
      }
    }
  }, [userCourses]);

  const handleCourseEnroll = () => {
    setEnrollButton(!enrollButton);
    if (!enrollButton) {
      dispatch(saveUserCourse(courseData, 1, false, true));
      dispatch(showOk("Criptomonedas 101 Intermedio 2", "Has abandonado el curso"));
    } else {
      dispatch(saveUserCourse(courseData, 1, false, false));
      dispatch(showOk("Criptomonedas 101 Intermedio 2", "Te has inscripto al curso"));
    }
  };

  return (
    <div className="cursos__container">
      <div className="cursos__carousel">
        <br /> <br /> <br /> <br /> <br />
        <Carousel slides={slides} autoplay={false} interval={3000} />
        <div className="cursos__container_title">
          {finishedCourse ? <h1>Criptomonedas 101 - Intermedio 2: Completado</h1> : <h1>Criptomonedas 101 - Intermedio 2 </h1>}

          {enrollButton ? (
            <button
              className="cursos__button_inscribir"
              onClick={handleCourseEnroll}
            >
              Inscribirme
            </button>
          ) : (
            <>
              {!finishedCourse ?
                <>
                  <Link to="/landingpage/cursos/cursoIntermedio2/1">
                    <button className="cursos__button_inscribir">
                      Ir al contenido
                    </button>
                  </Link>
                  <button
                    className="cursos__button_abandonar"
                    onClick={handleCourseEnroll}
                  >
                    Abandonar
                  </button>
                </>
                :
                null}

            </>
          )}
        </div>
        <div className="cursos__container_item">
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">
              Tecnología y Seguridad de las criptomonedas ¿Qué es blockchain?
            </h2>
            <p className="cursos__paragraph_item f4">
              La cadena de bloques, más conocida por el término en inglés
              blockchain, es un registro único, consensuado y distribuido en
              varios nodos de una red. En el caso de las criptomonedas, podemos
              pensarlo como el libro contable donde se registra cada una de las
              transacciones. Su funcionamiento puede resultar complejo de
              entender si profundizamos en los detalles internos de su
              implementación, pero la idea básica es sencilla de seguir.
            </p>
          </div>
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Yn8WGaO__ak"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
        <div className="cursos__container_item">
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PIWLBCBNWRY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">
              Cómo almacenar criptomonedas
            </h2>
            <p className="cursos__paragraph_item f4">
              Un monedero digital o wallet es, en realidad, un software o
              aplicación donde es posible almacenar, enviar y recibir
              criptomonedas. Lo cierto es que a diferencia de un monedero de
              dinero físico, lo que realmente se almacena en los wallets o
              monederos digitales son las claves que nos dan la propiedad y
              derecho sobre las criptomonedas, y nos permiten operar con ellas.
              Dicho de otra forma, basta con conocer las claves para poder
              transferir las criptomonedas, y la pérdida o robo de las claves
              puede suponer la pérdida de las criptomonedas, sin posibilidad de
              recuperarlas.
            </p>
          </div>
        </div>
        <div className="cursos__container_item">
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">
              Diferencias entre criptomoneda y token
            </h2>
            <p className="cursos__paragraph_item f4">
              Los tokens son activos digitales que se pueden usar dentro del
              ecosistema de un proyecto determinado. La principal distinción
              entre tokens y criptomonedas es que las primeras requieren otra
              plataforma blockchain (no propia) para funcionar. Ethereum es la
              plataforma más común para crear tokens, principalmente debido a su
              función de contratos inteligentes. Los tokens creados en la
              blockchain de Ethereum generalmente se conocen como tokens ERC-20,
              como por ejemplo Tether.
            </p>
          </div>
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IblhK1osjOo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

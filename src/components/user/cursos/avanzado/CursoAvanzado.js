import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import { useDispatch, useSelector } from "react-redux";
import { saveUserCourse, getCourses } from "../../../../reducers/coursesReducer";
import { showOk } from "../../../../reducers/msgboxReducer";
import { Link } from "react-router-dom";

export const CursoAvanzado = () => {
  let slides = [
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/MX6pqwZ7LHQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/WRgbtNM6ho8"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/0Osd2sg1Thg"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
  ];

  const dispatch = useDispatch();
  const [enrollButton, setEnrollButton] = useState(true);
  const [finishedCourse, setFinishedCourse] = useState(false);
  const userCourses = useSelector((state) => state.courses.userCourses);
  const courseData = {
    id: "4",
    name: "Curso Avanzado",
    route: "cursoAvanzado",
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
      dispatch(showOk(courseData.name, "Has abandonado el curso"));
    } else {
      dispatch(saveUserCourse(courseData, 1, false, false));
      dispatch(showOk(courseData.name, "Te has inscripto al curso"));
    }
  };

  return (
    <div className="cursos__container">
      <div className="cursos__carousel">
        <br /> <br /> <br /> <br /> <br />
        <Carousel slides={slides} autoplay={false} interval={3000} />
        <div className="cursos__container_title">
          {finishedCourse ? <h1>Curso Avanzado: Completado</h1> : <h1>Curso Avanzado: </h1>}

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
                  <Link to="/landingpage/cursos/cursoBasico/1">
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
              ¿Cuáles son las estrategias de trading para distintos perfiles de
              inversión?
            </h2>
            <p className="cursos__paragraph_item f4">
              Podemos definir una estrategia de trading como un plan exhaustivo
              para todas tus operaciones relativas a dicha actividad. Es un
              marco de referencia que creas como guía para todas tus iniciativas
              de trading
            </p>
          </div>
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MX6pqwZ7LHQ"
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
              src="https://www.youtube.com/embed/WRgbtNM6ho8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">Acciones vs Criptomonedas</h2>
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
              ¿Cuáles son algunas técnicas para la compra/venta?
            </h2>
            <p className="cursos__paragraph_item f4">
              Cualquier inversor de acciones o en bienes raíces no harán
              inversiones cuando se les ocurra. Ellos saben que este es un paso
              riesgoso que no debe dejarse al azar. Antes de invertir en algún
              negocio es necesario comprender y establecer cuáles son los
              objetivos de inversión cómo se logrará alcanzarlos.
            </p>
          </div>
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0Osd2sg1Thg"
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

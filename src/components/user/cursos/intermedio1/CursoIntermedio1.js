import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import { useDispatch, useSelector } from "react-redux";
import { showOk } from "../../../../reducers/msgboxReducer";
import { Link } from "react-router-dom";
import { getCourses, saveUserCourse } from "../../../../reducers/coursesReducer";

export const CursoIntermedio1 = () => {
  let slides = [
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/fWdzIB1wJf0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/LHRC5UIBo5Q"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/NGIT5lPDMk4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/LjmJkeQHoBc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
  ];

  const dispatch = useDispatch();
  const [enrollButton, setEnrollButton] = useState(true);
  const [finishedCourse, setFinishedCourse] = useState(false);
  const [actualStep, setActualStep] = useState(1);
  const userCourses = useSelector((state) => state.courses.userCourses);

  const courseData = {
    id: "2",
    name: "Criptomonedas 101 - Nivel Intermedio 1",
    route: "cursoIntermedio1",
    steps: 6
  };

  useState(() => {
    dispatch(getCourses());
    if (userCourses.find((course) => course.id === courseData.id)) {
      setEnrollButton(false);
      const index = userCourses.findIndex((course) => course.id === courseData.id)
      if (userCourses[index].completed) {
        setFinishedCourse(true);
      }
      else {
        setActualStep(userCourses[index].step)
      }
    }
  }, [userCourses]);

  const handleCourseEnroll = () => {
    setEnrollButton(!enrollButton);
    if (!enrollButton) {
      dispatch(saveUserCourse(courseData, 1, false, true));
      dispatch(showOk("Criptomonedas 101 Intermedio 1", "Has abandonado el curso"));
    } else {
      dispatch(saveUserCourse(courseData, 1, false, false));
      dispatch(showOk("Criptomonedas 101 Intermedio 1", "Te has inscripto al curso"));
    }
  };

  return (
    <div className="cursos__container">
      <div className="cursos__carousel">
        <br /> <br /> <br /> <br /> <br />
        <Carousel slides={slides} autoplay={false} interval={3000} />
        <div className="cursos__container_title">
          {finishedCourse ? <h1>Criptomonedas 101 - Intermedio 1: Completado</h1> : <h1>Criptomonedas 101 - Intermedio 1: </h1>}

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
                  <Link to={`/landingpage/cursos/cursoIntermedio1/${actualStep}`}>
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
              ¿Qué determina el precio de una criptomoneda?
            </h2>
            <p className="cursos__paragraph_item f4">
              El valor de las criptomonedas varía en función de la oferta, de la
              demanda, y del compromiso de los usuarios. Este valor se forma en
              ausencia de mecanismos eficaces que impidan su manipulación, como
              los presentes en los mercados regulados de valores. En muchas
              ocasiones los precios se forman también sin información pública
              que los respalde.
            </p>
          </div>
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fWdzIB1wJf0"
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
              src="https://www.youtube.com/embed/LHRC5UIBo5Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">
              Cuestiones legales de las criptomonedas
            </h2>
            <p className="cursos__paragraph_item f4">
              Es una buena ocasión para recordar que una de las premisas
              fundacionales de Bitcoin es la de poder realizar pagos entre dos
              partes directamente, sin necesidad de intervención de entidades
              centralizadas. Muchos ven en Bitcoin algo revolucionario, algunos
              incluso hablan de separación del dinero y el Estado. Pero claro,
              esto no le hace ni un poquito de gracia a los bancos, ni a los
              gobiernos, ni a los organismos supranacionales que se encargan de
              esas cuestiones. En Argentina, hay una larga tradición de tener
              dinero y no declararlo e incluso de realizar todo tipo de
              transacciones comerciales sin tampoco declararlas a ningún
              organismos estatal.
            </p>
          </div>
        </div>
        <div className="cursos__container_item">
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">
              Cómo evitar inconvenientes legales
            </h2>
            <p className="cursos__paragraph_item f4">
              El fisco todavía no puede obtener información de portales que no
              están radicados en el país, y el caso más famoso sería el de
              Binance. Para facilitar sus declaraciones o requerimientos de
              información que pudieran recibir, sugerimos que vayan registrando
              las operaciones que son o que puede llegar a ser visibles para los
              organismos de control y recaudación.
            </p>
          </div>
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NGIT5lPDMk4"
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
              src="https://www.youtube.com/embed/LjmJkeQHoBc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">
              Comprar/vender criptomonedas en Argentina. Distintos métodos
            </h2>
            <p className="cursos__paragraph_item f4">...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

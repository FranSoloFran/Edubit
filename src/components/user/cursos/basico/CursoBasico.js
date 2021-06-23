import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, saveUserCourse } from "../../../../reducers/coursesReducer";
import { showOk } from "../../../../reducers/msgboxReducer";
import { Link } from "react-router-dom";

export const CursoBasico = () => {
  let slides = [
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/GkAQH-1ezEQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/3UvIrt-rDxo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/9HgyJYndiA0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>,
    <iframe
      width="720"
      height="460"
      src="https://www.youtube.com/embed/KlzzlQBDBfI"
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
    id: "1",
    name: "Criptomonedas 101: Nivel Básico",
    route: "cursoBasico",
    steps: 5
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
          {finishedCourse ? <h1>Criptomonedas 101 - Nivel Básico: Completado</h1> : <h1>Criptomonedas 101 - Nivel Básico: </h1>}

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
            <h2 className="cursos__title_item f2">Criptomonedas. ¿Qué son?</h2>
            <p className="cursos__paragraph_item f4">
              Una criptomoneda es un activo digital que emplea un cifrado
              criptográfico para garantizar su titularidad y asegurar la
              integridad de las transacciones, y controlar la creación de
              unidades adicionales, es decir, evitar que alguien pueda hacer
              copias como haríamos, por ejemplo, con una foto. Estas monedas no
              existen de forma física: se almacenan en una cartera digital.
            </p>
          </div>
          <div className="cursos__img_item">

          </div>
        </div>
        <div className="cursos__container_item">
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3UvIrt-rDxo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">
              Errores comunes al invertir en criptomonedas
            </h2>
            <p className="cursos__paragraph_item f4">
              ¿Cuáles son los errores que se deben evitar para invertir en
              Bitcoin? No tener conocimientos sobre Bitcoin y el funcionamiento
              de criptomonedas Sin una formación sobre cómo funciona Bitcoin y
              el mundo de las criptomonedas en general se está expuesto a creer
              en todo lo que dicen los medios, sin tener capacidad para crearse
              un criterio propio.
            </p>
          </div>
        </div>
        <div className="cursos__container_item">
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">
              Criptomonedas más populares
            </h2>
            <p className="cursos__paragraph_item f4">
              ¿Cuántas criptomonedas existen? Más de 2000 y subiendo. Cada
              semana se crea alguna nueva divisa virtual en un proceso que se
              denomina ICO y que más adelante resumiremos. Entre las más
              conocidas están: Bitcoin, Ethereum, Litecoin, Cardano,
              Bitcoincash, Iota, Ripple, Tron, entre otras.
            </p>
          </div>
          <div className="cursos__img_item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9HgyJYndiA0"
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
              src="https://www.youtube.com/embed/KlzzlQBDBfI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div className="cursos__text_item">
            <h2 className="cursos__title_item f2">¿Qué es el Bitcoin?</h2>
            <p className="cursos__paragraph_item f4">
              Bitcoin es una moneda virtual o un medio de intercambio
              electrónico que sirve para adquirir productos y servicios como
              cualquier otra moneda. Pero esta moneda es descentralizada, es
              decir que no existe una autoridad o ente de control que sea
              responsable de su emisión y registro de sus movimientos. Consiste
              en una clave criptográfica que se asocia a un monedero virtual, el
              cual descuenta y recibe pagos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

///IMAGENES IMPORTADAS
import Img1 from "../../assets/img/HomePage_img1.jpg";
import Img2 from "../../assets/img/HomePage_img2.jpg";

import EstA from "../../assets/img/EstudianteA.jpg";
import EstB from "../../assets/img/EstudianteB.jpg";
import EstC from "../../assets/img/EstudianteC.jpg";
import EstD from "../../assets/img/EstudianteD.jpg";

export const BodyHome = () => {
  return (
    <div>
      <div className="home__container_edubit">
        <div className="home__text_edubit">
          <h2 className="home__title_edubit f2">Edubit</h2>
          <h2 className="home__subtitle_edubit"> EDUCACIÓN EN INVERSIONES</h2>
          <p className="home__paragraph_edubit f3">
            En Edubit, estamos comprometidos al aprendizaje dinámico, al
            crecimiento y al desarrollo profesional. Motivamos a nuestros
            alumnos para que hagan preguntas profundas, exploren las fronteras
            disciplinarias y confronten los pensamientos convencionalees. Le
            invitamos a que conozca más sobre Edubit y descrubra así el tipo de
            educación que construimos para usted.
          </p>
        </div>
        <div className="home__img_edubit">
          <img src={Img1} alt="" />
        </div>
      </div>

      <div className="home__container_edubit">
        <div className="home__img_edubit home__dos">
          <img src={Img2} alt="" />
        </div>
        <div className="home__text_edubit home__uno">
          <h3 className="home__title_edubit f2">
            Sobre nuestra Escuela de negocios
          </h3>
          <h3 className="home__subtitle_edubit">
            Comprometidos con la excelencia
          </h3>
          <p className="home__paragraph_edubit f3">
            Edubit le ofrece un ambiente de aprendizaje enriquecido que ha
            permitido a un sin número de estudiantes salir adelante. Fundando en
            el año 2021, nuestra Escuela de negocios está ubicado en CABA,
            Argentina, y es un reflejo de la diversidad de culturas y de
            orígenes de la localidad. Nos sentimos muy orgullosos por nuestro
            alumnado, cuerpo docente y administrativos, quienes siempre tiene la
            mejor disposición de crear y crecer juntos. Llámenos si quiere
            obtener más información al respecto.
          </p>
        </div>
      </div>

      <div>
        <h3 className="home__title_edubit_alumno">
          Algunos de nuestros alumnos
        </h3>
        <div className="home__container_alumno_edubit">
          <div className="home__alumnos_edubit">
            <div className="home__img_alumnos_edubit">
              <img src={EstA} alt="" />
            </div>
            <p className="home__paragraph_alumno_edubit">
              Comencé por motivos personales, ya que, en ese momento tenía
              ingresos que podía invertir, pero no sabía cómo. Actualmente tengo
              una cartera de 20 clientes a los cuales asesoro de forma
              personalizada y esto un plus muy importantes para ellos.
              <br />
              <br />
              <b>Noelia Ramirez (28)</b>
            </p>
          </div>

          <div className="home__alumnos_edubit">
            <p className="home__paragraph_alumno_edubit">
              Tenía algún conocimiento sobre inversiones en general, pero las
              criptomonedas eran difíciles de entender. Ahora desde mi empresa
              las usamos para tenerlas como inversión en la cartera.
              <br />
              <br />
              <b>Alejandro Peréz (38)</b>
            </p>
            <div className="home__img_alumnos_edubit">
              <img src={EstC} alt="" />
            </div>
          </div>

          <div className="home__alumnos_edubit">
            <div className="home__img_alumnos_edubit">
              <img src={EstB} alt="" />
            </div>
            <p className="home__paragraph_alumno_edubit">
              Soy parte de una empresa familiar en la cual utilizaban los
              métodos habituales de inversión, pero no obteníamos los números
              deseados. Desde Edubit nos ayudaron a maximizar las inversiones.
              <br />
              <br />
              <b>Mónica Carillo (41)</b>
            </p>
          </div>

          <div className="home__alumnos_edubit">
            <p className="home__paragraph_alumno_edubit">
              Como persona inquieta e innovadora comencé a investigar sobre
              criptomonedas, gracias al simulador pude entender conceptos de
              inversiones que no sabía, y ahora tengo mayor respaldo financiero.
              <br />
              <br />
              <b>James Stinson (32)</b>
            </p>
            <div className="home__img_alumnos_edubit">
              <img src={EstD} alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <br />
    </div>
  );
};

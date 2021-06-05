import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../reducers/authReducer";

export const NavBarUser = () => {
  const dispatch = useDispatch();
  const [classA, setClassA] = useState("circle-right");
  const [check, setChecked] = useState("");

  //Oculta el menú
  const [isLoading, setIsLoading] = useState(false);
  const buttonHandler = () => {
    setIsLoading((isLoading) => !isLoading);
    setClassA("circle-right");
    if (check === "" ? setChecked("open") : setChecked(""));
  };

  //Cierra la sesión
  const handleClickLogout = () => {
    dispatch(startLogout());
  };

  //Cambia el ícono de simulaciones
  const handleChecked = () => {
    if (
      classA === "circle-right"
        ? setClassA("circle-down")
        : setClassA("circle-right")
    );
  };

  return (
    <>
      <div className="user__container-logo">
        <div
          onClick={buttonHandler}
          className={`user__hamburguer user__hamburguer-${check}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="user__logo mt-1"></div>
      </div>

      {isLoading ? (
        <aside className="user__sidebar">
          <div className="user__sidebar-navbar">
            <ul className="user__sidebar-li">
              <li className="user__sidebar-li">
                <Link to="/landingpage">
                  <span className="icon-home"></span>
                  Inicio
                </Link>
              </li>
              <li className="user__sidebar-li">
                <Link to="/landingpage">
                  <span className="icon-library"></span>
                  Textos Guiados
                </Link>
              </li>
              <li className="user__sidebar-li">
                <div className="user__submenu-item">
                  <input type="checkbox" id="A" onChange={handleChecked} />
                  <label htmlFor="A">
                    <span className={`icon-${classA}`}></span>
                    Simulaciones
                  </label>

                  <ul>                    
                    <li>
                      <Link to="/landingpage/history">
                        <span className="icon-hour-glass"></span>
                        Historia
                      </Link>
                    </li>
                    <li>
                      <Link to="/landingpage/trading">
                        <span className="icon-stats-dots"></span>
                        Cotizaciones
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="user__sidebar-li">
                <Link to="/landingpage">
                  <span className="icon-play"></span>
                  Videos
                </Link>
              </li>
              <li className="user__sidebar-li" onClick={handleClickLogout}>
                <Link to="/homepage">
                  <span className="icon-exit"></span>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      ) : null}
    </>
  );
};

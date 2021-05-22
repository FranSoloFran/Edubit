import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLogout } from '../../reducers/authReducer';


export const NavBarUser = () => {


    const dispatch = useDispatch();
    const [classA, setClassA] = useState("circle-right");


    //Oculta el menú
    const [isLoading, setIsLoading] = useState(false);
    const buttonHandler = () => {
        setIsLoading(isLoading => !isLoading);
        setClassA("circle-right")
    }


    //Cierra la sesión
    const handleClickLogout = () => {
        dispatch(startLogout());
    }

    //Cambia el ícono de simulaciones
    const handleChecked = () => {
        if (classA === "circle-right" ? setClassA("circle-down") : setClassA("circle-right"));
    }

    return (
        <>
            <div className="user__container-logo">
                <div className="user__hamburguer" >
                    <input className="user__input-check" type="checkbox" id="toggle" onChange={buttonHandler} />
                    <label className="user__label-check" htmlFor="toggle" />
                </div>
                <div className="user__logo mt-1"></div>
            </div>

            {
                isLoading
                    ? (<aside className="user__sidebar">
                        <div className="user__sidebar-navbar">
                            <ul className="user__sidebar-li">
                                <li className="user__sidebar-li">
                                    <Link to="/user" >
                                        <span className="icon-user"></span>
                                        Perfil
                                    </Link>
                                </li>
                                <li className="user__sidebar-li">
                                    <Link to="/user" >
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
                                                <Link to="/user" >
                                                    <span className="icon-coin-dollar"></span>
                                                    Portafolio
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/user" >
                                                    <span className="icon-hour-glass"></span>
                                                    Transacciones
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/user" >
                                                    <span className="icon-stats-dots"></span>
                                                    Cotizaciones
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </li>
                                <li className="user__sidebar-li">
                                    <Link to="/user" >
                                        <span className="icon-play"></span>
                                        Videos
                                    </Link>
                                </li>
                                <li className="user__sidebar-li" onClick={handleClickLogout}>
                                    <Link to="/homepage" >
                                        <span className="icon-exit"></span>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </aside>)
                    : null
            }
        </>
    )
}
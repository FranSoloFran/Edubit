import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useForm } from "../../Hooks/useForm";
import { loginWithEmail, startGoogleLogin } from "../../reducers/authReducer";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  //estados de los inputs
  const [visible, setVisible] = useState("eye-blocked");
  const [typeInput, setTypeInput] = useState("password");

  //estados del formulario
  const [formvalue, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formvalue;

  //mostrar password u ocultarlo
  const handleSpanChange = () => {
    if (visible === "eye-blocked") {
      setVisible("eye");
      setTypeInput("text");
    } else {
      setVisible("eye-blocked");
      setTypeInput("password");
    }
  };

  //obtner el valor del formulario
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithEmail(email, password));
  };

  const handleLoginGoogle = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div className="auth__background">
      <div className="auth__main">
        <div className="auth__box-container">
          <div className="auth__box-login">
            <div className="auth__box-img auth__rectangle-upper"></div>
            <h3 className="auth__title">Inicio de sesión</h3>
            <form onSubmit={handleLogin}>
              <div className="divinputs">
                <div className="div-group-input">
                  <input
                    autoComplete="off"
                    className="input"
                    name="email"
                    onChange={handleInputChange}
                    required
                    type="text"
                    value={email}
                  />
                  <label className="lbl">Email</label>
                </div>

                <div className="div-group-input">
                  <input
                    className="input"
                    maxLength="25"
                    name="password"
                    onChange={handleInputChange}
                    required
                    type={typeInput}
                    value={password}
                  />
                  <label className="lbl">Contraseña</label>
                  <span
                    className={`icon-${visible} auth__eye`}
                    onClick={handleSpanChange}
                  ></span>
                </div>

                <button className="btn btn-primary btn-block" type="submit">
                  Iniciar sesión
                </button>

                <hr />

                <div className="auth__social-network">
                  <p>Iniciar sesión con redes sociales</p>

                  <div className="google-btn" onClick={handleLoginGoogle}>
                    <div className="google-icon-wrapper">
                      <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="google button"
                      />
                    </div>
                    <p className="btn-text">
                      <b>Iniciar sesión con Google</b>
                    </p>
                  </div>
                </div>

                <Link to="/homepage/register" className="auth__link">
                  Crear nueva cuenta
                </Link>
              </div>
            </form>

            <div className="auth__rectangle-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

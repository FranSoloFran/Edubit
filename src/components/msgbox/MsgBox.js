import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMsgBox } from "../../reducers/msgboxReducer";

export const MsgBox = () => {
  const { title, msg, className, show, callback } = useSelector(
    (state) => state.msg
  );
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (callback && (title === "Alerta" || title === "Warning")) {
      callback();
    }
    dispatch(closeMsgBox());
  };

  return show ? (
    <div className="msgbox__container">
      <div className="msgbox__container-background"></div>

      <section className="msgbox__section-card">
        <div className="msgbox__card">
          <div className="msgbox__card-img">
            <span className={className}></span>
          </div>
          <div className="msgbox__card-title">{title}</div>
          <div className="msgbox__card-boyd">{msg}</div>
          <section
            className="trading__user-form-container-buttons"
            style={{ width: "100%", justifyContent: "space-evenly" }}
          >
            <button
              className={`msgbox__card-button ${
                (title === "Alerta" || title === "Warning") &&
                "trading__user-form-btnbuy"
              }`}
              onClick={handleButtonClick}
            >
              Aceptar
            </button>
            {(title === "Alerta" || title === "Warning") && (
              <button
                className={`msgbox__card-button ${
                  (title === "Alerta" || title === "Warning") &&
                  "trading__user-form-btnexit"
                }`}
                onClick={() => dispatch(closeMsgBox())}
              >
                Cancelar
              </button>
            )}
          </section>
        </div>
      </section>
    </div>
  ) : (
    <></>
  );
};

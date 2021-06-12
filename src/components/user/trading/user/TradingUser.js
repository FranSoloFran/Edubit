import React from "react";
import { useDispatch } from "react-redux";
import { TradingUserMoney } from "./TradingUserMoney";
import { formBuySHowDisp } from "../../../../reducers/tradingReducer";
import { TradingUserPortafolio } from "./TradingUserPortafolio";

export const TradingUser = () => {
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(formBuySHowDisp());
  };

  return (
    <aside className="trading__user-menu">
      {/* es donde el usuario puede vender, comprar y poner los stops de venta y compra*/}
      <section className="trading__user-menu-title">
        <h3>OPERACIONES</h3>
        <p>
          Dinero disponible: U$D <TradingUserMoney />
        </p>
      </section>

      <section className="trading__user-menu-buttons">
        <button className="trading__user-menu-buy" onClick={handleclick}>
          Comprar
        </button>
      </section>

      <section className="trading__user-menu-container-table">
        <p className="trading__user-menu-table-title">Mi Portafolios</p>

        <ul className="trading__user-menu-table">
          <TradingUserPortafolio />
        </ul>
      </section>
    </aside>
  );
};

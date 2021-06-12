import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatToCurrency } from "../../../../helper/verifyTextbox";
import {
  getPortafolio,
  getPriceBidAsk,
} from "../../../../reducers/tradingReducer";

export const TradingUserPortafolio = () => {
  const dispatch = useDispatch();
  const portafolio = useSelector((state) => state.trading.coinPortafolio);
  //const marketCoins = useSelector((state) => state.trading.marketCoins);

  useState(() => {
    dispatch(getPortafolio());
  }, [portafolio]);

  const handleClickShowFormSold = (id) => {
    dispatch(getPriceBidAsk(id, false));
  };

  return (
    <>
      <table>
        <thead>
          <td className="trading__user-menu-table-header trading__user-menu-table-column">
            Moneda
          </td>
          <td className="trading__user-menu-table-header trading__user-menu-table-column">
            Cantidad
          </td>
          <td className="trading__user-menu-table-header trading__user-menu-table-column">
            Acción
          </td>
        </thead>
        {portafolio.map((item) => (
          <tbody key={item.idcoin}>
            <td className="trading__user-menu-table-row">
              <img src={item.img} alt="" />
              <span>
                {item.idcoin}
                {/*TODO: Cambiar el label de las monedas por las que tiene mayusculas y separaciones*/}
                {/*marketCoins && item.idcoin
                  ? marketCoins.filter((coin) => coin.id === item.idcoin)[0]
                      .name
                : item.idcoin*/}
              </span>
            </td>
            <td className="trading__user-menu-table-column">
              <span>{formatToCurrency(item.cantidad)}</span>
            </td>
            <td className="trading__user-menu-table-column">
              <button onClick={() => handleClickShowFormSold(item.idcoin)}>
                Vender
              </button>
            </td>
          </tbody>
        ))}
      </table>
    </>
  );
};

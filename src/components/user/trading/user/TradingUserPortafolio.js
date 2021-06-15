import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatToCurrency } from "../../../../helper/verifyTextbox";
import {
  getPortafolio,
  getPriceBidAsk,
} from "../../../../reducers/tradingReducer";

export const TradingUserPortafolio = () => {
  const dispatch = useDispatch();
  const portafolio = useSelector((state) => state.trading.coinPortafolio);

  useEffect(() => {
    dispatch(getPortafolio());
  }, [portafolio, dispatch]);

  const handleClickShowFormSold = (id) => {
    dispatch(getPriceBidAsk(id, false));
  };

  return (
    <>
      <table className="trading__user-menu-table">
        <tbody>
          <tr>
            <td className="trading__user-menu-table-header trading__user-menu-table-column">
              Moneda
            </td>
            <td className="trading__user-menu-table-header trading__user-menu-table-column">
              Cantidad
            </td>
          </tr>
          {portafolio.map((item) => (
            <tr key={item.idcoin}>
              <td className="trading__user-menu-table-row">
                <img src={item.img} alt="" />
                <span>{item.name}</span>
              </td>
              <td className="trading__user-menu-table-column">
                <span>{formatToCurrency(item.cantidad)}</span>
              </td>
              <td className="trading__user-menu-table-column">
                <button onClick={() => handleClickShowFormSold(item.idcoin)}>
                  Vender
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

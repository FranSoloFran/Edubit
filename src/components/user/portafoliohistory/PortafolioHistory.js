import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertDate, formatToCurrency } from "../../../helper/verifyTextbox";

import { getHistory } from "../../../reducers/tradingReducer";

export const PortafolioHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.trading.coinHistory);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  return (
    <div className="history__container">
      <div className="history__table">
        <div className="history__table-header">
          <div className="history__header__item"></div>
          <div className="history__header__item">Nombre</div>
          <div className="history__header__item">Cantidad</div>
          <div className="history__header__item">Precio</div>
          <div className="history__header__item">Tipo</div>
          <div className="history__header__item">Fecha</div>
        </div>
        <div className="history__table-content">
          {history.length > 0 &&
            history.map((item, index) => (
              <div className="history__table-row" key={"history" + index}>
                <div className="history__table-data">
                  {" "}
                  <img src={item.img} alt="" />
                </div>
                <div className="history__table-data"> {item.idcoin}</div>
                <div className="history__table-data">
                  {" "}
                  {formatToCurrency(item.cantidad)}
                </div>
                <div className="history__table-data">
                  {" "}
                  U$D {formatToCurrency(item.precioCompra)}
                </div>
                <div className="history__table-data"> {item.tipo}</div>
                <div className="history__table-data">
                  {" "}
                  {convertDate(item.fecha)}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

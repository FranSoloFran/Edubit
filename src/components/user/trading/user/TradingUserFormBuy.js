import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatToCurrency } from "../../../../helper/verifyTextbox";
import { hideBuySHowDisp, saveBuy } from "../../../../reducers/tradingReducer";
import { showError, showWarning } from "../../../../reducers/msgboxReducer";

export const TradingUserFormBuy = () => {
  const dispatch = useDispatch();

  const money = useSelector((state) => state.trading.money);
  const compra = useSelector((state) => state.trading.pricesBidAsk);
  const form = useSelector((state) => state.trading.showFormBuy);
  const coin = useSelector((state) => state.trading.selectCoin);

  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState("");

  const handleChange = (e) => {
    if (parseFloat(e.target.value)) {
      let input = parseFloat(e.target.value);
      if (input < 0) {
        setCantidad(0);
        setTotal(0);
      } else if (input * compra[0].compra[0] < money) {
        setTotal(input * compra[0].compra[0]);
        setCantidad(input);
      } else {
        setCantidad(money / compra[0].compra[0]);
        setTotal(money);
      }
    }
  };

  const handleClickHide = (e) => {
    e.preventDefault();
    setTotal(0);
    setCantidad("");
    dispatch(hideBuySHowDisp());
  };

  const handleClickBuy = (e) => {
    e.preventDefault();

    if (total > 0) {
      dispatch(
        showWarning(
          "Alerta",
          "¿Está seguro que quiere continuar con la operación?",
          function () {
            dispatch(
              saveBuy(
                coin.id,
                coin.name,
                total,
                compra[0].compra[0],
                money - compra[0].compra[0] * total,
                coin.image
              )
            );
            setTotal(0);
            dispatch(hideBuySHowDisp());
          }
        )
      );
    } else {
      dispatch(showError("Error", "La cantidad a comprar debe ser mayor a 0."));
    }
  };

  return form ? (
    <>
      <div className="trading__user-form-background"></div>

      <div className="trading__user-form">
        <section className="trading__user-form-container">
          <section className="trading__user-form-title">
            <h3>OPERACIÓN DE COMPRA</h3>
            <div className="div-group-input div-group-input-important">
              <p>Dinero disponible: U$D {formatToCurrency(money)}</p>
            </div>
            <div className="div-group-input">
              <p>{"Moneda a comprar: " + coin.name}</p>
              <p>
                Precio de compra: U$D {formatToCurrency(compra[0].compra[0])}
              </p>
            </div>
            <div className="div-group-input div-group-input-important">
              <p>Dinero a pagar: U$D {formatToCurrency(total)}</p>
            </div>
          </section>
          <form className="trading__user-form-form" onSubmit={handleClickBuy}>
            <div className="div-group-input">
              <input
                autoComplete="off"
                className="input"
                name="cantidad"
                onChange={handleChange}
                required
                type="number"
                value={cantidad}
              />
              <label className="lbl">Total a comprar</label>
            </div>

            <section className="trading__user-form-container-buttons">
              <button
                type="submit"
                className="trading__user-form-buttons trading__user-form-btnbuy"
              >
                Comprar
              </button>
              <button
                className="trading__user-form-buttons trading__user-form-btnexit"
                onClick={handleClickHide}
              >
                Cancelar
              </button>
            </section>
          </form>
        </section>
      </div>
    </>
  ) : (
    <></>
  );
};

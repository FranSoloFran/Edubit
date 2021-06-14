import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatToCurrency } from "../../../../helper/verifyTextbox";
import { hideBuySHowDisp, saveBuy } from "../../../../reducers/tradingReducer";
import { showError } from "../../../../reducers/msgboxReducer";

export const TradingUserFormBuy = () => {
  const dispatch = useDispatch();

  const money = useSelector((state) => state.trading.money);
  const compra = useSelector((state) => state.trading.pricesBidAsk);
  const form = useSelector((state) => state.trading.showFormBuy);
  const marketCoins = useSelector((state) => state.trading.marketCoins);
  const idcoin = useSelector((state) => state.trading.selectCoinID);

  const coin = marketCoins.filter((item) => item.id === idcoin)[0];

  const [total, setTotal] = useState("");

  const handleChange = (e) => {
    if (parseFloat(e.target.value) < 0) {
      setTotal(0);
    } else if (parseFloat(e.target.value) * compra[0].compra[0] < money) {
      setTotal(e.target.value);
    } else {
      setTotal(money / compra[0].compra[0]);
    }
  };

  const handleClickHide = (e) => {
    e.preventDefault();
    setTotal(0);
    dispatch(hideBuySHowDisp());
  };

  const handleClickBuy = (e) => {
    e.preventDefault();

    if (total > 0) {
      dispatch(
        saveBuy(
          idcoin,
          total,
          compra[0].compra[0],
          money - compra[0].compra[0] * total,
          coin.image
        )
      );
      setTotal(0);
      dispatch(hideBuySHowDisp());
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
            <h3>OPERACIONES DE COMPRA</h3>
            <p>Dinero disponible: U$D {formatToCurrency(money)}</p>
          </section>
          <form className="trading__user-form-form" onSubmit={handleClickBuy}>
            <div className="div-group-input">
              <input
                autoComplete="off"
                className="input"
                name="coin"
                readOnly
                type="text"
                value={"Moneda a comprar: " + coin.name}
              />
            </div>

            <div className="div-group-input">
              <input
                autoComplete="off"
                className="input"
                name="total"
                onChange={handleChange}
                required
                type="number"
                value={total}
              />
              <label className="lbl">Total a comprar</label>
            </div>

            <p>Precio de compra: U$D {formatToCurrency(compra[0].compra[0])}</p>

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

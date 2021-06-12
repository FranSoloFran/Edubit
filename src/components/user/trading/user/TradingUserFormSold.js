import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatToCurrency } from "../../../../helper/verifyTextbox";
import {
  hideSoldSHowDisp,
  savesSold,
} from "../../../../reducers/tradingReducer";
import { showError } from "../../../../reducers/msgboxReducer";

export const TradingUserFormSold = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.trading.showFormSold);
  const money = useSelector((state) => state.trading.money);
  const portafolio = useSelector((state) => state.trading.coinPortafolio);
  const venta = useSelector((state) => state.trading.pricePriceSold);
  const marketCoins = useSelector((state) => state.trading.marketCoins);

  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [cantidadRestante, setCantidadRestante] = useState(0);
  const [plata, setPlata] = useState(0);

  useEffect(() => {
    if (form.length > 0 && form[0].show) {
      const cant = portafolio.find((item) => item.idcoin === form[0].id);
      setCantidad(cant.cantidad);
      setCantidadRestante(cant.cantidad);
      setPlata(money);
    }
  }, [form, money, portafolio]);

  let coin = {};
  if (form[0]) coin = marketCoins.filter((item) => item.id === form[0].id)[0];

  const handleChange = (e) => {
    if (parseFloat(e.target.value) < 0) {
      setTotal(0);
      setPlata(parseFloat(money));
      setCantidadRestante(cantidad);
    } else if (parseFloat(e.target.value) < cantidad) {
      setTotal(e.target.value);
      setPlata(
        parseFloat(money) +
          parseFloat(e.target.value) * parseFloat(venta[0].venta[0])
      );
      setCantidadRestante(parseFloat(cantidad) - parseFloat(e.target.value));
    } else {
      setTotal(cantidad);
      setPlata(
        parseFloat(money) + parseFloat(cantidad) * parseFloat(venta[0].venta[0])
      );
      setCantidadRestante(0);
    }
  };

  const handleClickHide = (e) => {
    e.preventDefault();
    setTotal(0);
    dispatch(hideSoldSHowDisp());
  };

  const handleClickSold = (e) => {
    e.preventDefault();
    if (total > 0) {
      dispatch(
        savesSold(
          form[0].id,
          cantidadRestante,
          venta[0].venta[0],
          plata,
          coin.image,
          cantidadRestante === 0 ? true : false
        )
      );
      setTotal(0);
      dispatch(hideSoldSHowDisp());
    } else {
      dispatch(showError("Error", "La cantidad a vender debe ser mayor a 0."));
    }
  };

  return form.length > 0 && form[0].show ? (
    <>
      <div className="trading__user-form-background"></div>

      <div className="trading__user-form">
        <section className="trading__user-form-container">
          <section className="trading__user-form-title">
            <h3>OPERACIONES DE VENTA</h3>
            <p>Precio de venta: U$D {formatToCurrency(venta[0].venta[0])}</p>
            <p>Total de dinero: U$D {formatToCurrency(plata)}</p>
            <p>Cantidad disponible: {formatToCurrency(cantidad)}</p>
            <p>Cantidad restante: {formatToCurrency(cantidadRestante)}</p>
          </section>
          <form className="trading__user-form-form" onSubmit={handleClickSold}>
            <div className="div-group-input">
              <input
                autoComplete="off"
                className="input"
                name="coin"
                readOnly
                type="text"
                value={"Moneda a vender: " + coin.name}
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
              <label className="lbl">Total a vender</label>
            </div>

            <section className="trading__user-form-container-buttons">
              <button
                type="submit"
                className="trading__user-form-buttons trading__user-form-btnbuy"
              >
                Vender
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

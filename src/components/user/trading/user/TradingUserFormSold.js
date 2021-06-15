import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatToCurrency } from "../../../../helper/verifyTextbox";
import {
  hideSoldSHowDisp,
  savesSold,
} from "../../../../reducers/tradingReducer";
import { showError, showWarning } from "../../../../reducers/msgboxReducer";

export const TradingUserFormSold = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.trading.showFormSold);
  const money = useSelector((state) => state.trading.money);
  const portafolio = useSelector((state) => state.trading.coinPortafolio);
  const venta = useSelector((state) => state.trading.pricePriceSold);
  const marketCoins = useSelector((state) => state.trading.marketCoins);

  const [total, setTotal] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [cantidadRestante, setCantidadRestante] = useState(0);
  const [plata, setPlata] = useState(0);

  useEffect(() => {
    if (form.length > 0 && form[0].show) {
      const cant = portafolio.find((item) => item.idcoin === form[0].id);
      setCantidad(parseFloat(cant.cantidad));
    }
  }, [form, money, portafolio]);

  let coin = {};
  if (form[0]) coin = marketCoins.filter((item) => item.id === form[0].id)[0];

  const handleChange = (e) => {
    if (parseFloat(e.target.value)) {
      let input = parseFloat(e.target.value);
      if (input <= 0) {
        setTotal(0);
        setPlata(parseFloat(money));
        setCantidadRestante(cantidad);
      } else if (input < cantidad) {
        setTotal(input);
        setPlata(parseFloat(money) + input * parseFloat(venta[0].venta[0]));
        setCantidadRestante(parseFloat(cantidad) - input);
      } else {
        setTotal(cantidad);
        setPlata(
          parseFloat(money) +
            parseFloat(cantidad) * parseFloat(venta[0].venta[0])
        );
        setCantidadRestante(0);
      }
    }
  };

  const handleClickHide = (e) => {
    e.preventDefault();
    setTotal("");
    setCantidad(0);
    dispatch(hideSoldSHowDisp());
  };

  const handleClickSold = (e) => {
    e.preventDefault();
    if (total > 0) {
      dispatch(
        showWarning(
          "Alerta",
          "¿Está seguro que quiere continuar con la operación?",
          function () {
            dispatch(
              savesSold(
                form[0].id,
                coin.name,
                cantidadRestante,
                venta[0].venta[0],
                plata,
                coin.image,
                cantidadRestante === 0 ? true : false
              )
            );
            setTotal(0);
            dispatch(hideSoldSHowDisp());
          }
        )
      );
    } else {
      dispatch(showError("Error", "La cantidad a vender debe ser mayor a 0."));
    }
  };

  return (
    form.length > 0 &&
    form[0].show && (
      <>
        <div className="trading__user-form-background"></div>

        <div className="trading__user-form">
          <section className="trading__user-form-container">
            <section className="trading__user-form-title">
              <h3>OPERACIÓN DE VENTA</h3>
              <div className="div-group-input">
                <p>{"Moneda a vender: " + coin.name}</p>
                <p>
                  Precio de venta: U$D {formatToCurrency(venta[0].venta[0])}
                </p>
              </div>

              <div className="div-group-input div-group-input-important">
                <p>Cantidad disponible: {formatToCurrency(cantidad)}</p>
                <p>Cantidad restante: {formatToCurrency(cantidadRestante)}</p>
              </div>

              <div className="div-group-input div-group-input-important">
                <p>Total de dinero: U$D {formatToCurrency(plata)}</p>
              </div>

              <p>Rendimiento: TODO</p>
            </section>
            <form
              className="trading__user-form-form"
              onSubmit={handleClickSold}
            >
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
    )
  );
};

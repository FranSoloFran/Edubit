import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPriceBidAsk,
  infoCoinMarketPrice,
} from "../../../reducers/tradingReducer";
import { formatToCurrency } from "../../../helper/verifyTextbox";

let time = null;

export const TradingBooks = () => {
  const dispatch = useDispatch();
  const listCoins = useSelector((state) => state.trading.pricesBidAsk);
  const coin = useSelector((state) => state.trading.selectCoin);
  const dayCoin = useSelector((state) => state.trading.selectCoinDay);

  useEffect(() => {
    if (coin.id !== "") {
      dispatch(getPriceBidAsk(coin.id, true));
      time = "ini";
    }
    if (time !== null) {
      time = setInterval(() => {
        dispatch(infoCoinMarketPrice(dayCoin));
        dispatch(getPriceBidAsk(coin.id, true));
      }, 300000);
    }
    return () => {
      clearInterval(time);
    };
  }, [coin.id, dayCoin, dispatch]);

  return coin.id !== "" ? (
    <div className="trading__books">
      {/* donde esta la plaza compradora y vendedora */}
      <section className="trading__books-sold-buy">
        <p>
          {listCoins.length > 0 &&
            listCoins[0].venta.map((item, index) => (
              <span key={"vent" + index}>
                Venta: U$D {formatToCurrency(item)}
              </span>
            ))}
        </p>
        <p>
          {listCoins.length > 0 &&
            listCoins[0].compra.map((item, index) => (
              <span key={"comp" + index}>
                Compra: U$D {formatToCurrency(item)}
              </span>
            ))}
        </p>
      </section>

      <br />
    </div>
  ) : (
    <></>
  );
};

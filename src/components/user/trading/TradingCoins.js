import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  coinsMarketsAPI, 
  infoCoinMarketPrice, 
  setSelectedCoinId
} from "../../../reducers/tradingReducer";



export const TradingCoins = () => {
  const dispatch = useDispatch();

  const listCoins = useSelector((state) => state.trading.marketCoins);
  const [coinselect, setCoinSelect] = useState("");

  useEffect(() => {
    dispatch(coinsMarketsAPI());
  }, [dispatch]);


  const handleClickCoin = (id) =>{
    setCoinSelect(id) ;
    dispatch(setSelectedCoinId(id));
    dispatch(infoCoinMarketPrice(1));
  }


  return (
    <div className="trading__coins">
      {/* las monedas que podes ver en el mercado, poner un máximo de 5 */}
      <section className="trading__coins-container">

        {listCoins.length > 0 && (
          <div className="trading__coins-group">
            {listCoins.map((coin) => (
              <div
                onClick={() => handleClickCoin(coin.id)}
                className={`trading__coins-name ${coinselect === coin.id ? "trading__coins-name-active" : ""}`}
                key={coin.id}
              >
                <img src={coin.image} alt={coin.name} />
                <section className="trading__coins-name-s1">
                  <span>{coin.name}</span>
                </section>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

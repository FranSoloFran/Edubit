import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  coinsMarketsAPI,
  updateCoinsSelection,
} from "../../../reducers/tradingReducer";

export const TradingCoins = () => {
  const dispatch = useDispatch();

  const listCoins = useSelector((state) => state.trading.marketCoins);
  const [showListCoins, setShowListCoins] = useState(false);
  const [selectedCoins, setSelectedCoins] = useState([]);

  useEffect(() => {
    dispatch(coinsMarketsAPI());
  }, [dispatch]);

  const listCoinSelected = (coin) => {
    let selectedCoinAlreadyExist = selectedCoins.filter((itemCoin) => {
      return itemCoin.name === coin.name;
    });
    if (selectedCoinAlreadyExist.length === 0) {
      setSelectedCoins([...selectedCoins, coin]);
      dispatch(updateCoinsSelection(selectedCoins));
      setShowListCoins(false);
    }
  };

  const deleteSelectedCoin = (coin) => {
    setSelectedCoins(
      selectedCoins.filter((itemCoin) => {
        return itemCoin.name !== coin.name;
      })
    );
    dispatch(updateCoinsSelection(selectedCoins));
  };

  return (
    <div className="trading__coins">
      {/* las monedas que podes ver en el mercado, poner un máximo de 5 */}
      <section className="trading__coins-container">
        <button
          className="trading__coins-button"
          onClick={() => setShowListCoins(!showListCoins)}
        >
          <span className="icon-plus"></span>
        </button>

        {showListCoins && listCoins.length > 0 && (
          <div role="list" className="trading__coins-list">
            {listCoins.map((coin) => (
              <div className="trading__coins-item-list" key={coin.id}>
                <button onClick={() => listCoinSelected(coin)}>
                  <img src={coin.image} alt={coin.name} /> {coin.name}
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedCoins.length > 0 && (
          <div className="trading__coins-group">
            {selectedCoins.map((coin) => (
              <div
                className="trading__coins-name trading__coins-name-active"
                key={coin.id}
              >
                <img src={coin.image} alt={coin.name} />
                <section className="trading__coins-name-s1">
                  <span>{coin.name}</span>
                  <span>U$D {coin.current_price}</span>
                </section>
                <span onClick={() => deleteSelectedCoin(coin)}>x</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

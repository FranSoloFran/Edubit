import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  coinsMarketsAPI,
  infoCoinMarketPrice,
  setSelectedCoinId,
} from "../../../reducers/tradingReducer";

export const TradingCoins = () => {
  const dispatch = useDispatch();

  const listFilters = [
    { label: "1 Día", days: 1 },
    { label: "7 Días", days: 7 },
    { label: "15 Días", days: 15 },
    { label: "30 Días", days: 30 },
    { label: "3 Meses", days: 90 },
    { label: "6 Meses", days: 180 },
    { label: "1 Año", days: 365 },
  ];

  const listCoins = useSelector((state) => state.trading.marketCoins);
  const [coinselect, setCoinSelect] = useState("");
  const [filterSelect, setFilterSelect] = useState(listFilters[0]);

  useEffect(() => {
    dispatch(coinsMarketsAPI());
  }, [dispatch]);

  const handleClickCoin = (id) => {
    setCoinSelect(id);
    dispatch(setSelectedCoinId(id));
    dispatch(infoCoinMarketPrice(filterSelect));
  };

  const handleClickFilter = (days) => {
    setFilterSelect(days);
    if (coinselect && days) dispatch(infoCoinMarketPrice(days));
  };

  if (!coinselect && listCoins && listCoins.length > 0) {
    setCoinSelect(listCoins[0].id);
    setFilterSelect(listFilters[0].days);
    dispatch(setSelectedCoinId(listCoins[0].id));
    dispatch(infoCoinMarketPrice(listFilters[0].days));
  }

  return (
    <div className="trading__coins">
      {/* las monedas que podes ver en el mercado, poner un máximo de 5 */}
      <h2 className="trading__coins-title">Seleccione una criptomenda:</h2>
      <section className="trading__coins-container">
        {listCoins.length > 0 && (
          <div className="trading__coins-group">
            {listCoins.map((coin) => (
              <div
                onClick={() => handleClickCoin(coin.id)}
                className={`trading__coins-name ${
                  coinselect === coin.id ? "trading__coins-name-active" : ""
                }`}
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
      <h2 className="trading__coins-title">Filtros:</h2>
      <section className="trading__coins-container">
        {listFilters.length > 0 && (
          <div className="trading__coins-group">
            {listFilters.map((filter) => (
              <div
                onClick={() => handleClickFilter(filter.days)}
                className={`trading__coins-filter ${
                  filterSelect === filter.days
                    ? "trading__coins-filter-active"
                    : ""
                }`}
                key={filter.label}
              >
                <section className="trading__coins-filter-label">
                  <span>{filter.label}</span>
                </section>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

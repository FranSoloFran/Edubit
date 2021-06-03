import { loadingCheck } from "./loadingReducer";
import { showError } from "./msgboxReducer";
import { db } from "../firebase/firebase-config";

const urlApi = "https://api.coingecko.com/api/v3/coins";

//https://api.binance.com

const initialState = {
  marketCoins: [],
  selectCoinID: "",
  priceCoin: [],
};

const types = {
  setMarketCoins: "[Trading] SetMarketCoins",
  setSelectedCoin: "[Trading] SetSelectedCoin",
  getPricesCoin: "[Trading] GetPricesCoin",
};

//REDUCERS
export const tradingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setMarketCoins:
      return {
        ...state,
        marketCoins: action.payload.marketCoins,
      };

    case types.setSelectedCoin:
      return {
        ...state,
        selectCoinID: action.payload.selectCoinID,
      };

    case types.getPricesCoin:
      return {
        ...state,
        priceCoin: action.payload.priceCoin,
      };
    default:
      return state;
  }
};

//ACTIONS
export const coinsMarketsAPI = () => {
  return async (dispatch) => {
    dispatch(loadingCheck(true));
    await fetch(
      `${urlApi}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(
          setMarketCoins(
            data.filter((coin) => {
              return (
                coin.name === "Bitcoin" ||
                coin.name === "Ethereum" ||
                coin.name === "Binance Coin" ||
                coin.name === "Tether"
              );
            })
          )
        );
        dispatch(loadingCheck(false));
      })
      .catch((e) => {
        dispatch(loadingCheck(false));
        dispatch(showError("Error", e.message));
      });
  };
};

export const setMarketCoins = (marketCoins) => {
  return {
    type: types.setMarketCoins,
    payload: {
      marketCoins,
    },
  };
};

export const setSelectedCoinId = (selectCoinID) => {
  return {
    type: types.setSelectedCoin,
    payload: {
      selectCoinID,
    },
  };
};

export const infoCoinMarketPrice = (day) => {
  return async (dispatch, getState) => {
    await fetch(
      `${urlApi}/${
        getState().trading.selectCoinID
      }/market_chart?vs_currency=USD&days=${day}`
    )
      .then((response) => response.json())
      .then((result) => {
        let data = { index: [], price: [], volumes: [] };

        for (const item of result.prices) {
          data.index.push(item[0]);
          data.price.push(item[1]);
        }
        for (const item of result.total_volumes) data.volumes.push(item[1]);

        dispatch(getPriceCoin(data));
      })
      .catch((e) => {
        dispatch(showError("Error", e.message));
      });
  };
};

export const getPriceCoin = (priceCoin) => {
  return {
    type: types.getPricesCoin,
    payload: {
      priceCoin,
    },
  };
};

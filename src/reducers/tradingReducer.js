import { loadingCheck } from "./loadingReducer";
import { showError } from "./msgboxReducer";

const initialState = {
  marketCoins: [],
  selectedCoins: [],
};

const types = {
  setMarketCoins: "[Trading] SetMarketCoins",
  setSelectedCoins: "[Trading] SetSelectedCoins",
};

//REDUCERS
export const tradingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setMarketCoins:
      return { ...state, marketCoins: action.payload.marketCoins };

    case types.setSelectedCoins:
      return { ...state, selectedCoins: action.payload.selectedCoins };

    default:
      return state;
  }
};

//ACTIONS
export const coinsMarketsAPI = () => {
  return (dispatch) => {
    dispatch(loadingCheck(true));
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
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

export const updateCoinsSelection = (selectedCoins) => {
  return (dispatch) => {
    dispatch(setSelectedCoins(selectedCoins));
  };
};

export const setMarketCoins = (marketCoins) => {
  return { type: types.setMarketCoins, payload: { marketCoins } };
};

export const setSelectedCoins = (selectedCoins) => {
  return { type: types.setSelectedCoins, payload: { selectedCoins } };
};

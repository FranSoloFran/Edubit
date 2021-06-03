import { loadingCheck } from "./loadingReducer";
import { showError } from "./msgboxReducer";
import { db } from '../firebase/firebase-config';
import { returnDocuments } from '../helper/returnDocuments';
import { calculateBidAsk } from "../helper/calculateBidAsk";


const urlApi = "https://api.coingecko.com/api/v3";


const initialState = {
  money: 0,
  marketCoins: [],
  selectCoinID: "",
  priceCoin: [],
  pricesBidAsk: [],
  coinHistory: [],
  coinPortafolio: [],
  showFormBuy: false,
  showFormSold: false
}


const types = {
  setMarketCoins: "[Trading] SetMarketCoins",
  setSelectedCoin: "[Trading] SetSelectedCoin",
  getPricesCoin: "[Trading] GetPricesCoin",
  getPricePricBidAsk: "[Trading] GetPricesBidAsk",
  showFormBuy: "[Trading] ShowFormBuy",
  showFormSold: "[Trading] ShowFormSold",
};

//REDUCERS
export const tradingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setMarketCoins:
      return {
        ...state,
        money: action.payload.money,
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

    case types.getPricePricBidAsk:
      return {
        ...state,
        pricesBidAsk: action.payload.priceBidAsk
      };



    case types.showFormBuy:
      return {
        ...state,
        showFormBuy: action.payload.show
      };


    case types.showFormSold:
      return {
        ...state,
        showFormSold: action.payload.show
      };



    default:
      return state;
  }
};

//ACTIONS
/* export const coinsMarketsAPI = () => {
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
}; */




//OBTENER 5 MONEDAS DEFINIDAS POR ID
export const coinsMarketsAPI = () => {
  return async (dispatch, getState) => {
    dispatch(loadingCheck(true));
    await fetch(`${urlApi}/coins/markets?vs_currency=USD&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cdogecoin&order=market_cap_desc&sparkline=false`)
      .then((response) => response.json())
      .then(async (data) => {
        const docRef = await db.collection(`${getState().auth.uid}`).get().then(snap => returnDocuments(snap));
        let info = [];
        data.forEach(element => {
          info.push({
            id: element.id,
            name: element.name,
            image: element.image
          })
        });

        dispatch(setMarketCoins(info, docRef[0].trading.money));
        dispatch(loadingCheck(false));
      })
      .catch((e) => {
        dispatch(loadingCheck(false));
        dispatch(showError("Error", e.message));
      });
  };
};


const setMarketCoins = (marketCoins, money) => {
  return {
    type: types.setMarketCoins,
    payload: {
      marketCoins,
    },
  };
};



//ENVIA EL ID DE LA MONEDA SELECCIONADA
export const selectCoin = (selectCoinID) => {
  return (dispatch) => {
    dispatch(setSelectedCoinId(selectCoinID));
  }
}


const setSelectedCoinId = (selectCoinID) => {
  return {
    type: types.setSelectedCoin,
    payload: {
      selectCoinID,
    },
  };
};




//OBTENER INFORMACION DE UNA MONEDA EN PARTICULAR PARA EL GRÁFICO
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


const getPriceCoin = (priceCoin) => {
  return {
    type: types.getPricesCoin,
    payload: {
      priceCoin,
    },
  };
};



//OBTENER PRECIO DE COMPRA DE LA MONEDA SELECCIONADA
export const getPriceBidAsk = (idCoin, grafico) => {
  return async (dispatch) => {

    await fetch(`${urlApi}/simple/price?ids=${idCoin}&vs_currencies=usd`)
      .then((response) => response.json())
      .then((data) => {
        let price = calculateBidAsk(data[idCoin].usd);

        if (grafico === true) {
          dispatch(getBidAsk(price));
        }
      })
      .catch((e) => {
        dispatch(showError("Error", e.message));
      });
  }
}


const getBidAsk = (priceBidAsk) => {
  return {
    type: types.getPricePricBidAsk,
    payload: {
      priceBidAsk
    }
  };
};







///MUESTRA Y OCULTA EL FORMULARIO DE COMPRA
export const formBuySHowDisp = () => {
  return (dispatch) => {
    dispatch(formBuySHow(true));
  }
}

export const hideBuySHowDisp = () => {
  return (dispatch) => {
    dispatch(hideBuySHow(false));
  }
}


const formBuySHow = (show) => {
  return {
    type: types.showFormBuy,
    payload: {
      show
    }
  };
};

const hideBuySHow = (show) => {
  return {
    type: types.showFormBuy,
    payload: {
      show
    }
  };
};





///MUESTRA Y OCULTA EL FORMULARIO DE VENTA
export const formSoldSHowDisp = () => {
  return (dispatch) => {
    dispatch(formSoldSHow(true));
  }
}

export const hideSoldSHowDisp = () => {
  return (dispatch) => {
    dispatch(hideSoldSHow(false));
  }
}


const formSoldSHow = (show) => {
  return {
    type: types.showFormSold,
    payload: {
      show
    }
  };
};

const hideSoldSHow = (show) => {
  return {
    type: types.showFormSold,
    payload: {
      show
    }
  };
};

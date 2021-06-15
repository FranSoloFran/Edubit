import { loadingCheck } from "./loadingReducer";
import { showError, showOk } from "./msgboxReducer";
import { db } from "../firebase/firebase-config";
import { calculateBidAsk } from "../helper/calculateBidAsk";

const urlApi = "https://api.coingecko.com/api/v3";

const initialState = {
  money: 0,
  marketCoins: [],
  selectCoin: {},
  selectCoinDay: "",
  priceCoin: [],
  pricesBidAsk: [],
  pricePriceSold: [],
  coinHistory: [],
  coinPortafolio: [],
  showFormBuy: false,
  showFormSold: [],
};

const types = {
  setMarketCoins: "[Trading] SetMarketCoins",
  setMoney: "[Trading] SetMoney",
  setSelectedCoin: "[Trading] SetSelectedCoin",
  setSelectedCoinDay: "[Trading] SetSelectedCoinDay",
  getPricesCoin: "[Trading] GetPricesCoin",
  getPricePricBidAsk: "[Trading] GetPricesBidAsk",
  showFormBuy: "[Trading] ShowFormBuy",
  showFormSold: "[Trading] ShowFormSold",
  getPricePricSold: "[Trading] getPricePricSold",
  setPortafolio: "[Trading] setPortafolio",
  getHistoryUser: "[Trading] GetHistoryCoin",
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

    case types.setMoney:
      return {
        ...state,
        money: action.payload.money,
      };

    case types.setSelectedCoin:
      return {
        ...state,
        selectCoin: action.payload.selectCoin,
      };

    case types.setSelectedCoinDay:
      return {
        ...state,
        selectCoinDay: action.payload.selectCoinDay,
      };

    case types.getPricesCoin:
      return {
        ...state,
        priceCoin: action.payload.priceCoin,
      };

    case types.getPricePricBidAsk:
      return {
        ...state,
        pricesBidAsk: action.payload.priceBidAsk,
      };

    case types.showFormBuy:
      return {
        ...state,
        showFormBuy: action.payload.show,
      };

    case types.showFormSold:
      return {
        ...state,
        showFormSold: [action.payload.items],
      };

    case types.setPortafolio:
      return {
        ...state,
        coinPortafolio: action.payload.docs,
      };

    case types.getPricePricSold:
      return {
        ...state,
        pricePriceSold: action.payload.pricePriceSold,
      };

    case types.getHistoryUser:
      return {
        ...state,
        coinHistory: action.payload.coinHistory,
      };

    default:
      return state;
  }
};

//ACTIONS

//OBTENER 5 MONEDAS DEFINIDAS POR ID
export const coinsMarketsAPI = () => {
  return async (dispatch, getState) => {
    dispatch(loadingCheck(true));
    await fetch(
      `${urlApi}/coins/markets?vs_currency=USD&ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cdogecoin&order=market_cap_desc&sparkline=false`
    )
      .then((response) => response.json())
      .then(async (data) => {
        const docRef = await db
          .collection(`${getState().auth.uid}`)
          .doc("trading")
          .get()
          .then((docs) => docs.data());
        let info = [];
        data.forEach((element) => {
          info.push({
            id: element.id,
            name: element.name,
            image: element.image,
          });
        });

        dispatch(setMarketCoins(info, docRef.money));
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
      money,
    },
  };
};

//ENVIA EL ID DE LA MONEDA SELECCIONADA
export const selectCoin = (selectCoin) => {
  return (dispatch) => {
    dispatch(setSelectedCoin(selectCoin));
  };
};

const setSelectedCoin = (selectCoin) => {
  return {
    type: types.setSelectedCoin,
    payload: {
      selectCoin,
    },
  };
};

//ENVIA LA CANTIDAD DE DIAS
export const selectCoinDay = (day) => {
  return (dispatch) => {
    dispatch(selectCoinDayC(day));
  };
};

const selectCoinDayC = (selectCoinDay) => {
  return {
    type: types.setSelectedCoinDay,
    payload: {
      selectCoinDay,
    },
  };
};

//OBTENER INFORMACION DE UNA MONEDA EN PARTICULAR PARA EL GRÁFICO
export const infoCoinMarketPrice = (day) => {
  return async (dispatch, getState) => {
    await fetch(
      `${urlApi}/coins/${
        getState().trading.selectCoin.id
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
        } else {
          dispatch(getPriceSold(price));
          dispatch(formSoldSHowDisp(idCoin, false));
        }
      })
      .catch((e) => {
        dispatch(showError("Error", e.message));
      });
  };
};

const getBidAsk = (priceBidAsk) => {
  return {
    type: types.getPricePricBidAsk,
    payload: {
      priceBidAsk,
    },
  };
};

const getPriceSold = (pricePriceSold) => {
  return {
    type: types.getPricePricSold,
    payload: {
      pricePriceSold,
    },
  };
};

///MUESTRA Y OCULTA EL FORMULARIO DE COMPRA
export const formBuySHowDisp = () => {
  return (dispatch) => {
    dispatch(formBuySHow(true));
  };
};

export const hideBuySHowDisp = () => {
  return (dispatch) => {
    dispatch(hideBuySHow(false));
  };
};

const formBuySHow = (show) => {
  return {
    type: types.showFormBuy,
    payload: {
      show,
    },
  };
};

const hideBuySHow = (show) => {
  return {
    type: types.showFormBuy,
    payload: {
      show,
    },
  };
};

///MUESTRA Y OCULTA EL FORMULARIO DE VENTA
export const formSoldSHowDisp = (coindid) => {
  return (dispatch) => {
    dispatch(formSoldSHow(true, coindid));
  };
};

export const hideSoldSHowDisp = () => {
  return (dispatch) => {
    dispatch(hideSoldSHow(false));
  };
};

const formSoldSHow = (show, coindid) => {
  return {
    type: types.showFormSold,
    payload: {
      items: {
        show: show,
        id: coindid,
      },
    },
  };
};

const hideSoldSHow = (show) => {
  return {
    type: types.showFormSold,
    payload: {
      items: {
        show: show,
      },
    },
  };
};

///REALIZA LA COMPRA Y LO GUARDA EN LA BASE DE DATOS
export const saveBuy = (
  idCoin,
  name,
  cantidad,
  precioCompra,
  plataRestante,
  img
) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingCheck(true));
      const history = {
        idcoin: idCoin,
        name: name,
        cantidad: cantidad,
        precioCompra: precioCompra,
        fecha: Date.now(),
        img: img,
        tipo: "compra",
      };

      let portafolio = {
        idcoin: idCoin,
        name: name,
        cantidad: cantidad,
        img: img,
      };

      let Money = {
        money: plataRestante,
      };

      await db
        .collection(`${getState().auth.uid}`)
        .doc("trading")
        .collection("history")
        .doc(`${history.fecha}`)
        .set(history);

      await db
        .collection(`${getState().auth.uid}`)
        .doc("trading")
        .collection("portafolio")
        .doc(`${portafolio.idcoin}`)
        .get()
        .then(async (docs) => {
          if (docs.exists) {
            portafolio.cantidad =
              parseFloat(portafolio.cantidad) +
              parseFloat(docs.data().cantidad);
          }
          await db
            .collection(`${getState().auth.uid}`)
            .doc("trading")
            .collection("portafolio")
            .doc(`${portafolio.idcoin}`)
            .set(portafolio);
        });

      await db
        .collection(`${getState().auth.uid}`)
        .doc("trading")
        .update(Money);

      let array = [];

      await db
        .collection(`${getState().auth.uid}`)
        .doc("trading")
        .collection("portafolio")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            array.push(doc.data());
          });
        });
      dispatch(buyCriptomoneda(array));
      dispatch(setMoney(plataRestante));
      dispatch(loadingCheck(false));
      dispatch(showOk("Éxito", "La operación se ha realizado exitosamente."));
    } catch (error) {
      dispatch(showError("Error", error));
    }
  };
};

const buyCriptomoneda = (docs) => {
  return {
    type: types.setPortafolio,
    payload: {
      docs,
    },
  };
};

const setMoney = (money) => {
  return {
    type: types.setMoney,
    payload: {
      money,
    },
  };
};

///OBTIENE LAS MOENDAS QUE ESTAN EN EL PORTAFOLIOS
export const getPortafolio = () => {
  return async (dispatch, getState) => {
    let array = [];
    await db
      .collection(`${getState().auth.uid}`)
      .doc("trading")
      .collection("portafolio")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array.push(doc.data());
        });
      });
    dispatch(buyCriptomoneda(array));
    dispatch(loadingCheck(false));
  };
};

///OBTIENE EL PORTAFOLIO DE LAS PERSONAS
export const getHistory = () => {
  return async (dispatch, getState) => {
    let array = [];
    await db
      .collection(`${getState().auth.uid}`)
      .doc("trading")
      .collection("history")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array.push(doc.data());
        });
      });
    dispatch(historyCoin(array));
    dispatch(loadingCheck(false));
  };
};

const historyCoin = (coinHistory) => {
  return {
    type: types.getHistoryUser,
    payload: {
      coinHistory,
    },
  };
};

///REALIZA LA VENTA Y LO GUARDA EN LA BASE DE DATOS
export const savesSold = (
  idCoin,
  name,
  cantidad,
  precioVenta,
  plataRestante,
  img,
  eliminar
) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingCheck(true));
      const history = {
        idcoin: idCoin,
        name: name,
        cantidad: cantidad,
        precioCompra: precioVenta,
        fecha: Date.now(),
        img: img,
        tipo: "venta",
      };

      let portafolio = {
        idcoin: idCoin,
        cantidad: cantidad,
        img: img,
      };

      let Money = {
        money: plataRestante,
      };

      await db
        .collection(`${getState().auth.uid}`)
        .doc("trading")
        .collection("history")
        .doc(`${history.fecha}`)
        .set(history);

      if (eliminar) {
        await db
          .collection(`${getState().auth.uid}`)
          .doc("trading")
          .collection("portafolio")
          .doc(`${portafolio.idcoin}`)
          .delete();
      } else {
        await db
          .collection(`${getState().auth.uid}`)
          .doc("trading")
          .collection("portafolio")
          .doc(`${portafolio.idcoin}`)
          .set(portafolio);
      }

      await db
        .collection(`${getState().auth.uid}`)
        .doc("trading")
        .update(Money);

      let array = [];

      await db
        .collection(`${getState().auth.uid}`)
        .doc("trading")
        .collection("portafolio")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            array.push(doc.data());
          });
        });
      dispatch(buyCriptomoneda(array));
      dispatch(setMoney(plataRestante));
      dispatch(loadingCheck(false));
      dispatch(showOk("Éxito", "La operación se ha realizado exitosamente."));
    } catch (error) {
      dispatch(showError("Error", error));
    }
  };
};

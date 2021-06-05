import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPriceBidAsk, infoCoinMarketPrice } from '../../../reducers/tradingReducer';
import { formatToCurrency } from '../../../helper/verifyTextbox';


let time = null

export const TradingBooks = () => {


    const dispatch = useDispatch();
    const listCoins = useSelector((state) => state.trading.pricesBidAsk);
    const idCoin = useSelector((state) => state.trading.selectCoinID);
    const dayCoin = useSelector((state) => state.trading.selectCoinDay);


    useEffect(() => {
        if (idCoin !== "") {
            dispatch(getPriceBidAsk(idCoin, true));
            time = "ini"
        }
        if (time !== null) {
            time = setInterval(() => {
                dispatch(infoCoinMarketPrice(dayCoin));
                dispatch(getPriceBidAsk(idCoin, true));
            }, 300000);
        }
        return (() => {
            clearInterval(time);
        });
    }, [dispatch, idCoin, dayCoin]);


    return (
        (idCoin !== "")
            ? <div className="trading__books">
                {/* donde esta la plaza compradora y vendedora */}
                <section className="trading__books-sold-buy">
                    <p>
                        {listCoins.length > 0 && (
                            listCoins[0].venta.map((item, index) => (
                                <span key={"vent" + index}>Venta: {formatToCurrency(item)}</span>
                            )
                            ))}
                    </p>
                    <p>
                        {listCoins.length > 0 && (
                            listCoins[0].compra.map((item, index) => (
                                <span key={"comp" + index}>Compra: {formatToCurrency(item)}</span>
                            )
                            ))}
                    </p>
                </section>

                <br />
            </div>
            : <></>
    )
}
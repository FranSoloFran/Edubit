import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPriceBidAsk } from '../../../reducers/tradingReducer';
import { formatToCurrency } from '../../../helper/verifyTextbox';


let time= null

export const TradingBooks = () => {

    

    const dispatch = useDispatch();
    const listCoins = useSelector((state) => state.trading.pricesBidAsk);
    const idCoin = useSelector((state) => state.trading.selectCoinID);

    useEffect(() => {
        if (idCoin !== "") {
            dispatch(getPriceBidAsk(idCoin, true));
            time="ini"
        }
        if(time !== null){
            time = setInterval(() => {
                dispatch(getPriceBidAsk(idCoin, true));
            }, 300000);       
        }
        return(()=> {
            clearInterval(time);
        });
    }, [dispatch, idCoin]);


    return (
        (idCoin !== "")
            ? <div className="trading__books">
                {/* donde esta la plaza compradora y vendedora */}
                <section className="trading__books-sold">
                    <h4>Venta </h4>
                    {listCoins.length > 0 && (
                        listCoins[0].venta.map((item, index) => (
                            <span key={"vent" + index}>{formatToCurrency(item)}</span>
                        )
                        ))}
                </section>
                <hr />

                <section className="trading__books-buy">
                    <h4>Compra</h4>
                    {listCoins.length > 0 && (
                        listCoins[0].compra.map((item, index) => (
                            <span key={"comp" + index}>{formatToCurrency(item)}</span>
                        )
                        ))}
                </section>

                <br />
            </div>
            : <></>
    )
}
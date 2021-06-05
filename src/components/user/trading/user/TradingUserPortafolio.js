import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatToCurrency } from '../../../../helper/verifyTextbox';
import { getPortafolio, getPriceBidAsk } from '../../../../reducers/tradingReducer';


export const TradingUserPortafolio = () => {

    const dispatch = useDispatch();
    const portafolio = useSelector(state => state.trading.coinPortafolio);

    useState(() => {
        dispatch(getPortafolio());
    }, [portafolio]);


    const handleClickShowFormSold=(id)=>{
        dispatch(getPriceBidAsk(id,false));
    }

    return (
        <>
            {portafolio.map(item => (
                <li key={item.idcoin}>
                    <section className="trading__user-menu-table-row">
                        <img src={item.img} alt="" />
                        <span>{item.idcoin}</span>
                        <span>{formatToCurrency(item.cantidad)}</span>
                        <button onClick={()=>handleClickShowFormSold(item.idcoin)}>ver</button>
                    </section>
                </li>
            ))
            }
        </>
    )
}
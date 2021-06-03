import React from 'react';
import { useSelector } from 'react-redux';
import { formatToCurrency } from '../../../../helper/verifyTextbox';



export const TradingUserMoney = () =>{

    const money = useSelector( state => state.trading.money );
    
    return(
        <span>
            {formatToCurrency(money)}
        </span>
    )
}

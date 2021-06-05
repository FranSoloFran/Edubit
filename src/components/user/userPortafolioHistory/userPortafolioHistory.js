import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatToCurrency } from '../../../helper/verifyTextbox';

import { historyCoin } from '../../../reducers/tradingReducer';

export const userPortafolioHistory = () => {

    const dispatch = useDispatch();
    const history = useSelector((state) => state.trading.coinHistory);


    useEffect(() => {
        dispatch(historyCoin());
    }, [dispatch])


    return (
        <div>
            <ul className="trading__user-menu-table">
                {history.map(item => (
                    <li key={item.idcoin}>
                        <section className="trading__user-menu-table-row">
                            <img src={item.img} alt="" />
                            <span>{item.idcoin}</span>
                            <span>{formatToCurrency(item.cantidad)}</span>
                        </section>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
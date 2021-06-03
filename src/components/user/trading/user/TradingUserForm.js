import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatToCurrency } from '../../../../helper/verifyTextbox';
import { hideBuySHowDisp } from '../../../../reducers/tradingReducer';


export const TradingUserForm = () => {


    const dispatch = useDispatch();

    const money = useSelector(state => state.trading.money);
    const compra = useSelector(state => state.trading.pricesBidAsk);
    const form = useSelector(state => state.trading.showFormBuy);
    const idcoin = useSelector(state => state.trading.selectCoinID);
    
    const[total, setTotal] = useState("");

    const handleChange = (e) =>{
        console.log(e.target.name);
    }
    
    const handleClickHide = () =>{
        dispatch(hideBuySHowDisp())
    }



    return (
        (form)
        ?
        <>
            <div className="trading__user-form-background"></div>

            <div className="trading__user-form">
                <section className="trading__user-form-container">
                    <section className="trading__user-form-title">
                        <h3>OPERACIONES</h3>
                        <p>Dinero disponible: USD {formatToCurrency(money)}</p>
                    </section>
                    <form className="trading__user-form-form">

                        <div className="div-group-input">
                            <input
                                autoComplete="off"
                                className="input"
                                name="coin"
                                readOnly
                                type="text"
                                value={idcoin}
                            />
                        </div>


                        <div className="div-group-input">
                            <input
                                autoComplete="off"
                                className="input"
                                name="total"
                                onChange={handleChange}
                                required
                                type="text"
                                value={total}
                            />
                            <label className="lbl">Total a comprar</label>
                        </div>                       

                        <p>Precio de compra: USD {formatToCurrency(compra[0].compra[0])}</p>

                        <section className="trading__user-form-container-buttons">
                            <button className="trading__user-form-buttons trading__user-form-btnbuy" >comprar</button>
                            <button className="trading__user-form-buttons trading__user-form-btnexit" onClick={handleClickHide}>cancelar</button>
                        </section>
                    </form>
                </section>
            </div>
        </>

        :<></>
    )
}
